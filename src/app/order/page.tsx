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
          форма
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Для быстрого заказа</h1>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-ink-soft">
          <li>мини — 1 500 ₽, стандарт — 2 000 ₽</li>
          <li>нужны адрес ПВЗ Ozon и телефон из приложения</li>
          <li>заказ принят после оплаты бокса и доставки</li>
          <li>доставка только по России, оплачивается отдельно</li>
          <li>сборка и отправка — до 5 дней, кроме субботы и воскресенья</li>
          <li>смотрите актуальный состав, а не старые видео в профиле</li>
        </ul>
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
