import { useReducer, useState } from 'react';

import CollabFormFields from './CollabFormFields';
import CollabIllustration from './CollabIllustration';
import ContactInfo from './ContactInfo';

// ---------- Reducer ----------
const initialState = {
  fullName: '',
  phone: '',
  email: '',
  collabType: '',
  fileName: '',
  notes: '',
};

function formReducer(state, action) {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const collabOptions = [
  'همکاری فروش',
  'طراحی و توسعه',
  'بازاریابی',
  'سرمایه‌گذاری',
];

// ---------- Component ----------
export default function CollabForm({
  isLoggedIn = false,
  contact = {
    address: 'قزوین پارک علم فناوری',
    phone: '+98-933 151 6505',
    email: 'kadcoda.ir',
  },
  onSubmit,
}) {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submittedMsg, setSubmittedMsg] = useState('');

  const handleChange = (field) => (e) => {
    dispatch({ type: 'SET_FIELD', field, value: e.target.value });
  };

  const handleSelectType = (option) => {
    dispatch({ type: 'SET_FIELD', field: 'collabType', value: option });
    setDropdownOpen(false);
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      dispatch({
        type: 'SET_FIELD',
        field: 'fileName',
        value: file.name,
      });
    }
  };

  const handleSubmit = () => {
    if (!isLoggedIn) {
      setSubmittedMsg(
        'برای ارسال فرم، لازم است ابتدا وارد حساب کاربری خود شوید.',
      );
      return;
    }

    if (!form.fullName || !form.phone) {
      setSubmittedMsg('لطفاً نام و شماره تماس را وارد کنید.');
      return;
    }

    setSubmittedMsg('فرم شما با موفقیت ارسال شد.');

    if (onSubmit) onSubmit(form);

    dispatch({ type: 'RESET' });
  };

  return (
    <div className="relative container w-full overflow-hidden">
      <div className="absolute top-0 left-0 z-0 h-380 w-full overflow-hidden bg-linear-to-r from-[#393387] via-[#9aaeef] to-[#7982e1] md:h-460">
        <div className="bg-secondary-100 absolute top-[35%] left-[-10%] h-90 w-[120%] -rotate-6 opacity-14"></div>
        <div className="bg-secondary-100 absolute top-[60%] left-[-10%] h-35 w-[120%] -rotate-6 opacity-50"></div>
      </div>

      <div className="relative z-10 flex w-full flex-col pt-32 pb-40 sm:pb-56 md:pt-64">
        <div className="relative flex w-full max-w-980 flex-col rounded-3xl border border-white/20 bg-white shadow-2xl sm:mx-auto sm:w-[calc(100%-32px)] md:w-full md:flex-row">
          <div className="grid w-full gap-40 p-16 sm:p-32 md:grid-cols-2 lg:p-40">
            <div>
              <h1 className="text-primary-800 mb-8 text-xl font-bold tracking-tight sm:text-2xl md:text-[26px]">
                فرم همکاری با ما!
              </h1>

              <p className="mb-28 text-xs leading-relaxed text-gray-600 sm:text-sm lg:text-base">
                لطفاً اطلاعات خود را برای بررسی همکاری تکمیل کنید.
              </p>

              <CollabFormFields
                form={form}
                dropdownOpen={dropdownOpen}
                collabOptions={collabOptions}
                handleChange={handleChange}
                handleSelectType={handleSelectType}
                setDropdownOpen={setDropdownOpen}
                handleFile={handleFile}
              />

              <p className="text-primary-500 mt-16 text-xs leading-24">
                برای ارسال فرم، لازم است ابتدا وارد حساب کاربری خود شوید.
              </p>

              {submittedMsg && (
                <p className="mt-8 text-sm font-medium text-blue-700">
                  {submittedMsg}
                </p>
              )}

              <button
                onClick={handleSubmit}
                className="bg-primary-600 text-primary-50 hover:bg-primary-800 mt-16 flex w-full items-center justify-center gap-8 rounded-xl py-12 text-sm font-medium transition-colors sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-12 w-12 sm:h-16 sm:w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.27 3.125a.75.75 0 0 1 .99-.95l16.74 7.163a.75.75 0 0 1 0 1.374L4.26 17.875a.75.75 0 0 1-.99-.95L6 12Zm0 0h9.75"
                  />
                </svg>
                ارسال فرم کامل همکاری
              </button>
            </div>

            <div className="flex flex-col">
              <CollabIllustration />

              <ContactInfo contact={contact} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
