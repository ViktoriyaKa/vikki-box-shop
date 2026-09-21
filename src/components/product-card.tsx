"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/catalog/${product.slug}`}
        className="group block overflow-hidden rounded-[1.7rem] bg-card shadow-[0_12px_40px_rgba(78,52,40,0.05)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-cream-deep">
          <Image
            src={product.image}
            alt={product.title}
            fill
            unoptimized
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="px-5 py-5">
          <p className="text-[11px] tracking-[0.22em] uppercase text-blush">
            {product.tag}
          </p>
          <div className="mt-2 flex items-baseline justify-between gap-3">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <span className="text-sm text-ink-soft">{product.price}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-ink-soft">{product.summary}</p>
        </div>
      </Link>
    </motion.article>
  );
}
