import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ShieldCheck, RotateCcw, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { resetDemo } = useApp();

  return (
    <footer className="bg-[#233640] text-[#FCFCFA] border-t border-[#233640]/20 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-[#EAF5F7] flex items-center justify-center p-1.5">
                <img
                  src="/assets/already-yours-mark.png"
                  alt="Already Yours Emblem"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">Already Yours</span>
                <p className="text-xs text-[#EAF5F7]/80">Medicare Advantage Benefits Discovery</p>
              </div>
            </div>

            <p className="text-[#EAF5F7]/90 text-sm max-w-md leading-relaxed font-normal">
              <strong className="text-white">Don’t let what’s already yours expire.</strong> We help older adults and caring family members uncover and use extra dental, hearing, vision, and OTC allowances built into Medicare Advantage plans.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#EAF5F7]/75 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Safe & Private: No insurer password or Social Security Number required.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase">Explore</h4>
            <ul className="space-y-2 text-sm text-[#EAF5F7]/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/upload" className="hover:text-white transition-colors">Upload or Try Sample Card</Link>
              </li>
              <li>
                <Link to="/benefits" className="hover:text-white transition-colors">My Benefits Dashboard</Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-white transition-colors">Saved Allowances & Checklist</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-white transition-colors">Help & FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Prototype Controls & Official Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase">Official Resources</h4>
            <ul className="space-y-2 text-sm text-[#EAF5F7]/80">
              <li>
                <a
                  href="https://www.medicare.gov"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Medicare.gov</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.cms.gov"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>CMS.gov</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                </a>
              </li>
              <li>
                <a
                  href="tel:18006334227"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>1-800-MEDICARE (TTY: 1-877-486-2048)</span>
                </a>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={resetDemo}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-[#EAF5F7] hover:text-white transition-colors border border-white/10"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Demo State</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mandatory Legal & Disclaimer Section */}
        <div className="pt-8 text-xs text-[#EAF5F7]/70 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-white">Important Healthcare Disclaimer:</strong> Benefits, eligibility, restrictions, and availability vary by plan and service area. Always verify coverage and preauthorization rules with your official health plan documents (Evidence of Coverage) or by contacting member services. Already Yours is a functional demonstration prototype for consumer benefit exploration and is not affiliated with, sponsored by, or endorsed by the Centers for Medicare & Medicaid Services (CMS), the federal government, or any commercial Medicare Advantage insurer.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/5 text-[11px] text-[#EAF5F7]/60">
            <p>© {new Date().getFullYear()} Already Yours. Built for older adults and family caregivers.</p>
            <div className="flex items-center gap-1">
              <span>Made with care for healthy aging</span>
              <Heart className="w-3 h-3 text-rose-400 fill-rose-400 inline" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
