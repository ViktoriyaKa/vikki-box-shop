import type { Metadata } from "next";
import { Suspense } from "react";
import { OrderForm } from "@/components/order-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Заказать",
};

export default function OrderPage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_1fr] lg:py-16">
      <Reveal>
        <p className="text-[11px] tracking-[0.28em] uppercase text-blush">
          заказ
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Соберём бокс под человека</h1>
        <p className="mt-4 text-base leading-7 text-ink-soft">
          Напишите, кому дарите и какое настроение нужно. Заявка остаётся здесь,
          на компьютере — без облачных таблиц. Я увижу её, когда открою сайт на
          этой же машине, или вы продублируете сообщение в мессенджер.
        </p>
        <p className="mt-4 text-sm leading-6 text-ink-soft">
          Обычно внутри: тишью, открытка и 4–6 маленьких вещей с полки.
          Сроки сборки — несколько дней.
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <Suspense
          fallback={
            <div className="rounded-[1.8rem] bg-card px-6 py-10 text-sm text-ink-soft">
              Открываем форму…
            </div>
          }
        >
          <OrderForm />
        </Suspense>
      </Reveal>
    </div>
  );
}
