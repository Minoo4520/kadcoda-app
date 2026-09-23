import { motion } from 'framer-motion';

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
  hidden: { opacity: 0, y: -50, scale: 0.6 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.2,
    },
  },
};

export default function PanelCourses() {
  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-6 gap-12 md:grid-cols-3 md:gap-25 lg:pr-12 lg:pl-45"
      >
        <motion.div
          variants={slideFromLeft}
          className="col-span-3 rounded-2xl bg-[#EDF1F8] p-16 shadow-[inset_-3px_-3px_8px_0px_#FFFFFFD9,_inset_4px_4px_10px_0px_#A3B1C68C] md:col-span-1"
        >
          <motion.div
            variants={iconDrop}
            className="bg-primary-600 flex h-36 w-36 items-center justify-center rounded-xl shadow-[0px_4px_12px_0px_#193B7344]"
          >
            <img src="/icons/book-white.svg" alt="book" />
          </motion.div>
          <div className="pt-12">
            <h3 className="text-3xl font-black text-[#1C2B4A]">4</h3>
          </div>
          <div className="pt-4">
            <p className="text-[11px] font-medium text-[#8A96B0]">
              همه دوره ها
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideFromLeft}
          className="col-span-3 rounded-2xl bg-[#EDF1F8] p-16 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] md:col-span-1"
        >
          <motion.div
            variants={iconDrop}
            className="flex h-36 w-36 items-center justify-center rounded-xl bg-[#E8EDF5] shadow-[-2px_-2px_5px_0px_#FFFFFFE5,_3px_3px_7px_0px_#A3B1C673]"
          >
            <img src="/icons/tick-green.svg" alt="tick" />
          </motion.div>
          <div className="pt-12">
            <h3 className="text-3xl font-black text-[#1C2B4A]">2</h3>
          </div>
          <div className="pt-4">
            <p className="text-[11px] font-medium text-[#8A96B0]">تکمیل شده</p>
          </div>
        </motion.div>

        <motion.div
          variants={slideFromLeft}
          className="col-span-6 rounded-2xl bg-[#EDF1F8] p-16 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] md:col-span-1"
        >
          <motion.div
            variants={iconDrop}
            className="flex h-36 w-36 items-center justify-center rounded-xl bg-[#E8EDF5] shadow-[-2px_-2px_5px_0px_#FFFFFFE5,_3px_3px_7px_0px_#A3B1C673]"
          >
            <img src="/icons/clock-brown.svg" alt="clock" />
          </motion.div>
          <div className="pt-12">
            <h3 className="text-3xl font-black text-[#1C2B4A]">2</h3>
          </div>
          <div className="pt-4">
            <p className="text-[11px] font-medium text-[#8A96B0]">
              در حال یادگیری
            </p>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-25 grid grid-cols-3 gap-12 sm:grid-cols-4 sm:gap-25 lg:grid-cols-3 lg:pr-32 lg:pl-65"
      >
        <motion.div
          variants={slideFromLeft}
          className="col-span-3 h-475 overflow-hidden rounded-2xl shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] sm:col-span-2 lg:col-span-1"
        >
          <div className="relative h-308 w-full overflow-hidden">
            <img
              src="/images/linux.png"
              alt="linux"
              className="absolute inset-0 z-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(15,30,70,0.6)_0%,rgba(15,30,70,0)_60%)]" />
          </div>

          <div className="flex flex-col gap-6 p-14">
            <h3 className="text-[14px] font-black text-[#1C2B4A]">
              آموزش لینوکس مقدماتی (2025)
            </h3>
            <div className="flex items-center gap-4">
              <p className="text-xs font-normal text-[#8A96B0]">علی رضایی</p>
              <img src="/icons/user.svg" alt="user" />
            </div>
          </div>

          <div className="px-14">
            <div className="border-t border-t-[#A3B1C64D] pt-10">
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-[#8A96B0]">100٪ تکمیل</p>
                <div className="flex gap-2">
                  <img src="/icons/star-line.svg" alt="star-line" />
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                </div>
              </div>

              <div className="mt-6 h-6 w-full rounded-full bg-[linear-gradient(90deg,rgba(5,150,105,0.8)_0%,#059669_100%)] shadow-[inset_-1px_-1px_2px_0px_#FFFFFFB2,_inset_1px_1px_3px_0px_#A3B1C666]"></div>

              <button className="text-primary-600 hover:bg-primary-600 mt-12 w-full cursor-pointer rounded-xl py-8 text-xs font-black shadow-[-2px_-2px_5px_0px_#FFFFFFE5,_3px_3px_7px_0px_#A3B1C673] transition duration-300 hover:text-white hover:shadow-[3px_3px_10px_0px_#193B7359]">
                مشاهده دوره →
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideFromLeft}
          className="col-span-3 h-475 overflow-hidden rounded-2xl shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] sm:col-span-2 lg:col-span-1"
        >
          <div className="relative h-308 w-full overflow-hidden">
            <img
              src="/images/rust.png"
              alt="rust"
              className="absolute inset-0 z-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(15,30,70,0.6)_0%,rgba(15,30,70,0)_60%)]" />
          </div>

          <div className="flex flex-col gap-6 p-14">
            <h3 className="text-[14px] font-black text-[#1C2B4A]">
              آموزش برنامه نویسی با زبان RUST
            </h3>
            <div className="flex items-center gap-4">
              <p className="text-xs font-normal text-[#8A96B0]">مریم احمدی</p>
              <img src="/icons/user.svg" alt="user" />
            </div>
          </div>

          <div className="px-14">
            <div className="border-t border-t-[#A3B1C64D] pt-10">
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-[#8A96B0]">45٪ تکمیل</p>
                <div className="flex gap-2">
                  <img src="/icons/star-line.svg" alt="star-line" />
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                </div>
              </div>

              <div className="mt-6 h-6 w-full rounded-full bg-[#A3B1C64D] shadow-[inset_-1px_-1px_2px_0px_#FFFFFFB2,_inset_1px_1px_3px_0px_#A3B1C666]">
                <div className="h-full w-[45%] rounded-full bg-[linear-gradient(90deg,rgba(25,59,115,0.8)_0%,#193B73_100%)]"></div>
              </div>

              <button className="mt-12 w-full cursor-pointer rounded-xl bg-gradient-to-br from-[#1E4D9C] to-[#193B73] py-8 text-xs font-black text-white shadow-[3px_3px_10px_#193B7359] transition duration-300">
                ← ادامه یادگیری
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideFromLeft}
          className="col-span-3 h-475 overflow-hidden rounded-2xl shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680] sm:col-span-2 lg:col-span-1"
        >
          <div className="relative h-308 w-full overflow-hidden">
            <img
              src="/images/aws.avif"
              alt="aws"
              className="absolute inset-0 z-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(15,30,70,0.6)_0%,rgba(15,30,70,0)_60%)]" />
          </div>

          <div className="flex flex-col gap-6 p-14">
            <h3 className="text-[14px] font-black text-[#1C2B4A]">
              معرفی Amazon Web Services (2026)
            </h3>
            <div className="flex items-center gap-4">
              <p className="text-xs font-normal text-[#8A96B0]">مریم احمدی</p>
              <img src="/icons/user.svg" alt="user" />
            </div>
          </div>

          <div className="px-14">
            <div className="border-t border-t-[#A3B1C64D] pt-10">
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-[#8A96B0]">75% تکمیل</p>
                <div className="flex gap-2">
                  <img src="/icons/star-line.svg" alt="star-line" />
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                  <img src="/icons/star.svg" alt="star" />
                </div>
              </div>

              <div className="mt-6 h-6 w-full rounded-full bg-[#A3B1C64D] shadow-[inset_-1px_-1px_2px_0px_#FFFFFFB2,_inset_1px_1px_3px_0px_#A3B1C666]">
                <div className="h-full w-[75%] rounded-full bg-[linear-gradient(90deg,rgba(25,59,115,0.8)_0%,#193B73_100%)]"></div>
              </div>

              <button className="mt-12 w-full cursor-pointer rounded-xl bg-gradient-to-br from-[#1E4D9C] to-[#193B73] py-8 text-xs font-black text-white shadow-[3px_3px_10px_#193B7359] transition duration-300">
                ← ادامه یادگیری
              </button>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}
