'use client';

import { useState, useCallback } from 'react';
import ImageUploader from './ImageUploader';

// ─── Block types ────────────────────────────────────────────────────────────

type HeadingBlock  = { id: string; type: 'heading';   text: string };
type ParagraphBlock= { id: string; type: 'paragraph'; text: string };
type ImageBlock    = { id: string; type: 'image';     url: string; alt: string };
type FaqBlock      = { id: string; type: 'faq';       question: string; answer: string };
type TableBlock    = { id: string; type: 'table';     header1: string; header2: string; rows: { left: string; right: string }[] };
type PricesBlock   = { id: string; type: 'prices';    items: { label: string; amount: string; note: string }[] };
type NoteBlock     = { id: string; type: 'note';      text: string };
type ListBlock     = { id: string; type: 'list';      items: string[] };

type Block = HeadingBlock | ParagraphBlock | ImageBlock | FaqBlock | TableBlock | PricesBlock | NoteBlock | ListBlock;

// ─── HTML generation ─────────────────────────────────────────────────────────

function escape(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function nl2p(str: string): string {
  return str.split('\n').filter(Boolean).map(s => `<p>${s}</p>`).join('\n');
}

export function blocksToHtml(blocks: Block[]): string {
  return blocks.map(b => {
    switch (b.type) {
      case 'heading':
        return `<h2>${escape(b.text)}</h2>`;
      case 'paragraph':
        return nl2p(b.text);
      case 'image':
        return `<img src="${escape(b.url)}" alt="${escape(b.alt)}" />`;
      case 'faq':
        return `<details>\n  <summary>${escape(b.question)}</summary>\n  ${nl2p(b.answer)}\n</details>`;
      case 'table': {
        const rows = b.rows.map(r =>
          `    <tr><td>${escape(r.left)}</td><td>${escape(r.right)}</td></tr>`
        ).join('\n');
        return `<table>\n  <thead><tr><th>${escape(b.header1)}</th><th>${escape(b.header2)}</th></tr></thead>\n  <tbody>\n${rows}\n  </tbody>\n</table>`;
      }
      case 'prices': {
        const items = b.items.map(i =>
          `  <div><span class="label">${escape(i.label)}</span><span class="amount">${escape(i.amount)}</span><span class="note">${escape(i.note)}</span></div>`
        ).join('\n');
        return `<div class="prices">\n${items}\n</div>`;
      }
      case 'note':
        return `<blockquote>\n  ${nl2p(b.text)}\n</blockquote>`;
      case 'list': {
        const items = b.items.filter(Boolean).map(i => `  <li>${escape(i)}</li>`).join('\n');
        return `<ul>\n${items}\n</ul>`;
      }
    }
  }).join('\n\n');
}

// ─── ID helper ───────────────────────────────────────────────────────────────

let counter = 0;
function uid() { return `b${++counter}_${Math.random().toString(36).slice(2, 6)}`; }

// ─── Default blocks ──────────────────────────────────────────────────────────

function makeBlock(type: Block['type']): Block {
  switch (type) {
    case 'heading':   return { id: uid(), type, text: '' };
    case 'paragraph': return { id: uid(), type, text: '' };
    case 'image':     return { id: uid(), type, url: '', alt: '' };
    case 'faq':       return { id: uid(), type, question: '', answer: '' };
    case 'table':     return { id: uid(), type, header1: '', header2: '', rows: [{ left: '', right: '' }] };
    case 'prices':    return { id: uid(), type, items: [{ label: '', amount: '', note: '' }, { label: '', amount: '', note: '' }] };
    case 'note':      return { id: uid(), type, text: '' };
    case 'list':      return { id: uid(), type, items: ['', ''] };
  }
}

// ─── Block labels ─────────────────────────────────────────────────────────────

const BLOCK_TYPES: { type: Block['type']; label: string; icon: string }[] = [
  { type: 'heading',   label: 'Заголовок',      icon: 'H2' },
  { type: 'paragraph', label: 'Параграф',        icon: '¶'  },
  { type: 'image',     label: 'Фото',            icon: '🖼'  },
  { type: 'faq',       label: 'FAQ вопрос',      icon: '❓'  },
  { type: 'list',      label: 'Список',           icon: '•'  },
  { type: 'table',     label: 'Таблица (2 колонки)', icon: '⊞'  },
  { type: 'prices',    label: 'Цены',            icon: '₴'  },
  { type: 'note',      label: 'Важная заметка',  icon: '⚠'  },
];

// ─── Individual block editors ─────────────────────────────────────────────────

function HeadingEditor({ block, onChange }: { block: HeadingBlock; onChange: (b: HeadingBlock) => void }) {
  return (
    <input
      type="text"
      value={block.text}
      onChange={e => onChange({ ...block, text: e.target.value })}
      placeholder="Введите заголовок..."
      className="w-full px-3 py-2 text-lg font-bold border border-gray-200 rounded-lg focus:border-blue-400 outline-none"
    />
  );
}

function ParagraphEditor({ block, onChange }: { block: ParagraphBlock; onChange: (b: ParagraphBlock) => void }) {
  return (
    <textarea
      value={block.text}
      onChange={e => onChange({ ...block, text: e.target.value })}
      placeholder="Введите текст параграфа... (каждая строка — отдельный абзац)"
      rows={3}
      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-400 outline-none resize-y text-sm"
    />
  );
}

function ImageEditor({ block, onChange }: { block: ImageBlock; onChange: (b: ImageBlock) => void }) {
  return (
    <div className="space-y-2">
      <ImageUploader
        value={block.url}
        onChange={url => onChange({ ...block, url })}
        folder="icleaning/blog"
        label="Загрузить фото"
      />
      <input
        type="text"
        value={block.alt}
        onChange={e => onChange({ ...block, alt: e.target.value })}
        placeholder="Описание фото (alt текст для SEO)"
        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-400 outline-none text-sm"
      />
    </div>
  );
}

function FaqEditor({ block, onChange }: { block: FaqBlock; onChange: (b: FaqBlock) => void }) {
  return (
    <div className="space-y-2">
      <input
        type="text"
        value={block.question}
        onChange={e => onChange({ ...block, question: e.target.value })}
        placeholder="Вопрос..."
        className="w-full px-3 py-2 font-medium border border-gray-200 rounded-lg focus:border-blue-400 outline-none text-sm"
      />
      <textarea
        value={block.answer}
        onChange={e => onChange({ ...block, answer: e.target.value })}
        placeholder="Ответ... (каждая строка — отдельный абзац)"
        rows={3}
        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-400 outline-none resize-y text-sm"
      />
    </div>
  );
}

function ListEditor({ block, onChange }: { block: ListBlock; onChange: (b: ListBlock) => void }) {
  const update = (i: number, val: string) => {
    const items = [...block.items];
    items[i] = val;
    onChange({ ...block, items });
  };
  const add = () => onChange({ ...block, items: [...block.items, ''] });
  const remove = (i: number) => onChange({ ...block, items: block.items.filter((_, idx) => idx !== i) });

  return (
    <div className="space-y-1">
      {block.items.map((item, i) => (
        <div key={i} className="flex gap-2">
          <span className="text-blue-400 pt-2 text-sm">•</span>
          <input
            type="text"
            value={item}
            onChange={e => update(i, e.target.value)}
            placeholder={`Пункт ${i + 1}`}
            className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg focus:border-blue-400 outline-none text-sm"
          />
          {block.items.length > 1 && (
            <button type="button" onClick={() => remove(i)} className="text-red-400 hover:text-red-600 text-sm px-1">✕</button>
          )}
        </div>
      ))}
      <button type="button" onClick={add} className="text-blue-500 text-sm hover:underline mt-1">+ добавить пункт</button>
    </div>
  );
}

function TableEditor({ block, onChange }: { block: TableBlock; onChange: (b: TableBlock) => void }) {
  const updateRow = (i: number, side: 'left' | 'right', val: string) => {
    const rows = block.rows.map((r, idx) => idx === i ? { ...r, [side]: val } : r);
    onChange({ ...block, rows });
  };
  const addRow = () => onChange({ ...block, rows: [...block.rows, { left: '', right: '' }] });
  const removeRow = (i: number) => onChange({ ...block, rows: block.rows.filter((_, idx) => idx !== i) });

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <input type="text" value={block.header1} onChange={e => onChange({ ...block, header1: e.target.value })}
          placeholder="Заголовок колонки 1" className="px-3 py-2 font-medium border border-blue-200 bg-blue-50 rounded-lg text-sm outline-none focus:border-blue-400" />
        <input type="text" value={block.header2} onChange={e => onChange({ ...block, header2: e.target.value })}
          placeholder="Заголовок колонки 2" className="px-3 py-2 font-medium border border-blue-200 bg-blue-50 rounded-lg text-sm outline-none focus:border-blue-400" />
      </div>
      {block.rows.map((row, i) => (
        <div key={i} className="flex gap-2 items-center">
          <input type="text" value={row.left} onChange={e => updateRow(i, 'left', e.target.value)}
            placeholder="Левая колонка" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-400" />
          <input type="text" value={row.right} onChange={e => updateRow(i, 'right', e.target.value)}
            placeholder="Правая колонка" className="flex-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-400" />
          {block.rows.length > 1 && (
            <button type="button" onClick={() => removeRow(i)} className="text-red-400 hover:text-red-600 text-sm px-1">✕</button>
          )}
        </div>
      ))}
      <button type="button" onClick={addRow} className="text-blue-500 text-sm hover:underline">+ добавить строку</button>
    </div>
  );
}

