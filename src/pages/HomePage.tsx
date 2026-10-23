import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { BenefitMosaic } from '../components/home/BenefitMosaic';
import { StatsBand } from '../components/home/StatsBand';
import { StepsShowcase } from '../components/home/StepsShowcase';
import { MissionSection } from '../components/home/MissionSection';
import { CtaBanner } from '../components/home/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col gap-20 sm:gap-28 pb-4">
      <div className="flex flex-col gap-6">
        <HeroSection />
        <StatsBand />
      </div>
      <BenefitMosaic />
      <StepsShowcase />
      <MissionSection />
      <CtaBanner />
    </main>
  );
};
