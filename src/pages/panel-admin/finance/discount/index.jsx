import { useState } from 'react';

import { motion } from 'framer-motion';
import { Link } from 'react-router';

import Field from '../../../../components/ui/Field';
import FilterSelect from '../../../../components/ui/FilterSelect';
import SectionHeader from '../../../../components/ui/SectionHeader';
import ToggleSwitch from '../../../../components/ui/ToggleSwitch';

const typeOptions = [
  { value: 'percent', label: 'درصدی' },
  { value: 'fixed', label: 'مبلغ ثابت (تومان)' },
];

const scopeOptions = [
  { value: 'all', label: 'همه دوره‌ها' },
  { value: 'specific', label: 'دوره‌های انتخابی' },
  { value: 'category', label: 'دسته‌بندی خاص' },
];

const categoryOptions = [
  { value: '', label: 'انتخاب دسته‌بندی' },
  { value: 'python', label: 'پایتون' },
  { value: 'frontend', label: 'فرانت‌اند' },
  { value: 'backend', label: 'بک‌اند' },
  { value: 'design', label: 'طراحی' },
  { value: 'data', label: 'علم داده' },
];

const inputClass =
  'w-full rounded-xl bg-[#E4E9F2] px-12 py-10 text-[11px] text-[#1C2B4A] placeholder-[#8A96B0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] outline-none transition';

