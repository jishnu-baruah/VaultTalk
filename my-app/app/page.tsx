'use client' // Use this if you are using client-side components in Next.js

import VaultTalkDemo from './pages/vaultTalkDemo';
import VaultTalkLanding from './pages/vaultTalkLanding';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* VaultTalkLanding Component */}
      <VaultTalkLanding />

      {/* VaultTalkDemo Component */}
      <VaultTalkDemo />
    </div>
  );
}