import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { HeartHandshake, Menu, X, Type, ArrowUpRight } from 'lucide-react';

const PRIMARY_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/benefits', label: 'My Benefits' },
  { to: '/saved', label: 'Saved' },
];

const SECONDARY_LINKS = [
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/help', label: 'Help & FAQ' },
];

export const Header: React.FC = () => {
  const location = useLocation();
  const { savedBenefitIds, caregiverModeEnabled, toggleCaregiverMode, fontSizePreference, toggleFontSize } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const pillClass = (path: string) =>
    `inline-flex items-center gap-1.5 h-10 px-4 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
      isActive(path)
        ? 'bg-[#16151D] text-white'
        : 'bg-[#F5F5F7] text-[#16151D] hover:bg-[#F1EEFE] hover:text-[#5243C9]'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#16151D]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <nav aria-label="Primary" className="hidden xl:flex items-center gap-2 flex-1">
            {PRIMARY_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className={pillClass(link.to)}>
                {link.to === '/' && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />}
                <span>{link.label}</span>
                {link.to === '/saved' && savedBenefitIds.length > 0 && (
                  <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-[11px] font-semibold rounded-full bg-[#6A5AE0] text-white">
                    {savedBenefitIds.length}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="flex items-center gap-2.5 h-12 pl-1.5 pr-4 rounded-full bg-[#F5F5F7] shrink-0 group"
            aria-label="Already Yours home"
          >
            <span className="h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-sm">
              <img
                src="/assets/already-yours-mark.png"
                alt=""
                className="h-6 w-6 object-contain transition-transform group-hover:scale-110"
              />
            </span>
            <span className="text-sm font-semibold tracking-wide uppercase text-[#16151D]">Already Yours</span>
          </Link>

          <div className="flex items-center justify-end gap-2 flex-1">
            <nav aria-label="Secondary" className="hidden xl:flex items-center gap-2">
              {SECONDARY_LINKS.map((link) => (
                <Link key={link.to} to={link.to} className={pillClass(link.to)}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={toggleFontSize}
              aria-pressed={fontSizePreference === 'large'}
              aria-label="Toggle large text"
              title="Toggle large text"
              className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${
                fontSizePreference === 'large'
                  ? 'bg-[#6A5AE0] text-white'
                  : 'bg-[#F5F5F7] text-[#16151D] hover:bg-[#F1EEFE]'
              }`}
            >
              <Type className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={toggleCaregiverMode}
              aria-pressed={caregiverModeEnabled}
              aria-label="Toggle caregiver tips"
              title="Toggle caregiver tips"
              className={`h-10 px-3 rounded-full flex items-center gap-1.5 text-sm font-medium transition-colors ${
                caregiverModeEnabled
                  ? 'bg-[#F1EEFE] text-[#5243C9] ring-1 ring-[#6A5AE0]'
                  : 'bg-[#F5F5F7] text-[#16151D] hover:bg-[#F1EEFE]'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span className="hidden md:inline">Caregiver</span>
            </button>

            <Link
              to="/upload"
              className="hidden sm:inline-flex h-10 items-center gap-1.5 px-5 rounded-full bg-[#6A5AE0] hover:bg-[#5243C9] text-white text-sm font-medium transition-colors whitespace-nowrap"
            >
              Find My Benefits
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="xl:hidden h-10 w-10 rounded-full bg-[#F5F5F7] text-[#16151D] flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav aria-label="Mobile" className="xl:hidden bg-white border-b border-[#16151D]/5 px-4 pt-2 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {[...PRIMARY_LINKS, ...SECONDARY_LINKS].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-base font-medium ${
                  isActive(link.to) ? 'bg-[#F1EEFE] text-[#5243C9]' : 'text-[#16151D] hover:bg-[#F5F5F7]'
                }`}
              >
                <span>{link.label}</span>
                {link.to === '/saved' && savedBenefitIds.length > 0 && (
                  <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#6A5AE0] text-white">
                    {savedBenefitIds.length}
                  </span>
                )}
              </Link>
            ))}
            <Link
              to="/upload"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-3.5 bg-[#6A5AE0] text-white font-medium rounded-full"
            >
              Find My Benefits
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
