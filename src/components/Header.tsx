import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { HeartHandshake, Menu, X, Type, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/benefits', label: 'My Benefits' },
  { to: '/saved', label: 'Saved' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/help', label: 'Help' },
];

export const Header: React.FC = () => {
  const location = useLocation();
  const { savedBenefitIds, caregiverModeEnabled, toggleCaregiverMode, fontSizePreference, toggleFontSize } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-40 bg-[#FCFCFA]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex-1 flex items-center">
            <nav
              aria-label="Primary"
              className="hidden xl:flex items-center gap-1 h-12 px-2 rounded-full bg-white border border-[#233640]/10"
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    aria-current={active ? 'page' : undefined}
                    className={`inline-flex items-center gap-1.5 h-9 px-3 rounded-full text-sm whitespace-nowrap transition-colors ${
                      active ? 'text-[#176B83] font-medium' : 'text-[#233640] hover:text-[#176B83]'
                    }`}
                  >
                    {active && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#176B83]" />}
                    {link.label}
                    {link.to === '/saved' && savedBenefitIds.length > 0 && (
                      <span className="inline-flex items-center justify-center min-w-5 h-5 px-1.5 text-[11px] font-semibold rounded-full bg-[#176B83] text-white">
                        {savedBenefitIds.length}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <Link to="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Already Yours home">
            <img
              src="/assets/already-yours-mark.png"
              alt=""
              className="h-9 w-9 object-contain transition-transform group-hover:scale-105"
            />
            <span className="flex flex-col leading-[1.05] text-[15px] font-semibold">
              <span className="text-[#12566C]">Already</span>
              <span className="text-[#176B83]">Yours</span>
            </span>
          </Link>

          <div className="flex-1 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={toggleFontSize}
              aria-pressed={fontSizePreference === 'large'}
              aria-label="Toggle large text"
              title="Toggle large text"
              className={`h-10 w-10 rounded-full flex items-center justify-center border transition-colors ${
                fontSizePreference === 'large'
                  ? 'bg-[#176B83] border-[#176B83] text-white'
                  : 'bg-white border-[#233640]/10 text-[#233640] hover:bg-[#EAF5F7]'
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
              className={`h-10 px-3 rounded-full flex items-center gap-1.5 text-sm border transition-colors ${
                caregiverModeEnabled
                  ? 'bg-[#EAF5F7] border-[#176B83] text-[#12566C]'
                  : 'bg-white border-[#233640]/10 text-[#233640] hover:bg-[#EAF5F7]'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span className="hidden md:inline">Caregiver</span>
            </button>

            <Link
              to="/upload"
              className="hidden sm:inline-flex h-12 items-center gap-3 pl-5 pr-1.5 rounded-full bg-gradient-to-r from-[#12566C] to-[#176B83] hover:from-[#233640] hover:to-[#12566C] text-white text-sm font-medium transition-colors whitespace-nowrap"
            >
              Find My Benefits
              <span className="h-9 w-9 rounded-full bg-white text-[#12566C] flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="xl:hidden h-10 w-10 rounded-full bg-white border border-[#233640]/10 text-[#233640] flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav aria-label="Mobile" className="xl:hidden bg-white border-b border-[#233640]/5 px-4 pt-2 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-base font-medium ${
                  isActive(link.to) ? 'bg-[#EAF5F7] text-[#12566C]' : 'text-[#233640] hover:bg-[#FCFCFA]'
                }`}
              >
                <span>{link.label}</span>
                {link.to === '/saved' && savedBenefitIds.length > 0 && (
                  <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-[#176B83] text-white">
                    {savedBenefitIds.length}
                  </span>
                )}
              </Link>
            ))}
            <Link
              to="/upload"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-3.5 bg-gradient-to-r from-[#12566C] to-[#176B83] text-white font-medium rounded-full"
            >
              Find My Benefits
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
