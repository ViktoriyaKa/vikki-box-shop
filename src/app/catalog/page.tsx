import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Боксы",
};

export default function CatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <p className="text-[11px] tracking-[0.28em] uppercase text-blush">
          каталог
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Пять настроений в коробке</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
          Настроение выбираете вы, размер — мини или стандарт. Мини — 1 500 ₽,
          стандарт — 2 000 ₽. Доставка по России оплачивается отдельно,
          сборка — до 5 дней.
        </p>
      </Reveal>

      {products.length === 0 ? (
        <p className="mt-12 text-ink-soft">Полки пока пустые. Загляните чуть позже.</p>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
