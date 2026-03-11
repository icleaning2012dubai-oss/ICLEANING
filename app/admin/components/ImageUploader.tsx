'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  label?: string;
}

export default function ImageUploader({ value, onChange, folder = 'icleaning', label }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', folder);

      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      onChange(data.url);
    } catch (err) {
      alert('Ошибка загрузки изображения');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-3">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      
      {value && (
        <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden border border-gray-200">
          <Image src={value} alt="Preview" fill className="object-cover" sizes="400px" />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600"
          >
            ×
          </button>
        </div>
      )}

      <div className="flex items-center gap-3">
        <input ref={inputRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-200 transition-colors text-sm font-medium disabled:opacity-50"
        >
          {uploading ? 'Загрузка...' : value ? 'Заменить' : 'Загрузить изображение'}
        </button>
        <span className="text-xs text-gray-400">или вставьте URL:</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-blue-500 outline-none"
        />
      </div>
    </div>
  );
}
