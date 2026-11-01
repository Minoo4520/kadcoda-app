import { motion } from 'framer-motion';

export default function ToggleSwitch({
  checked,
  onChange,
  label,
  description,
}) {
  return (
    <div className="flex items-center justify-between gap-12 rounded-xl bg-[#E4E9F2] px-14 py-10 shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666]">
      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-bold text-[#1C2B4A]">{label}</span>
        {description && (
          <span className="text-[10px] text-[#8A96B0]">{description}</span>
        )}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={[
          'relative inline-flex h-24 w-42 cursor-pointer items-center rounded-full transition-colors duration-300',
          checked
            ? 'bg-primary-600 shadow-[0px_2px_8px_0px_#193B7359]'
            : 'bg-[#DCE5F0] shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C680]',
        ].join(' ')}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="absolute h-16 w-16 rounded-full bg-white shadow-[0px_1px_3px_0px_#00000033]"
          style={{ left: checked ? 22 : 4, top: 4 }}
        />
      </button>
    </div>
  );
}
