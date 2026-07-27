function OurValuesBox({ icon, title, caption }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-20 shadow-[0_10px_35px_rgba(0,0,0,.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,.12)]">
      <svg
        className="text-primary/60 absolute top-5 left-5 h-56 w-56"
        viewBox="0 0 70 70"
        fill="currentColor"
      >
        <circle cx="8" cy="8" r="2.2" />
        <circle cx="26" cy="8" r="2.2" />
        <circle cx="44" cy="8" r="2.2" />

        <circle cx="17" cy="26" r="2.2" />
        <circle cx="35" cy="26" r="2.2" />
        <circle cx="53" cy="26" r="2.2" />

        <circle cx="8" cy="44" r="2.2" />
        <circle cx="26" cy="44" r="2.2" />
        <circle cx="44" cy="44" r="2.2" />
      </svg>

      <div className="relative z-10 flex items-center gap-12">
        <div className="bg-primary/10 text-primary flex h-34 w-34 items-center justify-center rounded-2xl">
          {icon}
        </div>

        <h3 className="text-primary-900 text-lg font-bold">{title}</h3>
      </div>

      <p className="text-md relative z-10 mt-5 leading-25 text-gray-500">
        {caption}
      </p>
    </div>
  );
}

export default OurValuesBox;
