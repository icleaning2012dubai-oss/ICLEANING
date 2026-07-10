'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { DayPicker } from 'react-day-picker';
import { ru, enUS, arSA } from 'react-day-picker/locale';

type Lang = 'ru' | 'en' | 'ar';

const LOCALES = { ru, en: enUS, ar: arSA } as const;
const INTL_TAG: Record<Lang, string> = { ru: 'ru-RU', en: 'en-GB', ar: 'ar-AE' };

// 'YYYY-MM-DD' (local) <-> Date, without timezone drift.
function toYMD(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
function fromYMD(s: string): Date | undefined {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return undefined;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
}

// Calendar picker built on react-day-picker (same core as the shadcn Calendar),
// styled to the site. The popover renders in a portal with fixed positioning so
// it is never clipped by an overflow-hidden ancestor (e.g. the hero section).
// (Portal escapes the hero's overflow-hidden; trigger stays a Fragment root.)
export default function DatePicker({
  value,
  onChange,
  lang,
  placeholder,
  triggerClassName = '',
}: {
  value: string;
  onChange: (v: string) => void;
  lang: Lang;
  placeholder: string;
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const selected = fromYMD(value);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const label = selected
    ? new Intl.DateTimeFormat(INTL_TAG[lang], { day: 'numeric', month: 'long', year: 'numeric' }).format(selected)
    : '';

  useEffect(() => setMounted(true), []);

  // Position the portal panel next to the trigger; flip up when short on space.
  const place = () => {
    const t = triggerRef.current;
    const p = panelRef.current;
    if (!t) return;
    const r = t.getBoundingClientRect();
    const gap = 8;
    const ph = p?.offsetHeight ?? 360;
    const pw = p?.offsetWidth ?? 288;
    const spaceBelow = window.innerHeight - r.bottom - gap;
    const spaceAbove = r.top - gap;
    let top: number;
    if (ph <= spaceBelow) top = r.bottom + gap; // fits below
    else if (ph <= spaceAbove) top = r.top - ph - gap; // fits above
    else top = Math.max(gap, window.innerHeight - ph - gap); // clamp inside viewport
    // Center the popover under the trigger, clamped into the viewport.
    let left = r.left + r.width / 2 - pw / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
    setPos({ left, top });
  };

  useLayoutEffect(() => {
    if (!open) return;
    place();
    const onScroll = () => place();
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      const tgt = e.target as Node;
      if (triggerRef.current?.contains(tgt) || panelRef.current?.contains(tgt)) return;
      setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onEsc);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`${triggerClassName} flex items-center justify-between text-left`}
      >
        <span className={label ? 'text-gray-900' : 'text-gray-500'}>{label || placeholder}</span>
        <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>

      {mounted && open &&
        createPortal(
          <div
            ref={panelRef}
            style={{ position: 'fixed', left: pos.left, top: pos.top, maxWidth: 'calc(100vw - 16px)', maxHeight: 'calc(100vh - 16px)', overflowY: 'auto' }}
            className="z-[100] w-max rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl"
          >
            <DayPicker
              mode="single"
              locale={LOCALES[lang]}
              dir={lang === 'ar' ? 'rtl' : 'ltr'}
              selected={selected}
              defaultMonth={selected ?? today}
              startMonth={today}
              disabled={{ before: today }}
              showOutsideDays
              onSelect={(d) => {
                if (d) {
                  onChange(toYMD(d));
                  setOpen(false);
                }
              }}
              classNames={{
                months: 'relative',
                month: 'space-y-2',
                month_caption: 'flex items-center justify-center h-10',
                caption_label: 'text-sm font-semibold text-gray-900 capitalize',
                nav: 'absolute top-0 inset-x-0 h-10 flex items-center justify-between px-0.5 pointer-events-none',
                button_previous:
                  'pointer-events-auto inline-flex w-8 h-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition',
                button_next:
                  'pointer-events-auto inline-flex w-8 h-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition',
                chevron: 'w-4 h-4 fill-gray-500',
                month_grid: 'border-collapse',
                weekdays: 'flex',
                weekday: 'w-9 h-8 text-[0.7rem] font-medium text-gray-400 flex items-center justify-center',
                week: 'flex w-full',
                day: 'w-9 h-9 p-0 text-center',
                day_button:
                  'w-9 h-9 rounded-lg text-sm text-gray-700 inline-flex items-center justify-center hover:bg-green-50 transition cursor-pointer',
                selected: '[&>button]:bg-green-500 [&>button]:text-white [&>button]:hover:bg-green-600',
                today: '[&>button]:font-bold [&>button]:text-green-600',
                outside: '[&>button]:text-gray-300',
                disabled:
                  '[&>button]:text-gray-300 [&>button]:opacity-50 [&>button]:pointer-events-none [&>button]:hover:bg-transparent [&>button]:cursor-default',
              }}
            />
          </div>,
          document.body,
        )}
    </>
  );
}
