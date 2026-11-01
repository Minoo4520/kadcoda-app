export default function ResendButton({ countdown, onResend }) {
  return (
    <button
      type="button"
      onClick={onResend}
      disabled={countdown > 0}
      className={`text-[11px] font-bold ${
        countdown > 0
          ? 'cursor-not-allowed text-[#8A96B0]'
          : 'text-primary-600 hover:underline'
      }`}
    >
      {countdown > 0 ? `ارسال مجدد (${countdown}s)` : 'ارسال مجدد کد'}
    </button>
  );
}
