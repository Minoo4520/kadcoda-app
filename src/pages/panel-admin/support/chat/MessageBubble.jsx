import { motion } from 'framer-motion';

export default function MessageBubble({ message, index }) {
  const isStudent = message.sender === 'student';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
      className={`flex gap-12 ${isStudent ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div
        className={`flex h-40 w-40 shrink-0 items-center justify-center rounded-xl text-xs font-black text-white shadow-[3px_3px_8px_0px_#193B734D] ${
          isStudent
            ? 'to-primary-600 bg-gradient-to-br from-[#1E4D9C]'
            : 'bg-gradient-to-br from-[#B07D00] to-[#F7B928]'
        }`}
      >
        {message.avatar}
      </div>

      <div
        className={`flex max-w-[85%] flex-col gap-4 sm:max-w-[70%] ${isStudent ? 'items-start' : 'items-end'}`}
      >
        <div className="flex items-center gap-8">
          <span className="text-[10px] font-bold text-[#1C2B4A]">
            {message.name}
          </span>
          <span className="text-[9px] text-[#8A96B0]">{message.time}</span>
        </div>

        <div
          className={`rounded-2xl px-16 py-12 text-[11px] leading-relaxed shadow-[inset_-2px_-2px_4px_0px_#FFFFFFCC,_inset_2px_2px_5px_0px_#A3B1C666] ${
            isStudent
              ? 'text-primary-600 bg-[#DCE5F4]'
              : 'bg-[#E4E9F2] text-[#1C2B4A]'
          }`}
        >
          {message.text}

          {message.attachments.length > 0 && (
            <div className="mt-10 flex flex-col gap-8">
              {message.attachments.map((file) => (
                <a
                  key={file.id}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center gap-10 rounded-lg bg-[#EDF1F8] px-12 py-8 shadow-[-2px_-2px_6px_0px_#FFFFFFE5,_3px_3px_8px_0px_#A3B1C673] transition hover:brightness-[1.02]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="text-primary-600 h-16 w-16 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <span className="text-[10px] font-bold text-[#1C2B4A]">
                    {file.name}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
