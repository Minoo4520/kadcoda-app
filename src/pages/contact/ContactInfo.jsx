const Icons = {
  Facebook: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  ),
  Telegram: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-16 w-16"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  ),
};

const socials = [
  { key: 'facebook', label: 'فیسبوک', Icon: Icons.Facebook, href: '#' },
  { key: 'telegram', label: 'تلگرام', Icon: Icons.Telegram, href: '#' },
  { key: 'linkedin', label: 'لینکدین', Icon: Icons.LinkedIn, href: '#' },
];

export default function ContactInfo() {
  return (
    <div className="relative flex w-full flex-col justify-between rounded-b-3xl p-16 pt-0 sm:p-28 md:w-1/2 md:rounded-l-3xl md:rounded-b-none">
      <div className="relative mt-70 flex items-center justify-center md:h-240">
        <div className="absolute h-180 w-180 rounded-full opacity-70 blur-[20px]"></div>
        <img src="/images/contact.png" alt="تماس با ما" />
      </div>

      <div className="mt-24 space-y-18"></div>

      <div className="mt-48 flex justify-center gap-12 sm:mt-24 sm:flex-col">
        {socials.map(({ key, label, Icon, href }) => (
          <a
            key={key}
            href={href}
            className="group bg-primary hover:bg-primary-800 hover:text-secondary-300 flex h-36 w-36 items-center overflow-hidden rounded-full text-white transition-all duration-300 ease-out hover:w-140"
          >
            <span className="flex h-36 w-36 shrink-0 items-center justify-center">
              <Icon />
            </span>
            <span className="shrink-0 pr-16 text-sm font-medium whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
