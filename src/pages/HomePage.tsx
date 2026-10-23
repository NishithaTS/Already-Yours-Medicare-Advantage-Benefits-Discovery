import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { BenefitMosaic } from '../components/home/BenefitMosaic';
import { StepsShowcase } from '../components/home/StepsShowcase';
import { MissionSection } from '../components/home/MissionSection';
import { CtaBanner } from '../components/home/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col gap-20 sm:gap-28 pb-4">
      <HeroSection />
      <BenefitMosaic />
      <StepsShowcase />
      <MissionSection />
      <CtaBanner />
    </main>
  );
};
