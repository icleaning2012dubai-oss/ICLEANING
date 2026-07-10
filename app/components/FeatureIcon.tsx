import React from 'react';

// Shared inline-SVG icon set used by service feature blocks.
export const iconColors: Record<string, string> = {
  flask: 'bg-violet-100 text-violet-600',
  bolt: 'bg-amber-100 text-amber-600',
  shield: 'bg-emerald-100 text-emerald-600',
  home: 'bg-blue-100 text-blue-600',
  droplet: 'bg-sky-100 text-sky-600',
  leaf: 'bg-green-100 text-green-600',
  palette: 'bg-orange-100 text-orange-600',
  bacteria: 'bg-lime-100 text-lime-600',
  sparkles: 'bg-pink-100 text-pink-600',
  steam: 'bg-red-100 text-red-500',
  tools: 'bg-slate-100 text-slate-600',
  check: 'bg-teal-100 text-teal-600',
  building: 'bg-indigo-100 text-indigo-600',
  users: 'bg-purple-100 text-purple-600',
  clipboard: 'bg-cyan-100 text-cyan-600',
  snow: 'bg-cyan-100 text-cyan-600',
  window: 'bg-sky-100 text-sky-600',
  truck: 'bg-amber-100 text-amber-600',
  clock: 'bg-blue-100 text-blue-600',
  dollar: 'bg-emerald-100 text-emerald-600',
  heart: 'bg-rose-100 text-rose-600',
  mapPin: 'bg-violet-100 text-violet-600',
  calendar: 'bg-sky-100 text-sky-600',
};

export function FeatureIcon({ iconKey, className = 'w-6 h-6' }: { iconKey: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    flask: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3h6M10 3v5.172a2 2 0 01-.586 1.414l-4.828 4.828A2 2 0 004 15.828V17a3 3 0 003 3h10a3 3 0 003-3v-1.172a2 2 0 00-.586-1.414l-4.828-4.828A2 2 0 0114 8.172V3" />,
    bolt: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
    shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    home: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" /></>,
    droplet: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />,
    leaf: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 14c3-1 6.5-1.5 9-3.5" /></>,
    palette: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.7-.8 1.7-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.8-1.7 1.7-1.7H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.6-10-9.6zM6.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3-4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />,
    bacteria: <><circle cx="12" cy="12" r="5" strokeWidth={1.5} /><path strokeLinecap="round" strokeWidth={1.5} d="M12 2v5M12 17v5M2 12h5M17 12h5M4.93 4.93l3.54 3.54M15.54 15.54l3.53 3.53M4.93 19.07l3.54-3.54M15.54 8.46l3.53-3.53" /></>,
    sparkles: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5zM19 2l.5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5zM19 18l.5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5z" />,
    steam: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 18V6a2 2 0 012-2h4a2 2 0 012 2v12M4 18h16M6 18v2M18 18v2M8 10h8M12 4v-2" />,
    tools: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />,
    check: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 4L12 14.01l-3-3" /></>,
    building: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" /><path strokeWidth={1.5} d="M9 9h1M9 13h1M9 17h1M13 13h1M13 17h1" /></>,
    users: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" strokeWidth={1.5} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>,
    clipboard: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" strokeWidth={1.5} /><path strokeLinecap="round" strokeWidth={1.5} d="M9 12h6M9 16h4" /></>,
    snow: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20M4 6l16 12M20 6L4 18M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3-3M4 6l.5 4M4 6l4-.5M20 18l-.5-4M20 18l-4 .5" />,
    window: <><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} /><path strokeWidth={1.5} d="M12 3v18M3 12h18" /></>,
    truck: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2" strokeWidth={1.5} /><circle cx="18.5" cy="18.5" r="2" strokeWidth={1.5} /></>,
    clock: <><circle cx="12" cy="12" r="9" strokeWidth={1.5} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v5l3 2" /></>,
    dollar: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 1.5v21M17 5.5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />,
    heart: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.8 5.6a5.5 5.5 0 00-7.8 0l-1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.6 7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />,
    mapPin: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" strokeWidth={1.5} /></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={1.5} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 2v4M8 2v4M3 10h18" /></>,
  };
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {paths[iconKey] || paths.check}
    </svg>
  );
}
