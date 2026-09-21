import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { getProduct, products } from "@/data/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Бокс" };
  return { title: product.title, description: product.summary };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] bg-card shadow-[0_18px_50px_rgba(78,52,40,0.06)]">
          <Image
            src={product.image}
            alt={product.title}
            width={1200}
            height={900}
            unoptimized
            className="h-auto w-full"
            priority
          />
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="text-[11px] tracking-[0.28em] uppercase text-blush">
          {product.tag}
        </p>
        <h1 className="mt-3 text-4xl font-semibold">{product.title}</h1>
        <p className="mt-2 text-lg text-ink-soft">{product.price}</p>
        <p className="mt-5 text-base leading-7 text-ink-soft">{product.story}</p>

        <h2 className="mt-8 text-sm tracking-[0.18em] uppercase text-ink">
          Обычно внутри
        </h2>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-ink-soft">
          {product.contents.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-blush">♡</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/order?box=${product.slug}`}
            className="rounded-full bg-ink px-6 py-3 text-sm text-cream hover:bg-ink-soft"
          >
            Заказать этот бокс
          </Link>
          <Link
            href="/catalog"
            className="rounded-full border border-blush/40 px-6 py-3 text-sm hover:bg-card"
          >
            К другим боксам
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
