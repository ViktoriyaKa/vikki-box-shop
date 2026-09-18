import Image from "next/image";

const downloads = [
  {
    href: "/brand/vikki-box-shop-logo.png",
    title: "Квадратный логотип",
    note: "PNG · 1024×1024 · для аватара и поста",
  },
  {
    href: "/brand/vikki-box-shop-logo-horizontal.png",
    title: "Горизонтальный",
    note: "PNG · 1920×1080 · для шапки сайта",
  },
  {
    href: "/brand/vikki-box-shop-logo-wordmark.png",
    title: "Только надпись",
    note: "PNG · компактный вариант без лишних полей",
  },
  {
    href: "/brand/vikki-box-shop-logo-transparent.png",
    title: "На прозрачном фоне",
    note: "PNG · удобно накладывать на фото",
  },
];

const boxes = [
  {
    title: "Для неё",
    text: "Свеча, открытка и что-то сладкое — когда хочется сказать «ты важна» без большого повода.",
  },
  {
    title: "Для него",
    text: "Собранный с теплом набор: маленький ритуал, который сделает обычный вечер чуть добрее.",
  },
  {
    title: "Просто так",
    text: "Бокс себе. Потому что маленькая радость не обязана ждать праздника в календаре.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="flex items-center justify-between px-5 py-5 sm:px-8">
        <p className="text-[11px] tracking-[0.28em] uppercase text-ink-soft">
          Vikki Box Shop
        </p>
        <a
          href="#download"
          className="rounded-full border border-blush/50 bg-card px-4 py-2 text-sm text-ink transition hover:border-blush hover:bg-cream-deep"
        >
          Скачать логотип
        </a>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="flex flex-col items-center px-4 pb-8 pt-4 text-center sm:px-8 sm:pt-8">
          <div className="w-full max-w-3xl rounded-[2rem] bg-card px-4 py-10 shadow-[0_20px_60px_rgba(78,52,40,0.06)] sm:px-10 sm:py-14">
            <Image
              src="/brand/vikki-box-shop-logo.png"
              alt="Логотип Vikki Box Shop — маленькие радости для твоего дня"
              width={1024}
              height={1024}
              priority
              className="mx-auto h-auto w-full max-w-xl"
            />
          </div>
          <p className="mt-8 max-w-xl text-base leading-7 text-ink-soft sm:text-lg">
            Боксы с теплом внутри. Собираем подарки, которые радуют в обычный
            день — нежно, просто и по-настоящему.
          </p>
        </section>

        <section className="mx-auto grid w-full max-w-5xl gap-4 px-4 py-10 sm:grid-cols-3 sm:px-8">
          {boxes.map((box) => (
            <article
              key={box.title}
              className="rounded-3xl bg-card px-6 py-7 text-left shadow-[0_10px_30px_rgba(78,52,40,0.04)]"
            >
              <h2 className="text-lg font-semibold tracking-wide">{box.title}</h2>
              <p className="mt-3 text-sm leading-6 text-ink-soft">{box.text}</p>
            </article>
          ))}
        </section>

        <section
          id="download"
          className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-8"
        >
          <div className="rounded-[2rem] bg-cream-deep/70 px-6 py-10 sm:px-10">
            <h2 className="text-2xl font-semibold tracking-wide">Файлы логотипа</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
              Готовый знак в нескольких форматах. Кремовый фон совпадает с
              сайтом, есть и прозрачная версия — для сторис, карточек товара и
              шапки.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {downloads.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    download
                    className="flex min-h-20 flex-col justify-center rounded-2xl bg-card px-5 py-4 transition hover:bg-white"
                  >
                    <span className="font-medium">{item.title}</span>
                    <span className="mt-1 text-xs text-ink-soft">{item.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="px-5 py-8 text-center text-xs tracking-wide text-ink-soft sm:px-8">
        Vikki Box Shop · маленькие радости для твоего дня
      </footer>
    </div>
  );
}