function PricesEditor({ block, onChange }: { block: PricesBlock; onChange: (b: PricesBlock) => void }) {
  const update = (i: number, field: keyof PricesBlock['items'][0], val: string) => {
    const items = block.items.map((it, idx) => idx === i ? { ...it, [field]: val } : it);
    onChange({ ...block, items });
  };
  return (
    <div className="grid grid-cols-2 gap-3">
      {block.items.map((item, i) => (
        <div key={i} className="space-y-1 p-3 bg-blue-50 rounded-xl">
          <input type="text" value={item.label} onChange={e => update(i, 'label', e.target.value)}
            placeholder="Название (напр. На дому)" className="w-full px-2 py-1 border border-blue-200 rounded text-sm outline-none" />
          <input type="text" value={item.amount} onChange={e => update(i, 'amount', e.target.value)}
            placeholder="Цена (напр. 250 AED)" className="w-full px-2 py-1 border border-blue-200 rounded text-base font-bold outline-none" />
          <input type="text" value={item.note} onChange={e => update(i, 'note', e.target.value)}
            placeholder="Примечание (напр. в Дубае)" className="w-full px-2 py-1 border border-blue-200 rounded text-xs outline-none" />
        </div>
      ))}
    </div>
  );
}

function NoteEditor({ block, onChange }: { block: NoteBlock; onChange: (b: NoteBlock) => void }) {
  return (
    <textarea
      value={block.text}
      onChange={e => onChange({ ...block, text: e.target.value })}
      placeholder="Важная заметка или предупреждение..."
      rows={2}
      className="w-full px-3 py-2 border border-yellow-300 bg-yellow-50 rounded-lg outline-none resize-y text-sm"
    />
  );
}

