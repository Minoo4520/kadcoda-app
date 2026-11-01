import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

const statusOptions = [
  { value: 'all', label: 'همه وضعیت‌ها' },
  { value: 'success', label: 'موفق' },
  { value: 'pending', label: 'در انتظار' },
  { value: 'failed', label: 'ناموفق' },
];

function FilterSelect({ options, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (opt) => {
    setSelected(opt);
    setIsOpen(false);
    onChange?.(opt.value);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between gap-8 rounded-xl bg-[#E4E9F2] px-12 py-8 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] transition duration-200 hover:brightness-[1.02]"
      >
        <span className="text-[11px] font-bold whitespace-nowrap text-[#1C2B4A]">
          {selected.label}
        </span>

        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-14 w-14 shrink-0 text-[#8A96B0]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-10"
              aria-hidden="true"
            />
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute right-0 left-0 z-20 mt-6 flex flex-col gap-2 rounded-xl bg-[#EDF1F8] p-6 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
            >
              {options.map((opt) => {
                const isActive = opt.value === selected.value;
                return (
                  <li key={opt.value}>
                    <button
                      type="button"
                      onClick={() => handleSelect(opt)}
                      className={`w-full cursor-pointer rounded-lg px-12 py-8 text-right text-[11px] font-bold whitespace-nowrap transition duration-150 ${
                        isActive
                          ? 'text-primary-600 bg-[#DCE5F4] shadow-[inset_-2px_-2px_3px_0px_#FFFFFFCC,_inset_2px_2px_4px_0px_#A3B1C666]'
                          : 'text-[#1C2B4A] hover:bg-[#E4E9F2]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TransactionsTable({ transactions }) {
  return (
    <>
      <div className="mb-16 flex flex-col gap-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-8 rounded-xl bg-[#E4E9F2] px-12 py-8 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] sm:w-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-16 w-16 shrink-0 text-[#8A96B0]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
            />
          </svg>
          <input
            type="text"
            placeholder="جستجوی تراکنش، دانشجو یا دوره..."
            className="w-full bg-transparent text-[11px] text-[#1C2B4A] placeholder-[#8A96B0] outline-none"
          />
        </div>

        <div className="sm:w-200">
          <FilterSelect options={statusOptions} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-900 border-separate border-spacing-y-8">
          <thead>
            <tr>
              <th className="text-right text-[11px] font-bold text-[#8A96B0]">
                شماره تراکنش
              </th>
              <th className="text-right text-[11px] font-bold text-[#8A96B0]">
                دانشجو
              </th>
              <th className="text-right text-[11px] font-bold text-[#8A96B0]">
                دوره
              </th>
              <th className="text-center text-[11px] font-bold text-[#8A96B0]">
                مبلغ (تومان)
              </th>
              <th className="text-center text-[11px] font-bold text-[#8A96B0]">
                وضعیت
              </th>
              <th className="text-right text-[11px] font-bold text-[#8A96B0]">
                تاریخ
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <motion.tr
                key={t.id}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                  ease: 'easeOut',
                }}
              >
                <td className="rounded-r-xl bg-[#E4E9F2] p-12 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
                  <span
                    dir="ltr"
                    className="text-primary-600 text-[11px] font-black"
                  >
                    {t.id}
                  </span>
                </td>
                <td className="bg-[#E4E9F2] p-12 shadow-[inset_0_-2px_4px_0px_#FFFFFFCC,_inset_0_2px_5px_0px_#A3B1C666]">
                  <span className="text-[11px] font-bold text-[#1C2B4A]">
                    {t.student}
                  </span>
                </td>
                <td className="bg-[#E4E9F2] p-12 shadow-[inset_0_-2px_4px_0px_#FFFFFFCC,_inset_0_2px_5px_0px_#A3B1C666]">
                  <span className="text-[11px] font-bold text-[#1C2B4A]">
                    {t.course}
                  </span>
                </td>
                <td className="bg-[#E4E9F2] p-12 text-center shadow-[inset_0_-2px_4px_0px_#FFFFFFCC,_inset_0_2px_5px_0px_#A3B1C666]">
                  <span className="text-primary-600 text-[12px] font-black">
                    {t.amount}
                  </span>
                </td>
                <td className="bg-[#E4E9F2] p-12 text-center shadow-[inset_0_-2px_4px_0px_#FFFFFFCC,_inset_0_2px_5px_0px_#A3B1C666]">
                  <span
                    className={`inline-block rounded-full px-12 py-4 text-[10px] font-bold whitespace-nowrap ${t.statusClass}`}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="rounded-l-xl bg-[#E4E9F2] p-12 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
                  <span className="text-[11px] font-bold text-[#1C2B4A]">
                    {t.date}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
