import { motion } from 'framer-motion';

import Field from '../../../../components/ui/Field';
import FileInput from '../../../../components/ui/FileInput';
import FilterSelect from '../../../../components/ui/FilterSelect';
import SectionHeader from '../../../../components/ui/SectionHeader';
import ToggleSwitch from '../../../../components/ui/ToggleSwitch';

export default function UserSettingsForm({
  form,
  setForm,
  avatarName,
  setAvatarName,
  statusOptions,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
      className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
    >
      <SectionHeader title="تنظیمات و دسترسی‌ها" />
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <Field label="تصویر پروفایل" hint="JPG یا PNG، حداکثر ۲ مگابایت">
          <FileInput
            fileName={avatarName}
            accept="image/*"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) {
                setAvatarName(f.name);
                setForm((prev) => ({ ...prev, avatar: f }));
              }
            }}
          />
        </Field>
        <Field label="وضعیت حساب کاربری">
          <FilterSelect
            options={statusOptions}
            value={form.status}
            onChange={(v) => setForm((prev) => ({ ...prev, status: v }))}
          />
        </Field>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
        <ToggleSwitch
          checked={form.is_verified}
          onChange={(v) => setForm((prev) => ({ ...prev, is_verified: v }))}
          label="حساب تأیید شده"
          description="ایمیل و موبایل کاربر تأیید شده باشد"
        />
        <ToggleSwitch
          checked={form.has_support_access}
          onChange={(v) =>
            setForm((prev) => ({ ...prev, has_support_access: v }))
          }
          label="دسترسی به پشتیبانی"
          description="امکان ارسال تیکت برای این کاربر"
        />
      </div>
    </motion.div>
  );
}
