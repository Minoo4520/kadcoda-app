import { motion } from 'framer-motion';

import Field from '../../../../components/ui/Field';
import FileInput from '../../../../components/ui/FileInput';
import SectionHeader from '../../../../components/ui/SectionHeader';
import ToggleSwitch from '../../../../components/ui/ToggleSwitch';

export default function CourseMediaSettings({
  form,
  coverImgName,
  coverVideoName,
  onChange,
  onCoverImgChange,
  onCoverVideoChange,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
      className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
    >
      <SectionHeader title="رسانه و تنظیمات" />
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <Field
          label="تصویر کاور"
          hint={
            coverImgName
              ? 'برای تغییر، فایل جدید انتخاب کنید'
              : 'JPG یا PNG، حداکثر ۲ مگابایت'
          }
        >
          <FileInput
            fileName={coverImgName}
            accept="image/*"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) {
                onCoverImgChange(f.name);
                onChange((prev) => ({ ...prev, cover_img: f }));
              }
            }}
          />
        </Field>
        <Field
          label="ویدیو کاور"
          hint={
            coverVideoName
              ? 'برای تغییر، فایل جدید انتخاب کنید'
              : 'ویدیوی معرفی کوتاه دوره'
          }
        >
          <FileInput
            fileName={coverVideoName}
            accept="video/*"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) {
                onCoverVideoChange(f.name);
                onChange((prev) => ({ ...prev, cover_video: f }));
              }
            }}
          />
        </Field>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2">
        <ToggleSwitch
          checked={form.has_support}
          onChange={(v) => onChange((prev) => ({ ...prev, has_support: v }))}
          label="پشتیبانی دارد"
          description="امکان ارسال تیکت برای دانشجویان"
        />
        <ToggleSwitch
          checked={form.is_active}
          onChange={(v) => onChange((prev) => ({ ...prev, is_active: v }))}
          label="دوره فعال باشد"
          description="در صورت غیرفعال بودن نمایش داده نمی‌شود"
        />
      </div>
    </motion.div>
  );
}
