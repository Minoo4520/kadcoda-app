import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
        <div className="relative z-10 flex max-w-xl flex-col items-center gap-10 text-center">
          <img
            src="/images/not-found.svg"
            alt="not found"
            className="max-w-240 sm:max-w-400"
          />

          <p className="mt-10 mb-5 text-sm tracking-[0.35em] text-gray-700 uppercase">
            Error 404
          </p>

          <h1 className="text-primary-700 text-3xl">صفحه پیدا نشد</h1>

          <p className="mt-6 text-lg leading-24 text-gray-400">
            به نظر می‌رسد صفحه‌ای که دنبال آن هستید وجود ندارد یا به آدرس دیگری
            منتقل شده است.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
            <a
              href="/"
              className="text-primary border-primary hover:bg-primary cursor-pointer rounded-xl border bg-transparent px-14 py-10 font-medium transition hover:text-white"
            >
              صفحه اصلی
            </a>

            <button
              onClick={() => history.back()}
              className="bg-secondary-500 cursor-pointer rounded-xl px-14 py-10 font-medium text-white backdrop-blur transition"
            >
              بازگشت
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
