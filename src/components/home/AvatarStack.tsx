import React from 'react';

const AVATARS = [
  { src: '/images/hero-senior.png', position: 'object-[68%_30%]' },
  { src: '/images/member-portrait.png', position: 'object-[50%_25%]' },
  { src: '/images/caregiver.png', position: 'object-[40%_30%]' },
];

export const AvatarStack: React.FC<{ size?: 'sm' | 'md' }> = ({ size = 'sm' }) => {
  const dimension = size === 'md' ? 'h-11 w-11' : 'h-8 w-8';
  return (
    <div className="flex -space-x-2.5" aria-hidden="true">
      {AVATARS.map((avatar) => (
        <img
          key={avatar.src}
          src={avatar.src}
          alt=""
          className={`${dimension} rounded-full object-cover ${avatar.position} ring-2 ring-white`}
        />
      ))}
    </div>
  );
};
