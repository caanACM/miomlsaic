export const validateUKPhone = (phone: string): boolean => {
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.length < 10 || digitsOnly.length > 13) {
    return false;
  }

  if (digitsOnly.startsWith('44')) {
    return digitsOnly.length === 12;
  }

  if (digitsOnly.startsWith('0')) {
    return digitsOnly.length === 11;
  }

  return digitsOnly.length === 10;
};

export const formatUKPhone = (value: string): string => {
  const digitsOnly = value.replace(/\D/g, '');

  if (!digitsOnly) return '';

  if (digitsOnly.startsWith('44')) {
    if (digitsOnly.length <= 2) return digitsOnly;
    if (digitsOnly.length <= 5) return `+${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2)}`;
    if (digitsOnly.length <= 9) return `+${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2, 5)} ${digitsOnly.slice(5)}`;
    return `+${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2, 5)} ${digitsOnly.slice(5, 9)} ${digitsOnly.slice(9)}`;
  }

  if (digitsOnly.startsWith('0')) {
    if (digitsOnly.length <= 4) return digitsOnly;
    if (digitsOnly.length <= 7) return `${digitsOnly.slice(0, 4)} ${digitsOnly.slice(4)}`;
    return `${digitsOnly.slice(0, 4)} ${digitsOnly.slice(4, 7)} ${digitsOnly.slice(7)}`;
  }

  if (digitsOnly.length <= 3) return digitsOnly;
  if (digitsOnly.length <= 6) return `${digitsOnly.slice(0, 3)} ${digitsOnly.slice(3)}`;
  return `${digitsOnly.slice(0, 3)} ${digitsOnly.slice(3, 6)} ${digitsOnly.slice(6)}`;
};

export const getPhoneErrorMessage = (phone: string): string | null => {
  if (!phone.trim()) {
    return 'Phone number is required';
  }

  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.length < 10) {
    return 'Phone number must be at least 10 digits';
  }

  if (digitsOnly.length > 13) {
    return 'Phone number is too long';
  }

  if (digitsOnly.startsWith('44') && digitsOnly.length !== 12) {
    return 'International format should be +44 followed by 10 digits';
  }

  if (digitsOnly.startsWith('0') && digitsOnly.length !== 11) {
    return 'UK format should be 0 followed by 10 digits';
  }

  if (!digitsOnly.startsWith('0') && !digitsOnly.startsWith('44')) {
    if (digitsOnly.length !== 10) {
      return 'Invalid UK phone format';
    }
  }

  return null;
};

export const validateEmail = (email: string): boolean => {
  if (!email.trim()) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateFullName = (name: string): boolean => {
  return name.trim().length >= 2;
};
