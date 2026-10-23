/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/ToastContainer';
import { HomePage } from './pages/HomePage';
import { UploadPage } from './pages/UploadPage';
import { ReviewPage } from './pages/ReviewPage';
import { PlanConfirmPage } from './pages/PlanConfirmPage';
import { BenefitsDashboardPage } from './pages/BenefitsDashboardPage';
import { BenefitDetailPage } from './pages/BenefitDetailPage';
import { SavedBenefitsPage } from './pages/SavedBenefitsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { HelpPage } from './pages/HelpPage';

// Scroll to top helper on route transition
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F5F5F7] text-[#16151D] antialiased">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/review" element={<ReviewPage />} />
              <Route path="/confirm-plan" element={<PlanConfirmPage />} />
              <Route path="/benefits" element={<BenefitsDashboardPage />} />
              <Route path="/benefits/:id" element={<BenefitDetailPage />} />
              <Route path="/saved" element={<SavedBenefitsPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
