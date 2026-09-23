import { motion } from 'framer-motion';
import { Link } from 'react-router';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const iconDrop = {
  hidden: { opacity: 0, y: -50, rotate: -15, scale: 0.6 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.2,
    },
  },
};

const statsCards = [
  {
    icon: '/icons/book-active.svg',
    count: '4',
    title: 'دوره های من',
    sub: '2 فعال · 2 تکمیل',
  },
  {
    icon: '/icons/medal-brown.svg',
    count: '2',
    title: 'گواهینامه',
    sub: 'گواهی دریافتی',
  },
  {
    icon: '/icons/message-blue.svg',
    count: '3',
    title: 'پشتیبانی',
    sub: '2 تیکت باز',
  },
  {
    icon: '/icons/user-green.svg',
    count: '85%',
    title: 'پروفایل',
    sub: 'تکمیل پروفایل',
  },
];

export default function PanelDashboard() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="from-primary-600 flex h-117 w-full items-center justify-between rounded-2xl bg-gradient-to-br to-[#112552] shadow-[-4px_-4px_12px_0px_#FFFFFF80,_8px_8px_20px_0px_#193B7359]"
      >
        <div className="relative flex h-117 w-full items-center justify-between rounded-[40px] bg-[radial-gradient(98.62%_98.62%_at_85%_50%,_rgba(247,185,40,0.14)_0%,_rgba(247,185,40,0)_60%)] px-18 sm:px-30">
          <div>
            <p className="text-xs text-[#FFFFFF66]">خوش آمدید</p>
            <h1 className="pt-4 text-xl font-black text-white">رضا کریمی</h1>
            <p className="pt-4 text-[11px] text-[#FFFFFF4D]">
              آخرین ورود · امروز ۱۴:۳۲
            </p>
          </div>

          <div className="flex items-center gap-12">
            <div className="flex flex-col items-center rounded-xl bg-[#FFFFFF14] px-16 py-10 shadow-[inset_1px_1px_4px_0px_#00000033]">
              <span className="text-lg font-black text-white">4</span>
              <span className="pt-4 text-[10px] text-[#FFFFFF59]">دوره</span>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-[#FFFFFF14] px-16 py-10 shadow-[inset_1px_1px_4px_0px_#00000033]">
              <span className="text-lg font-black text-white">2</span>
              <span className="pt-4 text-[10px] text-[#FFFFFF59]">گواهی</span>
            </div>
          </div>

          <div className="absolute -top-11 -left-28 h-160 w-160 rounded-full bg-[#FFFFFF0A]"></div>
        </div>
      </motion.div>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-25 grid grid-cols-2 gap-20 md:grid-cols-4"
      >
        {statsCards.map((card, i) => (
          <motion.div
            key={i}
            variants={slideFromLeft}
            whileHover={{ y: -4 }}
            className="flex h-163 flex-col items-start justify-center rounded-2xl bg-[#EDF1F8] px-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
          >
            <motion.div
              variants={iconDrop}
              className="flex h-40 w-40 items-center justify-center rounded-xl shadow-[-2px_-2px_6px_0px_#FFFFFFE5,_3px_3px_8px_0px_#A3B1C673]"
            >
              <img src={card.icon} alt="" />
            </motion.div>

            <p className="text-primary-600 py-8 text-2xl font-black">
              {card.count}
            </p>
            <p className="text-[14px] font-bold text-[#1C2B4A]">{card.title}</p>
            <p className="text-[11px] font-normal text-[#8A96B0]">{card.sub}</p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-25 grid grid-cols-12 gap-20"
      >
        <motion.div
          variants={slideFromLeft}
          className="col-span-12 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] md:col-span-7"
        >
          <div className="flex w-full items-center justify-between">
            <div>
              <span className="relative text-sm font-black text-[#1C2B4A]">
                دوره های فعال
                <span className="bg-secondary-300 absolute top-2 -left-10 h-16 w-4 rounded-full shadow-[0px_0px_6px_0px_#F7B928AA]"></span>
              </span>
            </div>
            <div>
              <button className="text-primary-600 text-[11px] font-bold">
                همه ←
              </button>
            </div>
          </div>

          <div className="mt-13 flex items-center justify-between rounded-xl bg-[#E4E9F2] p-10 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
            <div className="flex items-center">
              <div className="flex h-44 w-44 items-center justify-center rounded-xl shadow-[2px_2px_6px_0px_#A3B1C680]">
                <img src="/icons/tick-green.svg" alt="" />
              </div>
              <div className="mr-8 flex flex-col gap-4">
                <span className="text-xs font-bold text-[#1C2B4A]">
                  مدیریت محصول دیجیتال
                </span>
                <span className="text-[10px] text-[#8A96B0]">مریم احمدی</span>
              </div>
            </div>
            <Link className="bg-primary hover:bg-primary-500 flex h-32 w-32 cursor-pointer items-center justify-center rounded-full shadow-[-1px_-1px_4px_0px_#FFFFFF66,_3px_3px_8px_0px_#193B7359] transition duration-300">
              <img src="/icons/play.svg" alt="play" />
            </Link>
          </div>
          <div className="mt-10 flex items-center justify-between rounded-xl bg-[#E4E9F2] p-10 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
            <div className="flex items-center">
              <div className="flex h-44 w-44 items-center justify-center rounded-xl shadow-[2px_2px_6px_0px_#A3B1C680]">
                <img src="/icons/tick-green.svg" alt="" />
              </div>{' '}
              <div className="mr-8 flex flex-col gap-4">
                <span className="text-xs font-bold text-[#1C2B4A]">
                  طراحی رابط کاربری با Figma
                </span>
                <span className="text-[10px] text-[#8A96B0]">داود بهمنی</span>
              </div>
            </div>
            <Link className="bg-primary hover:bg-primary-500 flex h-32 w-32 cursor-pointer items-center justify-center rounded-full shadow-[-1px_-1px_4px_0px_#FFFFFF66,_3px_3px_8px_0px_#193B7359] transition duration-300">
              <img src="/icons/play.svg" alt="play" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={slideFromLeft}
          className="col-span-12 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] md:col-span-5"
        >
          <div className="flex w-full items-center justify-between">
            <div>
              <span className="relative text-sm font-black text-[#1C2B4A]">
                گواهینامه ها
                <span className="bg-primary-600 absolute top-2 -right-10 h-16 w-4 rounded-full shadow-[0px_0px_6px_0px_#193B7388]"></span>
              </span>
            </div>
            <div>
              <button className="text-primary-600 rounded-full bg-[#DCE5F4] px-10 py-2 text-[11px] font-bold">
                2
              </button>
            </div>
          </div>

          <div className="mt-13 flex items-center justify-between rounded-xl bg-[#E4E9F2] p-10 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
            <div className="flex items-center">
              <div className="flex h-44 w-44 items-center justify-center rounded-xl shadow-[2px_2px_6px_0px_#A3B1C680]">
                <img src="/icons/medal-brown.svg" alt="medal" />
              </div>
              <div className="mr-8 flex flex-col gap-4">
                <span className="text-xs font-bold text-[#1C2B4A]">
                  گواهی تکمیل دوره React پیشرفته
                </span>
                <span className="text-[10px] text-[#8A96B0]">۱۴۰۳/۰۵/۱۲</span>
              </div>
            </div>
            <span className="rounded-full bg-[#FFF3DC] px-10 py-2 text-[10px] font-bold text-[#B07D00]">
              عالی
            </span>
          </div>
          <div className="mt-10 flex items-center justify-between rounded-xl bg-[#E4E9F2] p-10 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
            <div className="flex items-center">
              <div className="flex h-44 w-44 items-center justify-center rounded-xl shadow-[2px_2px_6px_0px_#A3B1C680]">
                <img src="/icons/medal-brown.svg" alt="medal" />
              </div>
              <div className="mr-8 flex flex-col gap-4">
                <span className="text-xs font-bold text-[#1C2B4A]">
                  گواهی تکمیل دوره تحلیل داده
                </span>
                <span className="text-[10px] text-[#8A96B0]">۱۴۰۳/۰۵/۱۲</span>
              </div>
            </div>
            <span className="rounded-full bg-[#FFF3DC] px-10 py-2 text-[10px] font-bold text-[#B07D00]">
              عالی
            </span>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        className="from-primary-600 mt-25 rounded-2xl bg-gradient-to-br to-[#1A4598] p-21 shadow-[-3px_-3px_10px_0px_#FFFFFF73,_8px_8px_20px_0px_#193B734D]"
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-black text-white">تیکت ها</span>
          <button className="cursor-pointer rounded-lg bg-[#FFFFFF14] px-12 py-4 text-[11px] text-[#FFFFFF80] shadow-[inset_1px_1px_3px_0px_#00000033] transition duration-200 hover:bg-white hover:text-[#8A96B0]">
            مشاهده همه
          </button>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-20 sm:px-16 md:gap-0">
          <div className="col-span-12 flex gap-10 md:col-span-5 md:pl-20">
            <div className="flex h-102 grow basis-1 flex-col items-center justify-center rounded-xl bg-[#FFFFFF14] shadow-[inset_1px_1px_4px_0px_#00000033] sm:w-160">
              <span className="text-xl font-black text-white">3</span>
              <span className="pt-4 text-[10px] text-[#FFFFFF66]">مجموع</span>
            </div>
            <div className="flex h-102 grow basis-1 flex-col items-center justify-center rounded-xl bg-[#FFFFFF14] shadow-[inset_1px_1px_4px_0px_#00000033] sm:w-160">
              <span className="text-secondary-300 text-xl font-black">2</span>
              <span className="pt-4 text-[10px] text-[#FFFFFF66]">باز</span>
            </div>
          </div>
          <div className="col-span-12 flex flex-col gap-10 md:col-span-7">
            <div className="flex items-center justify-between rounded-lg bg-[#FFFFFF12] px-12 py-10">
              <div className="flex items-center gap-8">
                <div className="h-8 w-8 rounded-full bg-[#EF4444]"></div>
                <div>
                  <p className="text-[11px] font-normal text-white">
                    مشکل در پخش ویدیوی جلسه ۷
                  </p>
                </div>
              </div>
              <div>
                <span className="text-primary-600 rounded-full bg-[#DCE5F4] px-10 py-2 text-[10px] font-bold">
                  در حال برسی
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[#FFFFFF12] px-12 py-10">
              <div className="flex items-center gap-8">
                <div className="h-8 w-8 rounded-full bg-[#22C55E]"></div>
                <div>
                  <p className="text-[11px] font-normal text-white">
                    سوال درباره محتوای فصل سوم
                  </p>
                </div>
              </div>
              <div>
                <span className="rounded-full bg-[#ECEFF4] px-10 py-2 text-[10px] font-bold text-[#8A96B0]">
                  بسته شده
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