// ─── Block wrapper ────────────────────────────────────────────────────────────

function BlockItem({
  block, index, total,
  onChange, onMove, onDelete,
}: {
  block: Block;
  index: number;
  total: number;
  onChange: (b: Block) => void;
  onMove: (from: number, to: number) => void;
  onDelete: (id: string) => void;
}) {
  const meta = BLOCK_TYPES.find(t => t.type === block.type)!;

  return (
    <div className="border border-gray-200 rounded-xl bg-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border-b border-gray-200">
        <span className="text-base">{meta.icon}</span>
        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{meta.label}</span>
        <div className="ml-auto flex items-center gap-1">
          <button type="button" disabled={index === 0}
            onClick={() => onMove(index, index - 1)}
            className="px-1.5 py-0.5 text-gray-400 hover:text-gray-700 disabled:opacity-30 text-sm">↑</button>
          <button type="button" disabled={index === total - 1}
            onClick={() => onMove(index, index + 1)}
            className="px-1.5 py-0.5 text-gray-400 hover:text-gray-700 disabled:opacity-30 text-sm">↓</button>
          <button type="button" onClick={() => onDelete(block.id)}
            className="px-1.5 py-0.5 text-red-400 hover:text-red-600 text-sm ml-1">✕</button>
        </div>
      </div>
      {/* Editor */}
      <div className="p-3">
        {block.type === 'heading'   && <HeadingEditor   block={block} onChange={onChange as any} />}
        {block.type === 'paragraph' && <ParagraphEditor block={block} onChange={onChange as any} />}
        {block.type === 'image'     && <ImageEditor     block={block} onChange={onChange as any} />}
        {block.type === 'faq'       && <FaqEditor       block={block} onChange={onChange as any} />}
        {block.type === 'list'      && <ListEditor      block={block} onChange={onChange as any} />}
        {block.type === 'table'     && <TableEditor     block={block} onChange={onChange as any} />}
        {block.type === 'prices'    && <PricesEditor    block={block} onChange={onChange as any} />}
        {block.type === 'note'      && <NoteEditor      block={block} onChange={onChange as any} />}
      </div>
    </div>
  );
}

