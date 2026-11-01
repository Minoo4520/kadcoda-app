import { useState } from 'react';

import { motion } from 'framer-motion';

import SectionHeader from '../../../../components/ui/SectionHeader';
import { inputClass } from './constants';

export default function AddChapterForm({ nextOrder, onAdd }) {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (!title.trim()) return;
    onAdd(title.trim());
    setTitle('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
      className="mt-20 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
    >
      <SectionHeader title="افزودن فصل جدید" />
      <div className="flex flex-col gap-12 sm:flex-row">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAdd();
            }
          }}
          placeholder={`عنوان فصل ${nextOrder}...`}
          className={`${inputClass} flex-1`}
        />
        <button
          type="button"
          onClick={handleAdd}
          disabled={!title.trim()}
          className={`to-primary-600 inline-flex items-center justify-center gap-8 rounded-xl bg-gradient-to-br from-[#1E4D9C] px-20 py-10 text-[11px] font-black whitespace-nowrap text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 hover:brightness-110 ${
            !title.trim() ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-16 w-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          افزودن فصل
        </button>
      </div>
      <p className="mt-8 text-[10px] text-[#8A96B0]">
        ترتیب فصل به‌صورت خودکار تعیین می‌شود (فصل {nextOrder})
      </p>
    </motion.div>
  );
}
