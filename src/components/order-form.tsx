"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

const STORAGE_KEY = "vikki-box-orders";

export function OrderForm() {
  const searchParams = useSearchParams();
  const preset = searchParams.get("box") ?? "";
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [box, setBox] = useState(preset);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const selectedTitle = useMemo(
    () => products.find((item) => item.slug === box)?.title ?? "на ваше усмотрение",
    [box],
  );

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !contact.trim()) {
      setError("Напишите, как к вам обращаться и куда ответить.");
      return;
    }

    const order = {
      name: name.trim(),
      contact: contact.trim(),
      box: box || "any",
      note: note.trim(),
      createdAt: new Date().toISOString(),
    };

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const list = raw ? (JSON.parse(raw) as unknown[]) : [];
      list.push(order);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      setSent(true);
    } catch {
      setError("Не получилось сохранить заявку на этом компьютере. Напишите, пожалуйста, ещё раз.");
    }
  }

  if (sent) {
    return (
      <div className="rounded-[1.8rem] bg-card px-6 py-10 text-center">
        <p className="text-blush">♡</p>
        <h2 className="mt-3 text-2xl font-semibold">Заявка рядом, на этом компьютере</h2>
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          «{selectedTitle}» для {name}. Ответ придёт туда, куда вы оставили контакт.
          Облако не используем — заявка сохранилась локально в браузере.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-[1.8rem] bg-card px-5 py-7 sm:px-7">
      <label className="block text-sm">
        <span className="text-ink-soft">Как к вам обращаться</span>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1 w-full rounded-2xl border border-blush/30 bg-cream px-4 py-3 outline-none transition focus:border-blush"
          placeholder="Вика"
        />
      </label>
      <label className="block text-sm">
        <span className="text-ink-soft">Телеграм, телефон или почта</span>
        <input
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          className="mt-1 w-full rounded-2xl border border-blush/30 bg-cream px-4 py-3 outline-none transition focus:border-blush"
          placeholder="@username"
        />
      </label>
      <label className="block text-sm">
        <span className="text-ink-soft">Какой бокс</span>
        <select
          value={box}
          onChange={(event) => setBox(event.target.value)}
          className="mt-1 w-full rounded-2xl border border-blush/30 bg-cream px-4 py-3 outline-none transition focus:border-blush"
        >
          <option value="">Помогите выбрать</option>
          {products.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.title}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        <span className="text-ink-soft">Для кого и какое настроение</span>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={4}
          className="mt-1 w-full resize-none rounded-2xl border border-blush/30 bg-cream px-4 py-3 outline-none transition focus:border-blush"
          placeholder="Подруге, любит котиков и спокойные цвета"
        />
      </label>

      {error ? <p className="text-sm text-rose-700">{error}</p> : null}

      <button
        type="submit"
        className="w-full rounded-full bg-ink py-3 text-sm text-cream transition hover:bg-ink-soft"
      >
        Оставить заявку
      </button>
    </form>
  );
}
