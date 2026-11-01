import { motion } from 'framer-motion';

const statCardClass =
  'flex flex-col gap-4 rounded-xl bg-[#E4E9F2] p-14 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]';

export default function UserEditHeader({ user }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col gap-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-16">
          <div className="to-primary-600 flex h-64 w-64 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E4D9C] text-xl font-black text-white shadow-[3px_3px_8px_0px_#193B734D]">
            {user.avatar}
          </div>
          <div>
            <h1 className="relative text-lg font-black text-[#1C2B4A]">
              ویرایش کاربر
            </h1>
            <p className="pt-8 text-[12px] text-[#8A96B0]">
              شناسه کاربر:{' '}
              <span className="text-primary-600 font-black">#{user.id}</span> ·
              عضویت از {user.joined_at}
            </p>
          </div>
        </div>

        <span className="w-fit rounded-full bg-[#FFF3DC] px-14 py-6 text-[10px] font-bold text-[#B07D00] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
          حالت ویرایش
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.03, ease: 'easeOut' }}
        className="mt-20 grid grid-cols-2 gap-12 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] md:grid-cols-4"
      >
        <div className={statCardClass}>
          <span className="text-[10px] font-bold text-[#8A96B0]">
            تعداد دوره‌ها
          </span>
          <span className="text-primary-600 text-xl font-black">
            {user.courses_count}
          </span>
        </div>
        <div className={statCardClass}>
          <span className="text-[10px] font-bold text-[#8A96B0]">
            گواهینامه‌ها
          </span>
          <span className="text-secondary-400 text-xl font-black">
            {user.certificates_count}
          </span>
        </div>
        <div className={statCardClass}>
          <span className="text-[10px] font-bold text-[#8A96B0]">
            آخرین ورود
          </span>
          <span className="text-[11px] font-black text-[#1C2B4A]">
            {user.last_login}
          </span>
        </div>
        <div className={statCardClass}>
          <span className="text-[10px] font-bold text-[#8A96B0]">وضعیت</span>
          <span className="text-[11px] font-black text-[#1C2B4A]">
            {user.status === 'active'
              ? 'فعال'
              : user.status === 'inactive'
                ? 'غیرفعال'
                : 'مسدود'}
          </span>
        </div>
      </motion.div>
    </>
  );
}
