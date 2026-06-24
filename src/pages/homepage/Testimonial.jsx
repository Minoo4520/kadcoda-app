function Testimonial() {
  return (
    <section className="bg-primary-500 -rotate-1 overflow-hidden py-20 transition-transform duration-500 hover:rotate-0 md:py-28">
      <div className="container">
        <div className="relative">
          <div className="mx-auto">
            <blockquote className="relative">
              <div className="mb-6 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary-700"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>

              <p className="text-2xl font-bold text-gray-800 md:text-3xl">
                همه می‌خواهند برنامه‌نویس شوند، اما فقط کسانی موفق می‌شوند که از
                اشتباه کردن نمی‌ترسند!
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
