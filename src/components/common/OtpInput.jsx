import { useRef } from 'react';

export default function OtpInput({ value, onChange, error }) {
  const inputsRef = useRef([]);
  const digits = value.split('');

  const handleChange = (index, char) => {
    if (!/^\d?$/.test(char)) return;
    const next = digits.slice();
    next[index] = char;
    const joined = next.join('').slice(0, 6);
    onChange(joined.padEnd(6, ' ').trimEnd());

    if (char && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (text) {
      onChange(text);
      inputsRef.current[Math.min(text.length, 5)]?.focus();
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div dir="ltr" className="flex justify-center gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <input
            key={i}
            ref={(el) => (inputsRef.current[i] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digits[i] || ''}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onPaste={handlePaste}
            className={`h-40 w-37 rounded-xl bg-[#E4E9F2] text-center text-lg font-black text-[#1C2B4A] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] transition outline-none focus:shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_3px_3px_8px_0px_#8A96B080] sm:h-56 sm:w-50 ${error ? 'ring-opacity-40 ring-2 ring-[#B91C1C]' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
