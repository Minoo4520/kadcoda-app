export default function BackgroundDecor() {
  return (
    <>
      <div className="grid-bg pointer-events-none absolute top-0 right-0 left-0 -z-10 h-[600px] opacity-70" />
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-[#4F46E5]/5 blur-[120px]" />
    </>
  );
}
