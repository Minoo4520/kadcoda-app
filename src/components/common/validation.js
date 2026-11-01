export const isValidMobile = (v) => /^09\d{9}$/.test(v.trim());

export const isValidOtp = (v) => /^\d{6}$/.test(v);

export const isValidPassword = (v) => v.length >= 6;

export const passwordsMatch = ({ password, confirm }) =>
  password !== '' && password === confirm;
