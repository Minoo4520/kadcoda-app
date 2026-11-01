import Spinner from './Spinner';

export default function PrimaryButton({
  type = 'submit',
  loading = false,
  disabled = false,
  loadingText,
  className = '',
  children,
}) {
  const isDisabled = loading || disabled;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`to-primary-600 mt-6 inline-flex w-full items-center justify-center gap-10 rounded-xl bg-gradient-to-br from-[#1E4D9C] px-20 py-14 text-[12px] font-black text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 hover:brightness-110 ${
        isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      } ${className}`}
    >
      {loading ? (
        <>
          <Spinner />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
}
