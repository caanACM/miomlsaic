import { useState, useEffect, useRef } from 'react';
import { X, Loader2, Check, AlertCircle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { validateUKPhone, formatUKPhone, getPhoneErrorMessage, validateEmail, validateFullName } from '../utils/validation';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  specialRequests: string;
}

interface FormErrors {
  [key: string]: string;
}

interface FieldValidity {
  [key: string]: boolean;
}

const timeSlots = [
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
];

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '2',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [fieldValidity, setFieldValidity] = useState<FieldValidity>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInputRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (!validateFullName(value)) return 'Full name must be at least 2 characters';
        return null;

      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!validateEmail(value)) return 'Please enter a valid email';
        return null;

      case 'phone':
        const phoneError = getPhoneErrorMessage(value);
        return phoneError;

      case 'date':
        if (!value) return 'Date is required';
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) return 'Please select today or a future date';
        return null;

      case 'time':
        if (!value) return 'Time is required';
        return null;

      case 'partySize':
        if (!value) return 'Party size is required';
        return null;

      default:
        return null;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const fullNameError = validateField('fullName', formData.fullName);
    if (fullNameError) newErrors.fullName = fullNameError;

    const emailError = validateField('email', formData.email);
    if (emailError) newErrors.email = emailError;

    const phoneError = validateField('phone', formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    const dateError = validateField('date', formData.date);
    if (dateError) newErrors.date = dateError;

    const timeError = validateField('time', formData.time);
    if (timeError) newErrors.time = timeError;

    const partySizeError = validateField('partySize', formData.partySize);
    if (partySizeError) newErrors.partySize = partySizeError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateFieldValidity = (name: string, value: string) => {
    const error = validateField(name, value);
    setFieldValidity((prev) => ({
      ...prev,
      [name]: error === null && value.trim() !== '',
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    updateFieldValidity(name, value);
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatUKPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
    updateFieldValidity('phone', formatted);
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setSubmitMessage('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('reservations').insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          reservation_date: formData.date,
          reservation_time: formData.time,
          party_size: parseInt(formData.partySize),
          special_requests: formData.specialRequests || null,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setSubmitMessage('Reservation submitted successfully! We will contact you soon to confirm.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        partySize: '2',
        specialRequests: '',
      });

      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Reservation error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Failed to submit reservation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      <div className="relative bg-cream-50 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="sticky top-0 bg-cream-50 border-b border-cream-200 px-6 py-4 flex justify-between items-center">
          <h2 className="font-serif text-3xl font-bold text-olive-800">Make a Reservation</h2>
          <button
            onClick={onClose}
            className="text-olive-600 hover:text-olive-800 transition-colors p-1"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-sans font-medium text-olive-800 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <input
                  ref={firstInputRef}
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border-2 rounded-lg font-sans transition-colors focus:outline-none ${
                    errors.fullName
                      ? 'border-terracotta-500 bg-terracotta-50'
                      : fieldValidity.fullName
                      ? 'border-olive-400 bg-olive-50'
                      : 'border-cream-300 focus:border-olive-400'
                  }`}
                  placeholder="Your full name"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {fieldValidity.fullName && !errors.fullName && (
                  <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-olive-600" />
                )}
              </div>
              {errors.fullName && (
                <p className="text-terracotta-600 text-sm mt-1 flex items-center gap-1" id="fullName-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label className="block font-sans font-medium text-olive-800 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border-2 rounded-lg font-sans transition-colors focus:outline-none ${
                    errors.email
                      ? 'border-terracotta-500 bg-terracotta-50'
                      : fieldValidity.email
                      ? 'border-olive-400 bg-olive-50'
                      : 'border-cream-300 focus:border-olive-400'
                  }`}
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {fieldValidity.email && !errors.email && (
                  <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-olive-600" />
                )}
              </div>
              {errors.email && (
                <p className="text-terracotta-600 text-sm mt-1 flex items-center gap-1" id="email-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-sans font-medium text-olive-800 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className={`w-full px-4 py-2 border-2 rounded-lg font-sans transition-colors focus:outline-none ${
                    errors.phone
                      ? 'border-terracotta-500 bg-terracotta-50'
                      : fieldValidity.phone
                      ? 'border-olive-400 bg-olive-50'
                      : 'border-cream-300 focus:border-olive-400'
                  }`}
                  placeholder="020 7272 3509 or +44 7123 456789"
                  disabled={isSubmitting}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : 'phone-hint'}
                />
                {fieldValidity.phone && !errors.phone && (
                  <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-olive-600" />
                )}
              </div>
              {errors.phone && (
                <p className="text-terracotta-600 text-sm mt-1 flex items-center gap-1" id="phone-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.phone}
                </p>
              )}
              {!errors.phone && formData.phone && (
                <p className="text-olive-600 text-xs mt-1" id="phone-hint">
                  Formats: 020 1234 5678, 07123 456789, or +44 7123 456789
                </p>
              )}
            </div>

            <div>
              <label className="block font-sans font-medium text-olive-800 mb-2">
                Reservation Date *
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={today}
                  className={`w-full px-4 py-2 border-2 rounded-lg font-sans transition-colors focus:outline-none ${
                    errors.date
                      ? 'border-terracotta-500 bg-terracotta-50'
                      : fieldValidity.date
                      ? 'border-olive-400 bg-olive-50'
                      : 'border-cream-300 focus:border-olive-400'
                  }`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                />
                {fieldValidity.date && !errors.date && (
                  <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-olive-600" />
                )}
              </div>
              {errors.date && (
                <p className="text-terracotta-600 text-sm mt-1 flex items-center gap-1" id="date-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.date}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block font-sans font-medium text-olive-800 mb-2">
                Reservation Time *
              </label>
              <div className="relative">
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border-2 rounded-lg font-sans transition-colors focus:outline-none appearance-none ${
                    errors.time
                      ? 'border-terracotta-500 bg-terracotta-50'
                      : fieldValidity.time
                      ? 'border-olive-400 bg-olive-50'
                      : 'border-cream-300 focus:border-olive-400'
                  }`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.time}
                  aria-describedby={errors.time ? 'time-error' : undefined}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot.replace(':', ':')} PM
                    </option>
                  ))}
                </select>
                {fieldValidity.time && !errors.time && (
                  <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-olive-600 pointer-events-none" />
                )}
              </div>
              {errors.time && (
                <p className="text-terracotta-600 text-sm mt-1 flex items-center gap-1" id="time-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.time}
                </p>
              )}
            </div>

            <div>
              <label className="block font-sans font-medium text-olive-800 mb-2">
                Party Size *
              </label>
              <div className="relative">
                <select
                  name="partySize"
                  value={formData.partySize}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border-2 rounded-lg font-sans transition-colors focus:outline-none appearance-none ${
                    errors.partySize
                      ? 'border-terracotta-500 bg-terracotta-50'
                      : fieldValidity.partySize
                      ? 'border-olive-400 bg-olive-50'
                      : 'border-cream-300 focus:border-olive-400'
                  }`}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.partySize}
                  aria-describedby={errors.partySize ? 'partySize-error' : undefined}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                    <option key={size} value={size}>
                      {size} {size === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
                {fieldValidity.partySize && !errors.partySize && (
                  <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-olive-600 pointer-events-none" />
                )}
              </div>
              {errors.partySize && (
                <p className="text-terracotta-600 text-sm mt-1 flex items-center gap-1" id="partySize-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.partySize}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block font-sans font-medium text-olive-800 mb-2">
              Special Requests
              <span className="text-olive-500 text-sm font-normal">
                {' '}
                ({formData.specialRequests.length}/200)
              </span>
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              maxLength={200}
              className="w-full px-4 py-2 border-2 border-cream-300 rounded-lg font-sans transition-colors focus:outline-none focus:border-olive-400 resize-none h-24"
              placeholder="Any dietary requirements or special occasions?"
              disabled={isSubmitting}
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-olive-50 border-2 border-olive-200 rounded-lg p-4 flex items-center gap-3">
              <Check className="w-5 h-5 text-olive-600 flex-shrink-0" />
              <p className="font-sans text-olive-700">{submitMessage}</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-terracotta-50 border-2 border-terracotta-300 rounded-lg p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-terracotta-600 flex-shrink-0" />
              <p className="font-sans text-terracotta-700">{submitMessage}</p>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-cream-300 hover:border-cream-400 text-olive-800 font-sans font-semibold rounded-lg transition-all duration-300 hover:bg-cream-100"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 font-sans font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Reserve Table'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
