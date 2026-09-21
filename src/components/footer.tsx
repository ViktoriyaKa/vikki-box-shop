import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-blush/20 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm tracking-[0.22em] uppercase text-ink-soft">
            Vikki Box Shop
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-ink-soft">
            Маленькие радости для твоего дня. Боксы собираем вручную, без склада
            в облаке — всё рядом, на своей полке.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          <Link href="/catalog" className="hover:text-ink">
            Каталог
          </Link>
          <Link href="/about" className="hover:text-ink">
            О бренде
          </Link>
          <Link href="/order" className="hover:text-ink">
            Заказать
          </Link>
        </div>
      </div>
    </footer>
  );
}
