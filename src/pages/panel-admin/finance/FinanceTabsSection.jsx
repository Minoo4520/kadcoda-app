import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router';

import DiscountsGrid from './DiscountsGrid';
import TransactionsTable from './TransactionsTable';

function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-lg px-16 py-8 text-[11px] font-bold whitespace-nowrap transition duration-200 ${
        active
          ? 'text-primary-600 bg-[#DCE5F4] shadow-[inset_-2px_-2px_3px_0px_#FFFFFFCC,_inset_2px_2px_4px_0px_#A3B1C666]'
          : 'text-[#8A96B0] hover:text-[#1C2B4A]'
      }`}
    >
      {children}
    </button>
  );
}

export default function FinanceTabsSection({
  activeTab,
  onTabChange,
  transactions,
  discounts,
  copiedCode,
  onCopy,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
      className="mt-25 rounded-2xl bg-[#EDF1F8] p-20 shadow-[-4px_-4px_12px_0px_#FFFFFFE5,_6px_6px_16px_0px_#A3B1C680]"
    >
      <div className="flex flex-col gap-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-10 rounded-xl bg-[#E4E9F2] p-6 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
          <TabButton
            active={activeTab === 'transactions'}
            onClick={() => onTabChange('transactions')}
          >
            تراکنش‌های مالی
          </TabButton>
          <TabButton
            active={activeTab === 'discounts'}
            onClick={() => onTabChange('discounts')}
          >
            مدیریت کدهای تخفیف
          </TabButton>
        </div>

        {activeTab === 'discounts' && (
          <Link
            to="/panel-admin/newDiscount"
            type="button"
            className="to-primary-600 inline-flex cursor-pointer items-center gap-8 rounded-xl bg-gradient-to-br from-[#1E4D9C] px-16 py-10 text-[11px] font-black whitespace-nowrap text-white shadow-[3px_3px_8px_0px_#193B734D] transition duration-200 hover:brightness-110"
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
            افزودن کد تخفیف
          </Link>
        )}
      </div>

      <div className="mt-20">
        <AnimatePresence mode="wait">
          {activeTab === 'transactions' && (
            <motion.div
              key="transactions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <TransactionsTable transactions={transactions} />
            </motion.div>
          )}

          {activeTab === 'discounts' && (
            <motion.div
              key="discounts"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <DiscountsGrid
                discounts={discounts}
                copiedCode={copiedCode}
                onCopy={onCopy}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
