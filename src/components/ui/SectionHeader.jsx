export default function SectionHeader({ title }) {
  return (
    <h2 className="relative mb-20 w-fit text-sm font-black text-[#1C2B4A]">
      {title}
      <span className="bg-secondary-300 absolute top-2 -left-10 h-16 w-4 rounded-full shadow-[0px_0px_6px_0px_#F7B928AA]"></span>
    </h2>
  );
}
