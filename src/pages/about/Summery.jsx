function ListItem({ children, color }) {
  return (
    <li className="flex items-center gap-9">
      <div className="bg-primary-100 text-primary-600 mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
        <svg className="h-14 w-14" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12L10 17L19 8"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <span className={`leading-25 ${color}`}>{children}</span>
    </li>
  );
}

export default function AboutContent() {
  return (
    <section className="py-24">
      <div className="container-layout">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-primary text-lg font-bold">درباره کدکدا</span>

          <h2 className="my-8 text-4xl font-black">
            اولین قدم برای تبدیل شدن به یک برنامه‌نویس حرفه‌ای
          </h2>

          <p className="mt-8 leading-25 text-gray-600">
            کدکدا یک پلتفرم آموزشی تخصصی در حوزه برنامه‌نویسی است که با تمرکز بر
            آموزش‌های پروژه‌محور، محتوای به‌روز و پشتیبانی حرفه‌ای، مسیر یادگیری
            را برای همه ساده‌تر کرده است. هدف ما تنها آموزش نیست؛ بلکه
            آماده‌سازی شما برای ورود به بازار کار و ساختن آینده‌ای حرفه‌ای است.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-20 shadow-lg">
            <h3 className="text-2xl font-extrabold">مأموریت ما</h3>

            <ul className="mt-8 space-y-9">
              <ListItem color="text-primary-900">
                آموزش پروژه‌محور و کاربردی
              </ListItem>
              <ListItem color="text-primary-900">
                بروزرسانی مداوم دوره‌ها
              </ListItem>
              <ListItem color="text-primary-900">
                پشتیبانی و منتورینگ تخصصی
              </ListItem>
              <ListItem color="text-primary-900">
                مسیر یادگیری هدفمند برای هر تکنولوژی
              </ListItem>
            </ul>
          </div>

          <div className="bg-primary shadow-primary-600/40 rounded-3xl p-20 text-white shadow-lg shadow-xl">
            <h3 className="text-2xl font-extrabold">چرا کدکدا؟</h3>

            <ul className="mt-8 space-y-9">
              <ListItem color="text-white">دوره‌های جامع و به‌روز</ListItem>
              <ListItem color="text-white">
                اساتید باتجربه و فعال در صنعت
              </ListItem>
              <ListItem color="text-white">جامعه آموزشی پویا</ListItem>
              <ListItem color="text-white">
                دسترسی دائمی به دوره‌ها و آپدیت‌ها
              </ListItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
