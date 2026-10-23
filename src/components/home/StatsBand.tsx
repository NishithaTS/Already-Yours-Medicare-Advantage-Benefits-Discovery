import React from 'react';

const STATS = [
  { value: '8', suffix: '', label: 'Benefit categories we check for you' },
  { value: '$800', suffix: '+', label: 'Typical yearly dental allowance' },
  { value: '3', suffix: ' min', label: 'To scan your member card' },
  { value: '0', suffix: '', label: 'Logins or SSNs ever required' },
];

export const StatsBand: React.FC = () => {
  return (
    <section aria-label="Already Yours at a glance" className="px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[32px] bg-gradient-to-br from-[#233640] via-[#12566C] to-[#176B83]">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-[#EAF5F7]/10 blur-3xl"
        />
        <dl className="relative grid grid-cols-2 lg:grid-cols-4 gap-y-10 px-6 py-12 sm:px-10 lg:py-16">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col gap-3 px-4 sm:px-8 ${
                index % 2 === 1 ? 'border-l border-white/20' : ''
              } ${index > 0 ? 'lg:border-l lg:border-white/20' : ''}`}
            >
              <dt className="order-2 text-sm sm:text-base text-white/75 leading-snug max-w-[200px]">{stat.label}</dt>
              <dd className="order-1 text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white tabular-nums">
                {stat.value}
                <span className="text-white/80">{stat.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
