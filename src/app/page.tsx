import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { products } from "@/data/products";

const steps = [
  {
    title: "Вы выбираете настроение",
    text: "Кошачий, канцелярский, для неё или сюрприз — можно просто написать, какой человек получит бокс.",
  },
  {
    title: "Мы собираем руками",
    text: "Тишью, открытка, наклейка «сделано с любовью» и несколько предметов с полки. Без случайного склада.",
  },
  {
    title: "Бокс уезжает радовать",
    text: "Красиво упакованный, с маленькой запиской. Остаётся только открыть и улыбнуться.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-8 top-10 text-blush pulse-heart text-2xl">
          ♡
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <Reveal>
            <p className="text-[11px] tracking-[0.32em] uppercase text-ink-soft">
              боксы ручной сборки
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Маленькие радости
              <span className="block text-ink-soft">для твоего дня</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-ink-soft">
              Vikki Box Shop собирает коробки, в которых живут канцелярия,
              котики и тихие подарки «просто так». Нежно, в нюдовых тонах и без
              повода в календаре.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/catalog"
                className="rounded-full bg-ink px-6 py-3 text-sm text-cream transition hover:bg-ink-soft"
              >
                Смотреть боксы
              </Link>
              <Link
                href="/order"
                className="rounded-full border border-blush/50 bg-card px-6 py-3 text-sm transition hover:bg-cream-deep"
              >
                Собрать под заказ
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="float-soft">
            <div className="overflow-hidden rounded-[2rem] bg-card shadow-[0_24px_60px_rgba(78,52,40,0.08)]">
              <Image
                src="/hero/cover.png"
                alt="Открытый бокс, свеча и котёнок"
                width={1280}
                height={720}
                priority
                unoptimized
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem]">
            <Image
              src="/hero/banner.png"
              alt="Vikki Box Shop"
              width={1280}
              height={720}
              unoptimized
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-blush">
            витрина
          </p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold">Боксы, которые уже собираем</h2>
            <Link href="/catalog" className="text-sm text-ink-soft hover:text-ink">
              Весь каталог →
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-cream-deep/50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-blush">
              как это устроено
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Три тихих шага</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="h-full rounded-[1.6rem] bg-card px-6 py-7">
                  <span className="text-sm text-blush">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <p className="text-[11px] tracking-[0.28em] uppercase text-blush">
            для кого
          </p>
          <h2 className="mt-3 text-3xl font-semibold">Себе, подруге, человеку напротив</h2>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            Боксы рождаются из простой мысли: иногда достаточно маленькой
            коробки, чтобы день стал теплее. Пишите — подберём наполнение под
            человека, а не «средний подарок из ленты».
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex rounded-full border border-blush/40 px-6 py-3 text-sm hover:bg-card"
          >
            Узнать о бренде
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
