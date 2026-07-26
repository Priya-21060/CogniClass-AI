import React from 'react';
import BrandHero from '../../components/common/BrandHero';
import AuthCard from '../../components/common/AuthCard';

/**
 * Split-Screen SaaS Login Page for CogniClass AI.
 * Combines modern Linear & Stripe aesthetic hero banner on the left with sleek auth form on the right.
 */
export function LoginPage() {
  const handleLoginSuccess = (data) => {
    console.log('Login successful:', data);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Left Side: Branding Hero & Abstract AI Background Visuals */}
      <div className="w-full lg:w-1/2 xl:w-7/12 min-h-[420px] lg:min-h-screen">
        <BrandHero />
      </div>

      {/* Right Side: Authentication Card & Form */}
      <div className="w-full lg:w-1/2 xl:w-5/12 flex items-center justify-center p-4 sm:p-8 lg:p-12 bg-slate-950/95 border-t lg:border-t-0 lg:border-l border-slate-800/60 relative">
        {/* Decorative background glow for right side */}
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Auth Card Component */}
        <AuthCard onLoginSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
}

export default LoginPage;
