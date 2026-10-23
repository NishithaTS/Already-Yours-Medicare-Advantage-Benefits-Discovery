import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, Ear, Eye, ShoppingBag, Dumbbell, Car, UtensilsCrossed, Plus } from 'lucide-react';

type Tile = {
  icon: React.ElementType;
  label: string;
  amount: string;
  tone: 'mint' | 'lavender';
  featured?: boolean;
};

const COLUMNS: Tile[][] = [
  [
    { icon: Ear, label: 'Hearing aids', amount: 'Up to $1,000 / ear', tone: 'mint' },
    { icon: Car, label: 'Medical rides', amount: '24 trips / yr', tone: 'mint' },
  ],
  [{ icon: Smile, label: 'Dental care', amount: '$1,000 / yr', tone: 'lavender', featured: true }],
  [
    { icon: Eye, label: 'Vision & eyewear', amount: '$150 / yr', tone: 'mint' },
    { icon: ShoppingBag, label: 'OTC health items', amount: '$300 / yr', tone: 'mint' },
  ],
  [
    { icon: Dumbbell, label: 'Fitness', amount: 'Free gym access', tone: 'mint' },
    { icon: UtensilsCrossed, label: 'Post-discharge meals', amount: '28 meals', tone: 'lavender' },
  ],
];

const TileCard: React.FC<{ tile: Tile }> = ({ tile }) => {
  const Icon = tile.icon;
  return (
    <Link
      to="/benefits"
      className={`group flex flex-col items-center justify-center gap-3 rounded-3xl p-6 text-center transition-all hover:-translate-y-0.5 ${
        tile.tone === 'lavender' ? 'bg-[#EAF5F7]' : 'bg-[#EAF7F6]'
      } ${tile.featured ? 'min-h-[260px] sm:min-h-full' : 'min-h-[150px]'}`}
    >
      <Icon
        className={`${tile.featured ? 'w-14 h-14' : 'w-7 h-7'} text-[#233640] transition-transform group-hover:scale-110`}
        strokeWidth={1.4}
        aria-hidden="true"
      />
      <span className={`${tile.featured ? 'text-lg font-medium text-[#233640]' : 'text-sm text-[#63747D]'}`}>
        {tile.label}
      </span>
      <span className={`text-xs font-medium ${tile.featured ? 'text-[#12566C]' : 'text-[#233640]'}`}>{tile.amount}</span>
    </Link>
  );
};

export const BenefitMosaic: React.FC = () => {
  return (
    <section aria-labelledby="mosaic-heading" className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2
            id="mosaic-heading"
            className="text-3xl sm:text-5xl font-normal tracking-tight leading-tight text-[#233640] text-balance max-w-2xl"
          >
            Explore the extras hiding in your plan
          </h2>
          <Link
            to="/benefits"
            className="inline-flex items-center h-10 px-5 rounded-full border border-[#233640]/15 text-sm text-[#233640] hover:bg-[#233640] hover:text-white transition-colors"
          >
            Explore benefits
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
          {COLUMNS.map((column, index) => (
            <div
              key={index}
              className={`flex flex-col gap-3 ${index === 1 ? 'col-span-2 lg:col-span-1 lg:mt-6' : ''} ${
                index === 3 ? 'lg:-mt-4' : ''
              }`}
            >
              {column.map((tile) => (
                <TileCard key={tile.label} tile={tile} />
              ))}
            </div>
          ))}
        </div>

        <p className="flex items-start gap-3 max-w-md text-sm text-[#63747D] leading-relaxed">
          <span className="h-6 w-6 shrink-0 rounded-full border border-[#233640]/15 flex items-center justify-center">
            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
          Representative values shown. Your exact allowances depend on your carrier, plan, and service area.
        </p>
      </div>
    </section>
  );
};
