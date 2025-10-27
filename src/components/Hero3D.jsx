import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-screen w-full overflow-hidden bg-gray-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for contrast (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/30 to-gray-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-white/80 backdrop-blur">
          Modern Institute • Est. 1998
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Learn boldly. Build the future.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
          A forward‑thinking institute blending rigorous academics with hands‑on,
          industry projects. Explore programs in technology, design, and business.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#admissions"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-white/90"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#programs"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
