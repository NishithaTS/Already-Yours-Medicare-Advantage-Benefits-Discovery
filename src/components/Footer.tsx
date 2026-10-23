import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ShieldCheck, RotateCcw, ArrowUpRight, Phone } from 'lucide-react';

const EXPLORE_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/upload', label: 'Upload or try a sample card' },
  { to: '/benefits', label: 'My benefits' },
  { to: '/saved', label: 'Saved benefits' },
];

const LEARN_LINKS = [
  { to: '/how-it-works', label: 'How it works' },
  { to: '/help', label: 'Help & FAQ' },
  { to: '/help', label: 'Caregiver guide' },
];

const RESOURCES = [
  { href: 'https://www.medicare.gov', label: 'Medicare.gov' },
  { href: 'https://www.cms.gov', label: 'CMS.gov' },
];

export const Footer: React.FC = () => {
  const { resetDemo } = useApp();

  return (
    <footer className="mt-20 px-4 sm:px-6 lg:px-8 pb-6">
      <div className="max-w-7xl mx-auto rounded-[28px] bg-white border border-[#16151D]/5 p-8 sm:p-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <span className="h-10 w-10 rounded-full bg-[#F1EEFE] flex items-center justify-center">
                <img src="/assets/already-yours-mark.png" alt="" className="h-6 w-6 object-contain" />
              </span>
              <span className="text-sm font-semibold tracking-wide uppercase text-[#16151D]">Already Yours</span>
            </div>
            <p className="text-2xl font-light leading-snug text-[#16151D] max-w-sm text-pretty">
              Don&apos;t let what&apos;s already yours expire.
            </p>
            <p className="text-sm text-[#5E5D6B] leading-relaxed max-w-sm">
              Helping older adults and the families who care for them find and use the dental, hearing, vision, and OTC allowances built into Medicare Advantage plans.
            </p>
            <Link
              to="/upload"
              className="self-start inline-flex items-center gap-3 h-12 pl-5 pr-1.5 rounded-full bg-[#16151D] text-white text-sm font-medium hover:bg-black transition-colors"
            >
              Start benefit discovery
              <span className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            <div className="flex items-center gap-2 text-xs text-[#5E5D6B]">
              <ShieldCheck className="w-4 h-4 text-[#6A5AE0] shrink-0" />
              <span>No insurer password or Social Security Number required.</span>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-xs font-medium uppercase tracking-wider text-[#5E5D6B]">Explore</h2>
              <ul className="flex flex-col gap-2.5 text-sm text-[#16151D]">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="hover:text-[#6A5AE0] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-xs font-medium uppercase tracking-wider text-[#5E5D6B]">Learn</h2>
              <ul className="flex flex-col gap-2.5 text-sm text-[#16151D]">
                {LEARN_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="hover:text-[#6A5AE0] transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <h2 className="text-xs font-medium uppercase tracking-wider text-[#5E5D6B]">Official resources</h2>
              <ul className="flex flex-col gap-2.5 text-sm text-[#16151D]">
                {RESOURCES.map((r) => (
                  <li key={r.href}>
                    <a href={r.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[#6A5AE0] transition-colors">
                      {r.label}
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </li>
                ))}
                <li>
                  <a href="tel:18006334227" className="inline-flex items-center gap-1.5 hover:text-[#6A5AE0] transition-colors">
                    <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                    1-800-MEDICARE
                  </a>
                  <p className="text-xs text-[#5E5D6B] mt-0.5">TTY: 1-877-486-2048</p>
                </li>
              </ul>
              <button
                type="button"
                onClick={resetDemo}
                className="mt-2 self-start inline-flex items-center gap-2 h-9 px-4 text-xs font-medium rounded-full bg-[#F5F5F7] hover:bg-[#F1EEFE] text-[#16151D] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset demo
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#16151D]/5 flex flex-col gap-4">
          <p className="text-xs leading-relaxed text-[#5E5D6B]">
            <strong className="font-medium text-[#16151D]">Important healthcare disclaimer:</strong> Benefits, eligibility, restrictions, and availability vary by plan and service area. Always verify coverage and preauthorization rules with your official plan documents (Evidence of Coverage) or by contacting member services. Already Yours is a demonstration prototype and is not affiliated with, sponsored by, or endorsed by CMS, the federal government, or any Medicare Advantage insurer.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#5E5D6B]">
            <p>© {new Date().getFullYear()} Already Yours. All rights reserved.</p>
            <p>Built with care for healthy aging.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
