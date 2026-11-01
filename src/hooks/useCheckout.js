import { useMemo, useState } from 'react';

export function useCheckout(pricing, onClose, { TEST_CODES, parsePrice }) {
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(null);
  const [discountError, setDiscountError] = useState('');

  const basePrice = useMemo(
    () => parsePrice(pricing.originalPrice || pricing.finalPrice),
    [pricing.originalPrice, pricing.finalPrice],
  );

  const baseDiscountAmount = useMemo(() => {
    const finalPrice = parsePrice(pricing.finalPrice);
    return Math.max(basePrice - finalPrice, 0);
  }, [basePrice, pricing.finalPrice]);

  const appliedDiscountAmount = useMemo(() => {
    if (!appliedDiscount) return 0;
    const currentPrice = basePrice - baseDiscountAmount;
    return Math.round((currentPrice * appliedDiscount.percent) / 100);
  }, [appliedDiscount, basePrice, baseDiscountAmount]);

  const finalPrice = Math.max(
    basePrice - baseDiscountAmount - appliedDiscountAmount,
    0,
  );

  const handleCodeChange = (value) => {
    setDiscountCode(value);
    setDiscountError('');
  };

  const handleApply = () => {
    const code = discountCode.trim().toUpperCase();
    if (!code) {
      setDiscountError('کد تخفیف را وارد کنید');
      return;
    }
    const found = TEST_CODES[code];
    if (!found) {
      setDiscountError('کد تخفیف نامعتبر است');
      return;
    }
    setAppliedDiscount({ code, ...found });
    setDiscountError('');
  };

  const handleRemove = () => {
    setAppliedDiscount(null);
    setDiscountCode('');
    setDiscountError('');
  };

  const reset = () => {
    setDiscountCode('');
    setAppliedDiscount(null);
    setDiscountError('');
  };

  const handleClose = () => {
    onClose();
    reset();
  };

  return {
    discountCode,
    appliedDiscount,
    discountError,
    basePrice,
    baseDiscountAmount,
    appliedDiscountAmount,
    finalPrice,
    handleCodeChange,
    handleApply,
    handleRemove,
    handleClose,
  };
}
