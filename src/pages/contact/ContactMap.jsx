const Icons = {
  MapPin: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  ),

  Phone: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  ),

  Mail: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  ),

  Sparkles: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-14"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  ),
};

const contactItems = [
  {
    key: 'address',
    Icon: Icons.MapPin,
    label: 'نشانی مرکز',
    value: 'قزوین، پارک علم و فناوری، مرکز نوآوری کدکدا',
  },
  {
    key: 'phone',
    Icon: Icons.Phone,
    label: 'شماره پشتیبانی',
    value: '+98 21 8899 0011',
    ltr: true,
  },
  {
    key: 'email',
    Icon: Icons.Mail,
    label: 'پست الکترونیک',
    value: 'info@kadcoda.com',
  },
];

function ContactMap() {
  return (
    <div className="mt-40 grid w-full min-w-0 grid-cols-12 gap-16 overflow-hidden rounded-3xl border border-gray-100 bg-gray-50/50 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-12">
      <div className="relative col-span-12 flex min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-gray-100/80 bg-white p-12 shadow-sm sm:p-24 md:p-32 lg:col-span-5">
        <div className="bg-primary-500/10 pointer-events-none absolute -top-48 -right-48 h-128 w-128 rounded-full blur-2xl" />

        <div className="bg-primary-400/10 pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full blur-2xl" />

        <div>
          <div className="border-primary-100 bg-primary-50 text-primary-600 mb-16 inline-flex items-center gap-6 rounded-full border px-12 py-4 text-xs font-semibold">
            <Icons.Sparkles />
            <span>راه‌های ارتباطی</span>
          </div>

          <h3 className="text-primary-700 mt-16 mb-16 text-2xl font-black tracking-tight sm:mt-44 sm:mb-20 md:mt-56 md:mb-24">
            اطلاعات تماس
          </h3>

          <div className="space-y-16">
            {contactItems.map(({ key, Icon, label, value, ltr }) => (
              <div
                key={key}
                className="group bg-primary-50/50 hover:border-primary-100 hover:bg-primary-50/80 flex items-center gap-8 space-x-0 space-x-reverse rounded-xl border border-transparent p-8 transition-all duration-300 hover:shadow-sm sm:gap-12 sm:space-x-4 sm:p-14 md:space-x-8"
              >
                <div className="border-primary-100 text-primary-600 group-hover:bg-primary-600 flex h-44 w-44 shrink-0 items-center justify-center rounded-xl border bg-white shadow-sm transition-colors group-hover:text-white">
                  <Icon />
                </div>

                <div className="flex flex-col gap-2 sm:gap-0">
                  <span className="text-primary-500/80 mb-2 text-[10px] font-semibold sm:text-xs">
                    {label}
                  </span>

                  <span
                    className="text-primary-900 text-xs leading-snug font-bold sm:text-sm md:text-base"
                    dir={ltr ? 'ltr' : undefined}
                  >
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-primary-100/60 text-primary-500/80 mt-24 border-t pt-16 text-center text-xs font-medium">
          پاسخگویی شنبه تا چهارشنبه از ساعت ۹ الی ۱۷
        </div>
      </div>

      <div className="relative col-span-12 min-h-300 w-full min-w-0 overflow-hidden rounded-2xl sm:min-h-380 lg:col-span-7 lg:min-h-460">
        <div className="bg-primary-900/90 pointer-events-none absolute right-16 bottom-32 z-10 rounded-xl border border-white/10 px-14 py-8 text-[10px] font-bold tracking-wide text-white shadow-lg backdrop-blur-md sm:bottom-16 sm:text-[11px]">
          📍 قزوین - منطقه باراجین
        </div>

        <iframe
          title="map-iframe"
          src="https://neshan.org/maps/iframe/places/66498425db97389e722f7be4ef6a2ad1#c36.326-50.042-19z-0p/36.326332699999995/50.0419905"
          className="h-full min-h-300 w-full border-0 sm:min-h-380 lg:min-h-460"
          allowFullScreen=""
        />
      </div>
    </div>
  );
}

export default ContactMap;
