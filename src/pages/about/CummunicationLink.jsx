function CommunicationLink({ link, icon, title, subTitle, content }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-44 w-44 items-center justify-center rounded-xl bg-blue-50 text-3xl text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-primary-800 text-lg font-bold transition-colors group-hover:text-blue-600">
            {title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">{subTitle}</p>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <span className="group-hover:text-primary rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 group-hover:bg-blue-600">
          {content}
        </span>
      </div>
    </a>
  );
}

export default CommunicationLink;
