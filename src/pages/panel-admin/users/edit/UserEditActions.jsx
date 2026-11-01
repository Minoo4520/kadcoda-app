import { Link } from 'react-router';

export default function UserEditActions({ canSubmit, passwordsMismatch }) {
  const disabled = !canSubmit || passwordsMismatch;

  return (
    <div className="mt-20 flex flex-col-reverse gap-12 sm:flex-row sm:justify-end">
      <Link
        to="/panel-admin/users"
        className="rounded-xl bg-[#EDF1F8] px-20 py-12 text-center text-[11px] font-bold text-[#8A96B0] shadow-[-3px_-3px_7px_0px_#FFFFFFE5,_4px_4px_10px_0px_#A3B1C673] transition duration-200 hover:text-[#1C2B4A]"
      >
        انصراف
      </Link>
      <button
        type="button"
        className="cursor-pointer rounded-xl bg-[#EDF1F8] px-20 py-12 text-[11px] font-bold text-[#8A96B0] shadow-[-3px_-3px_7px_0px_#FFFFFFE5,_4px_4px_10px_0px_#A3B1C673] transition duration-200 hover:text-[#1C2B4A]"
      >
        ارسال ایمیل بازیابی
      </button>
      <button
        type="submit"
        disabled={disabled}
        className={`to-primary-600 rounded-xl bg-gradient-to-br from-[#1E4D9C] px-20 py-12 text-[11px] font-black text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 ${
          !disabled
            ? 'cursor-pointer hover:brightness-110'
            : 'cursor-not-allowed opacity-50'
        }`}
      >
        ذخیره تغییرات
      </button>
    </div>
  );
}
