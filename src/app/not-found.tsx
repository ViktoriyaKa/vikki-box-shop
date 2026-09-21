import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-blush">♡</p>
      <h1 className="mt-4 text-3xl font-semibold">Такой коробки здесь нет</h1>
      <p className="mt-3 text-ink-soft">
        Похоже, страница потерялась между тишью. Вернитесь в каталог — там всё
        на месте.
      </p>
      <Link
        href="/catalog"
        className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm text-cream"
      >
        К боксам
      </Link>
    </div>
  );
}
