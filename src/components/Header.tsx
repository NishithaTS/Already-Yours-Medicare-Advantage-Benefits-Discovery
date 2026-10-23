import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { HeartHandshake, Bookmark, Menu, X, Type, HelpCircle, ShieldAlert } from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();
  const { savedBenefitIds, caregiverModeEnabled, toggleCaregiverMode, fontSizePreference, toggleFontSize } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCFCFA]/95 backdrop-blur-md border-b border-[#233640]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 sm:gap-8">
          
          {/* Zone 1: Single Brand element with Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group focus-visible:ring-2 focus-visible:ring-[#176B83] rounded-lg p-1"
            aria-label="Already Yours Home"
          >
            <img
              src="/assets/already-yours-mark.png"
              alt="Already Yours Emblem"
              className="h-10 w-10 object-contain transition-transform group-hover:scale-105 shrink-0"
              onError={(e) => {
                // Fallback icon container if image path is unavailable
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#12566C] leading-tight">
                Already Yours
              </span>
              <span className="text-[11px] font-medium text-[#63747D] tracking-normal hidden sm:inline">
                Medicare Advantage Discovery
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (single line, concise) */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#233640]">
            <Link
              to="/"
              className={`hover:text-[#176B83] transition-colors py-2 whitespace-nowrap shrink-0 border-b-2 ${
                isActive('/') && location.pathname === '/' ? 'border-[#176B83] text-[#176B83] font-semibold' : 'border-transparent text-[#63747D]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/benefits"
              className={`hover:text-[#176B83] transition-colors py-2 whitespace-nowrap shrink-0 border-b-2 ${
                isActive('/benefits') ? 'border-[#176B83] text-[#176B83] font-semibold' : 'border-transparent text-[#63747D]'
              }`}
            >
              My Benefits
            </Link>
            <Link
              to="/saved"
              className={`hover:text-[#176B83] transition-colors py-2 whitespace-nowrap shrink-0 flex items-center gap-1.5 border-b-2 ${
                isActive('/saved') ? 'border-[#176B83] text-[#176B83] font-semibold' : 'border-transparent text-[#63747D]'
              }`}
            >
              <span>Saved Benefits</span>
              {savedBenefitIds.length > 0 && (
                <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold rounded-full bg-[#EAF5F7] text-[#12566C]">
                  {savedBenefitIds.length}
                </span>
              )}
            </Link>
            <Link
              to="/how-it-works"
              className={`hover:text-[#176B83] transition-colors py-2 whitespace-nowrap shrink-0 border-b-2 ${
                isActive('/how-it-works') ? 'border-[#176B83] text-[#176B83] font-semibold' : 'border-transparent text-[#63747D]'
              }`}
            >
              How It Works
            </Link>
            <Link
              to="/help"
              className={`hover:text-[#176B83] transition-colors py-2 whitespace-nowrap shrink-0 border-b-2 ${
                isActive('/help') ? 'border-[#176B83] text-[#176B83] font-semibold' : 'border-transparent text-[#63747D]'
              }`}
            >
              Help & FAQ
            </Link>
          </nav>

          {/* Zone 3: Senior/Caregiver Accessibility & Primary Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Font Size Toggle for Accessibility */}
            <button
              onClick={toggleFontSize}
              title="Toggle Large Text for Readability"
              aria-label="Toggle Large Text"
              className={`min-h-[44px] min-w-[44px] px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                fontSizePreference === 'large'
                  ? 'bg-[#176B83] text-white border-[#176B83]'
                  : 'bg-white text-[#233640] border-[#233640]/15 hover:bg-[#EAF5F7]'
              }`}
            >
              <Type className="w-4 h-4" />
              <span className="hidden sm:inline">{fontSizePreference === 'large' ? 'Larger' : 'Text A+'}</span>
            </button>

            {/* Caregiver Mode Toggle */}
            <button
              onClick={toggleCaregiverMode}
              title="Toggle Caregiver Assistance Tips"
              aria-label="Toggle Caregiver Tips"
              className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                caregiverModeEnabled
                  ? 'bg-[#EAF5F7] text-[#12566C] border-[#176B83]/30 ring-1 ring-[#176B83]'
                  : 'bg-white text-[#63747D] border-[#233640]/15 hover:text-[#233640] hover:bg-[#EAF5F7]/50'
              }`}
            >
              <HeartHandshake className="w-4 h-4 text-[#176B83]" />
              <span className="hidden md:inline">Caregiver Mode</span>
            </button>

            {/* Primary Action Button */}
            <Link
              to="/upload"
              className="min-h-[44px] px-5 py-2.5 bg-[#176B83] hover:bg-[#12566C] active:scale-[0.98] text-white text-sm font-semibold rounded-lg shadow-sm transition-all flex items-center justify-center whitespace-nowrap shrink-0"
            >
              Find My Benefits
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-h-[44px] min-w-[44px] p-2 text-[#233640] hover:bg-[#EAF5F7] rounded-lg transition-colors flex items-center justify-center"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFCFA] border-b border-[#233640]/15 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-base font-semibold ${
              isActive('/') && location.pathname === '/' ? 'bg-[#EAF5F7] text-[#12566C]' : 'text-[#233640] hover:bg-black/5'
            }`}
          >
            Home
          </Link>
          <Link
            to="/benefits"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-base font-semibold ${
              isActive('/benefits') ? 'bg-[#EAF5F7] text-[#12566C]' : 'text-[#233640] hover:bg-black/5'
            }`}
          >
            My Benefits
          </Link>
          <Link
            to="/saved"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold ${
              isActive('/saved') ? 'bg-[#EAF5F7] text-[#12566C]' : 'text-[#233640] hover:bg-black/5'
            }`}
          >
            <span>Saved Benefits</span>
            {savedBenefitIds.length > 0 && (
              <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-[#176B83] text-white">
                {savedBenefitIds.length}
              </span>
            )}
          </Link>
          <Link
            to="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-base font-semibold ${
              isActive('/how-it-works') ? 'bg-[#EAF5F7] text-[#12566C]' : 'text-[#233640] hover:bg-black/5'
            }`}
          >
            How It Works
          </Link>
          <Link
            to="/help"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg text-base font-semibold ${
              isActive('/help') ? 'bg-[#EAF5F7] text-[#12566C]' : 'text-[#233640] hover:bg-black/5'
            }`}
          >
            Help & Frequently Asked Questions
          </Link>

          <div className="pt-3 border-t border-[#233640]/10 flex flex-col gap-2">
            <Link
              to="/upload"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-[#176B83] text-white font-bold rounded-lg shadow-sm"
            >
              Start Discovery Journey
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