// ─── Main BlockEditor component ──────────────────────────────────────────────

interface BlockEditorProps {
  value: string;          // current HTML (for HTML-mode fallback)
  onChange: (html: string) => void;
  folder?: string;
}

export default function BlockEditor({ value, onChange, folder = 'icleaning/blog' }: BlockEditorProps) {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [mode, setMode] = useState<'blocks' | 'html'>('blocks');
  const [htmlValue, setHtmlValue] = useState(value);

  // Switch to HTML mode — export current blocks
  const switchToHtml = () => {
    const html = blocksToHtml(blocks);
    setHtmlValue(html);
    onChange(html);
    setMode('html');
  };

  // Switch back to blocks — start fresh (can't reliably parse arbitrary HTML)
  const switchToBlocks = () => {
    setBlocks([]);
    setMode('blocks');
  };

  const updateBlock = useCallback((updated: Block) => {
    setBlocks(prev => {
      const next = prev.map(b => b.id === updated.id ? updated : b);
      onChange(blocksToHtml(next));
      return next;
    });
  }, [onChange]);

  const moveBlock = useCallback((from: number, to: number) => {
    setBlocks(prev => {
      const next = [...prev];
      const [item] = next.splice(from, 1);
      next.splice(to, 0, item);
      onChange(blocksToHtml(next));
      return next;
    });
  }, [onChange]);

  const deleteBlock = useCallback((id: string) => {
    setBlocks(prev => {
      const next = prev.filter(b => b.id !== id);
      onChange(blocksToHtml(next));
      return next;
    });
  }, [onChange]);

  const addBlock = (type: Block['type']) => {
    setBlocks(prev => {
      const next = [...prev, makeBlock(type)];
      onChange(blocksToHtml(next));
      return next;
    });
  };

  if (mode === 'html') {
    return (
      <div className="space-y-2">
        <div className="flex justify-end">
          <button type="button" onClick={switchToBlocks}
            className="text-xs text-blue-500 hover:underline">
            ← Вернуться к блок-редактору (контент очистится)
          </button>
        </div>
        <textarea
          value={htmlValue}
          onChange={e => { setHtmlValue(e.target.value); onChange(e.target.value); }}
          rows={12}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none font-mono text-xs resize-y"
        />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Mode toggle */}
      <div className="flex justify-end">
        <button type="button" onClick={switchToHtml}
          className="text-xs text-gray-400 hover:text-gray-600 hover:underline">
          Переключиться в HTML-режим
        </button>
      </div>

      {/* Blocks list */}
      {blocks.length === 0 && (
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400 text-sm">
          Добавьте блоки с помощью кнопок ниже
        </div>
      )}
      {blocks.map((block, i) => (
        <BlockItem
          key={block.id}
          block={block}
          index={i}
          total={blocks.length}
          onChange={updateBlock}
          onMove={moveBlock}
          onDelete={deleteBlock}
        />
      ))}

      {/* Add block buttons */}
      <div className="pt-1">
        <p className="text-xs text-gray-500 mb-2 font-medium">Добавить блок:</p>
        <div className="flex flex-wrap gap-2">
          {BLOCK_TYPES.map(({ type, label, icon }) => (
            <button
              key={type}
              type="button"
              onClick={() => addBlock(type)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-blue-50 hover:text-blue-700 text-gray-700 rounded-lg text-sm font-medium transition-colors border border-gray-200 hover:border-blue-300"
            >
              <span>{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
