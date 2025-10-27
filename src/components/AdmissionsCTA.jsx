import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function AdmissionsCTA() {
  return (
    <section id="admissions" className="relative w-full bg-gray-900 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <Calendar className="h-3.5 w-3.5" /> Fall 2025 Admissions
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                Applications are open. Scholarships available.
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-white/80">
                Submit your application in under 20 minutes. No standardized test required.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-white/90"
              >
                Start Application <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Book a Campus Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