export default function PanelAdminDiscountCreate() {
  const [form, setForm] = useState({
    code: '',
    type: 'percent',
    amount: '',
    max_discount: '',
    min_purchase: '',
    usage_limit: '',
    per_user_limit: '1',
    scope: 'all',
    category_id: '',
    start_date: '',
    end_date: '',
    is_active: true,
  });

  const [generated, setGenerated] = useState(false);

  const canSubmit =
    form.code.trim() !== '' &&
    form.amount.toString().trim() !== '' &&
    form.start_date.trim() !== '' &&
    form.end_date.trim() !== '';

  const generateCode = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setForm((prev) => ({ ...prev, code }));
    setGenerated(true);
    setTimeout(() => setGenerated(false), 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    console.log('Create discount payload:', form);
  };

  const isPercent = form.type === 'percent';

  return (
    <form onSubmit={handleSubmit}>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="relative text-lg font-black text-[#1C2B4A]">
            افزودن کد تخفیف
          </h1>
          <p className="pt-8 text-[12px] text-[#8A96B0]">
            کد تخفیف جدید بسازید و شرایط استفاده از آن را تعیین کنید
          </p>
        </div>

        <span className="w-fit rounded-full bg-[#DCFCE7] px-14 py-6 text-[10px] font-bold text-[#15803D] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
          کد جدید
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
        className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <SectionHeader title="اطلاعات کد تخفیف" />
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <Field label="کد تخفیف" required hint="حروف بزرگ و اعداد">
            <div className="flex gap-8">
              <input
                type="text"
                dir="ltr"
                value={form.code}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    code: e.target.value.toUpperCase().replace(/\s/g, ''),
                  }))
                }
                placeholder="SUMMER30"
                className={`${inputClass} flex-1 tracking-widest`}
              />
              <button
                type="button"
                onClick={generateCode}
                aria-label="تولید کد تصادفی"
                className={`flex h-40 w-40 shrink-0 cursor-pointer items-center justify-center rounded-xl shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] transition duration-200 ${
                  generated
                    ? 'bg-[#DCFCE7] text-[#15803D]'
                    : 'text-primary-600 bg-[#E4E9F2] hover:brightness-105'
                }`}
              >
                {generated ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.2}
                    stroke="currentColor"
                    className="h-18 w-18"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-18 w-18"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                )}
              </button>
            </div>
          </Field>

          <Field label="نوع تخفیف">
            <FilterSelect
              options={typeOptions}
              value={form.type}
              onChange={(v) => setForm((prev) => ({ ...prev, type: v }))}
            />
          </Field>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
          <Field
            label={isPercent ? 'درصد تخفیف' : 'مبلغ تخفیف (تومان)'}
            required
            hint={isPercent ? 'عددی بین ۱ تا ۱۰۰' : 'مبلغ ثابت تخفیف'}
          >
            <input
              type="number"
              value={form.amount}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, amount: e.target.value }))
              }
              placeholder={isPercent ? '۲۰' : '۲۰۰۰۰۰'}
              className={inputClass}
            />
          </Field>
          {isPercent ? (
            <Field
              label="حداکثر سقف تخفیف (تومان)"
              hint="در صورت خالی بودن، بدون سقف اعمال می‌شود"
            >
              <input
                type="number"
                value={form.max_discount}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, max_discount: e.target.value }))
                }
                placeholder="۵۰۰۰۰۰"
                className={inputClass}
              />
            </Field>
          ) : (
            <Field label="حداقل مبلغ خرید (تومان)">
              <input
                type="number"
                value={form.min_purchase}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    min_purchase: e.target.value,
                  }))
                }
                placeholder="۵۰۰۰۰۰"
                className={inputClass}
              />
            </Field>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <SectionHeader title="محدودیت‌ها" />
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
          <Field label="حداقل مبلغ خرید (تومان)" hint="اختیاری">
            <input
              type="number"
              value={form.min_purchase}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, min_purchase: e.target.value }))
              }
              placeholder="۵۰۰۰۰۰"
              className={inputClass}
            />
          </Field>
          <Field label="سقف کل استفاده" hint="اختیاری — خالی = بدون سقف">
            <input
              type="number"
              value={form.usage_limit}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, usage_limit: e.target.value }))
              }
              placeholder="۱۰۰"
              className={inputClass}
            />
          </Field>
          <Field label="سقف استفاده هر کاربر">
            <input
              type="number"
              value={form.per_user_limit}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, per_user_limit: e.target.value }))
              }
              placeholder="1"
              className={inputClass}
            />
          </Field>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <SectionHeader title="اعمال تخفیف" />
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <Field label="محدوده اعمال">
            <FilterSelect
              options={scopeOptions}
              value={form.scope}
              onChange={(v) => setForm((prev) => ({ ...prev, scope: v }))}
            />
          </Field>

          {form.scope === 'category' && (
            <Field label="دسته‌بندی">
              <FilterSelect
                options={categoryOptions}
                value={form.category_id}
                onChange={(v) =>
                  setForm((prev) => ({ ...prev, category_id: v }))
                }
              />
            </Field>
          )}
        </div>

        {form.scope === 'specific' && (
          <div className="mt-20 rounded-xl bg-[#E4E9F2] p-16 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
            <p className="text-[11px] font-bold text-[#1C2B4A]">
              انتخاب دوره‌ها
            </p>
            <p className="mt-4 text-[10px] text-[#8A96B0]">
              در نسخه کامل، اینجا لیست دوره‌ها برای انتخاب نمایش داده می‌شود.
            </p>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
      >
        <SectionHeader title="بازه زمانی و وضعیت" />
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <Field label="تاریخ شروع" required>
            <input
              type="text"
              value={form.start_date}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, start_date: e.target.value }))
              }
              placeholder="۱۴۰۳/۰۵/۰۱"
              className={inputClass}
            />
          </Field>
          <Field label="تاریخ اعتبار (پایان)" required>
            <input
              type="text"
              value={form.end_date}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, end_date: e.target.value }))
              }
              placeholder="۱۴۰۳/۰۷/۰۱"
              className={inputClass}
            />
          </Field>
        </div>

        <div className="mt-20">
          <ToggleSwitch
            checked={form.is_active}
            onChange={(v) => setForm((prev) => ({ ...prev, is_active: v }))}
            label="کد تخفیف فعال باشد"
            description="در صورت خاموش بودن، کاربران نمی‌توانند از آن استفاده کنند"
          />
        </div>
      </motion.div>

      <div className="mt-20 flex flex-col-reverse gap-12 sm:flex-row sm:justify-end">
        <Link
          to="/panel-admin/finance"
          className="rounded-xl bg-[#EDF1F8] px-20 py-12 text-center text-[11px] font-bold text-[#8A96B0] shadow-[-3px_-3px_7px_0px_#FFFFFFE5,_4px_4px_10px_0px_#A3B1C673] transition duration-200 hover:text-[#1C2B4A]"
        >
          انصراف
        </Link>
        <button
          type="button"
          className="cursor-pointer rounded-xl bg-[#EDF1F8] px-20 py-12 text-[11px] font-bold text-[#8A96B0] shadow-[-3px_-3px_7px_0px_#FFFFFFE5,_4px_4px_10px_0px_#A3B1C673] transition duration-200 hover:text-[#1C2B4A]"
        >
          ذخیره پیش‌نویس
        </button>
        <button
          type="submit"
          disabled={!canSubmit}
          className={`to-primary-600 rounded-xl bg-gradient-to-br from-[#1E4D9C] px-20 py-12 text-[11px] font-black text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 ${canSubmit ? 'cursor-pointer hover:brightness-110' : 'cursor-not-allowed opacity-50'}`}
        >
          ایجاد کد تخفیف
        </button>
      </div>
    </form>
  );
}
