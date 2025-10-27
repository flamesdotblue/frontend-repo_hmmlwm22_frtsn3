import React from 'react';
import Hero3D from './components/Hero3D';
import ProgramsGrid from './components/ProgramsGrid';
import FacultySpotlight from './components/FacultySpotlight';
import AdmissionsCTA from './components/AdmissionsCTA';

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/80 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-900 font-bold">MI</span>
            <span className="hidden text-sm font-semibold sm:inline">Modern Institute</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#faculty" className="hover:text-white">Faculty</a>
            <a href="#admissions" className="hover:text-white">Admissions</a>
          </nav>
          <a
            href="#admissions"
            className="ml-4 inline-flex items-center rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 hover:bg-white/90"
          >
            Apply
          </a>
        </div>
      </header>

      {/* Sections */}
      <Hero3D />
      <main>
        <ProgramsGrid />
        <section id="faculty">
          <FacultySpotlight />
        </section>
        <AdmissionsCTA />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-10 text-sm text-gray-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <p>© {new Date().getFullYear()} Modern Institute. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
