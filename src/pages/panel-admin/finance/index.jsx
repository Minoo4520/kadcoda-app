import { useState } from 'react';

import FinanceStats from './FinanceStats';
import FinanceTabsSection from './FinanceTabsSection';

const transactions = [
  {
    id: 'TRX-2042',
    student: 'رضا کریمی',
    course: 'دوره React پیشرفته',
    amount: '۱,۲۰۰,۰۰۰',
    status: 'موفق',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    date: '۱۴۰۳/۰۵/۱۲',
  },
  {
    id: 'TRX-2041',
    student: 'سارا محمدی',
    course: 'دوره Figma مقدماتی',
    amount: '۸۵۰,۰۰۰',
    status: 'موفق',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    date: '۱۴۰۳/۰۵/۱۰',
  },
  {
    id: 'TRX-2040',
    student: 'مریم احمدی',
    course: 'دوره تحلیل داده',
    amount: '۱,۵۰۰,۰۰۰',
    method: 'کارت به کارت',
    status: 'در انتظار',
    statusClass: 'bg-[#FFF3DC] text-[#B07D00]',
    date: '۱۴۰۳/۰۵/۰۹',
  },
  {
    id: 'TRX-2039',
    student: 'زهرا نوری',
    course: 'دوره JavaScript',
    amount: '۹۵۰,۰۰۰',
    status: 'ناموفق',
    statusClass: 'bg-[#FEE2E2] text-[#B91C1C]',
    date: '۱۴۰۳/۰۵/۰۸',
  },
  {
    id: 'TRX-2038',
    student: 'علی رضایی',
    course: 'دوره مدیریت محصول',
    amount: '۱,۳۰۰,۰۰۰',
    status: 'موفق',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    date: '۱۴۰۳/۰۵/۰۷',
  },
  {
    id: 'TRX-2037',
    student: 'داود بهمنی',
    course: 'دوره UI/UX',
    amount: '۱,۱۰۰,۰۰۰',
    status: 'موفق',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    date: '۱۴۰۳/۰۵/۰۵',
  },
];

const discounts = [
  {
    id: 1,
    code: 'KODKDA20',
    percent: 20,
    used: 34,
    total: 100,
    active: true,
    startDate: '۱۴۰۳/۰۴/۰۱',
    endDate: '۱۴۰۳/۰۶/۳۰',
  },
  {
    id: 2,
    code: 'WELCOME50',
    percent: 50,
    used: 78,
    total: 80,
    active: true,
    startDate: '۱۴۰۳/۰۳/۱۵',
    endDate: '۱۴۰۳/۰۵/۱۵',
  },
  {
    id: 3,
    code: 'SUMMER30',
    percent: 30,
    used: 12,
    total: 200,
    active: true,
    startDate: '۱۴۰۳/۰۴/۱۰',
    endDate: '۱۴۰۳/۰۷/۱۰',
  },
  {
    id: 4,
    code: 'BLACKFRIDAY',
    percent: 60,
    used: 150,
    total: 150,
    active: false,
    startDate: '۱۴۰۲/۰۹/۲۵',
    endDate: '۱۴۰۲/۱۰/۰۵',
  },
];

export default function PanelAdminFinance() {
  const [activeTab, setActiveTab] = useState('transactions');
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 1500);
  };

  return (
    <>
      <FinanceStats
        transactionsCount={transactions.length}
        discountsCount={discounts.length}
      />

      <FinanceTabsSection
        activeTab={activeTab}
        onTabChange={setActiveTab}
        transactions={transactions}
        discounts={discounts}
        copiedCode={copiedCode}
        onCopy={handleCopy}
      />
    </>
  );
}
