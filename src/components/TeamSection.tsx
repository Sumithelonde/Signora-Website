'use client';

import dynamic from 'next/dynamic';

const TeamGrid = dynamic(
  () => import('./TeamGrid').then(module => module.TeamGrid),
  {
    ssr: false,
    loading: () => (
      <div className="team-loader" role="status">
        <span>Preparing the illustrative character study</span>
      </div>
    ),
  },
);

export function TeamSection() {
  return <TeamGrid />;
}
