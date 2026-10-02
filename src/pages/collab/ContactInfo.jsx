export default function ContactInfo({ contact }) {
  return (
    <div className="flex flex-col gap-16 text-sm">
      <div className="mt-50 flex items-center gap-12">
        <span className="text-bold bg-primary-50 text-primary-700 flex h-36 w-36 items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-16 w-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 10.5-7.5 10.5S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </span>

        <span className="text-primary-700 text-xs sm:text-sm">
          {contact.address}
        </span>
      </div>

      <div className="flex items-center gap-12">
        <span className="bg-primary-50 text-primary-700 flex h-36 w-36 items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-16 w-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.33-7.33 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.272.53-.74.417-1.173L6.826 3.915A1.125 1.125 0 0 0 5.735 3.063H4.5A2.25 2.25 0 0 0 2.25 5.313v1.437Z"
            />
          </svg>
        </span>

        <span className="text-primary-700 text-xs sm:text-sm" dir="ltr">
          {contact.phone}
        </span>
      </div>

      <div className="flex items-center gap-12">
        <span className="bg-primary-50 text-primary-700 flex h-36 w-36 items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-16 w-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.69 5.793a1.875 1.875 0 0 1-2.12 0L2.25 6.75"
            />
          </svg>
        </span>

        <span className="text-primary-700 text-xs sm:text-sm">
          {contact.email}
        </span>
      </div>
    </div>
  );
}
