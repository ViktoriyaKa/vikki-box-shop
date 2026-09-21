import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "О бренде",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Image
            src="/brand/vikki-box-shop-logo.png"
            alt="Логотип Vikki Box Shop"
            width={640}
            height={640}
            unoptimized
            className="mx-auto w-full max-w-md"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[11px] tracking-[0.28em] uppercase text-blush">
            о бренде
          </p>
          <h1 className="mt-3 text-4xl font-semibold">Я собираю коробки, которые умеют обнимать</h1>
          <p className="mt-5 text-base leading-7 text-ink-soft">
            Меня зовут Виктория. Vikki Box Shop — маленький проект про подарки
            без пафоса: бокс с канцелярией к сессии, котиками «просто так» или
            сюрпризом, который не хочется разгадывать заранее.
          </p>
          <p className="mt-4 text-base leading-7 text-ink-soft">
            Все вещи лежат рядом, в своей папке и на своей полке. Без облачных
            витрин и случайных складов: вы видите то, что реально можно собрать
            сегодня.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Руками",
            text: "Каждый бокс складываю сама: тишью, открытка, наклейка, главный предмет.",
          },
          {
            title: "В нюдовых тонах",
            text: "Кремовый, пыльная роза, крафт. Чтобы коробка выглядела тихо и дорого без крика.",
          },
          {
            title: "Под человека",
            text: "Можно написать характер получателя — подберём наполнение не из «среднего набора».",
          },
        ].map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="h-full rounded-[1.6rem] bg-card px-6 py-7">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center">
        <Link
          href="/order"
          className="inline-flex rounded-full bg-ink px-6 py-3 text-sm text-cream hover:bg-ink-soft"
        >
          Написать про заказ
        </Link>
      </Reveal>
    </div>
  );
}
