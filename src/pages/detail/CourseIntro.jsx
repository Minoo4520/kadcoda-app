import { courseStats } from '../data/courseData';
import StatCard from './StatCard';

export default function CourseIntro() {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 rounded-xl border border-[#FEC94D]/30 bg-[#FEC94D]/10 px-3 py-1.5 text-xs font-bold text-[#1E1B4B]">
        <span className="h-2 w-2 animate-ping rounded-full bg-[#FEC94D]" />
        بروزرسانی شده در تابستان ۱۴۰۵ [دوره جدید]
      </div>

      <h2 className="text-[35px] leading-tight font-black text-[#1E1B4B] md:text-5xl">
        آموزش جامع و پروژه محور <br />
        <span className="relative mt-2 inline-block text-[#4F46E5]">
          برنامه‌نویسی پایتون (Python)
          <span className="absolute right-0 bottom-2 -z-10 h-3 w-full rounded-lg bg-[#4F46E5]/10" />
        </span>
      </h2>

      <p className="max-w-2xl text-justify text-base leading-relaxed text-[#64748B] md:text-lg">
        دوره آموزش پایتون کد کدا یک دوره کاملاً جامع و عمیق، از صفر مطلق تا سطح
        پیشرفته است. این دوره برای کسانی طراحی شده که می‌خواهند درک عمیقی از
        معماری نرم‌افزار، حل مسئله و مفاهیم هوش مصنوعی پیدا کنند و توانایی توسعه
        اسکریپت‌های بهینه و سیستم‌های پیچیده را به دست آورند.
      </p>

      <div className="grid grid-cols-2 gap-4 pt-4 md:grid-cols-3">
        {courseStats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
    </div>
  );
}
