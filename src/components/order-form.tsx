"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

const STORAGE_KEY = "vikki-box-orders";

export function OrderForm() {
  const searchParams = useSearchParams();
  const preset = searchParams.get("box") ?? "";
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [pvz, setPvz] = useState("");
  const [mood, setMood] = useState(preset);
  const [size, setSize] = useState("");
  const [colors, setColors] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const selectedTitle = useMemo(
    () => products.find((item) => item.slug === mood)?.title ?? "на ваше усмотрение",
    [mood],
  );

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim() || !pvz.trim() || !size) {
      setError("Нужны имя, телефон для Ozon, адрес ПВЗ и размер бокса.");
      return;
    }

    const order = {
      name: name.trim(),
      city: city.trim(),
      phone: phone.trim(),
      pvz: pvz.trim(),
      mood: mood || "any",
      size,
      colors: colors.trim(),
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
        <h2 className="mt-3 text-2xl font-semibold">Заявка принята после оплаты</h2>
        <p className="mt-3 text-sm leading-6 text-ink-soft">
          {size === "mini" ? "Мини" : "Стандарт"} «{selectedTitle}» для {name}.
          Сборка до 5 дней, доставка по России — отдельно.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-[1.8rem] bg-card px-5 py-7 sm:px-7">
      <label className="block text-sm">
        <span className="text-ink-soft">Размер бокса</span>
        <select
          value={size}
          onChange={(event) => setSize(event.target.value)}
          className="mt-1 w-full rounded-2xl border border-blush/30 bg-cream px-4 py-3 outline-none transition focus:border-blush"
        >
          <option value="">выберите</option>
          <option value="mini">мини — 1 500 ₽</option>
          <option value="standard">стандарт — 2 000 ₽</option>
        </select>
      </label>
      <label className="block text-sm">
        <span className="text-ink-soft">Настроение</span>
        <select
          value={mood}
          onChange={(event) => setMood(event.target.value)}
          className="mt-1 w-full rounded-2xl border border-blush/30 bg-cream px-4 py-3 outline-none transition focus:border-blush"
        >
          <option value="">помогите выбрать</option>
          {products.map((product) => (
            <option key={product.slug} value={product.slug}>
              {product.title}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        <span className="text-ink-soft">Адрес ПВЗ Ozon</span>
        <input
          value={pvz}
          onChange={(event) => setPvz(event.target.value)}
          className="mt-1 w-full rounded-2xl border border-blush/30 bg-cream px-4 py-3 outline-none transition focus:border-blush"
          placeholder="город, пункт выдачи"
        />
      </label>
      <label className="block text-sm">
        <span className="text-ink-soft">Телефон, привязанный к Ozon</span>
        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="mt-1 w-full rounded-2xl border border-blush/30 bg-cream px-4 py-3 outline-none transition focus:border-blush"
          placeholder="+7"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-ink-soft">Имя</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 w-full rounded-2xl border border-blush/30 bg-cream px-4 py-3 outline-none transition focus:border-blush"
            placeholder="Вика"
          />
        </label>
        <label className="block text-sm">
          <span className="text-ink-soft">Город</span>
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className="mt-1 w-full rounded-2xl border border-blush/30 bg-cream px-4 py-3 outline-none transition focus:border-blush"
            placeholder="Санкт-Петербург"
          />
        </label>
      </div>
      <label className="block text-sm">
        <span className="text-ink-soft">Пожелания по цветам, если есть</span>
        <textarea
          value={colors}
          onChange={(event) => setColors(event.target.value)}
          rows={3}
          className="mt-1 w-full resize-none rounded-2xl border border-blush/30 bg-cream px-4 py-3 outline-none transition focus:border-blush"
          placeholder="нюд, пыльная роза, без яркого"
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
