import React from 'react';
import { BookOpen, Award, Users } from 'lucide-react';

const programs = [
  {
    title: 'Computer Science BSc',
    icon: BookOpen,
    desc:
      'Core CS fundamentals with modern tracks in AI, systems, and web engineering.',
    tag: 'Undergraduate',
  },
  {
    title: 'Interaction Design BA',
    icon: Users,
    desc:
      'Human‑centered design, prototyping, and research for delightful digital products.',
    tag: 'Undergraduate',
  },
  {
    title: 'Data Science MSc',
    icon: Award,
    desc:
      'Advanced machine learning, MLOps, and applied analytics with industry partners.',
    tag: 'Graduate',
  },
  {
    title: 'Cybersecurity PGD',
    icon: Award,
    desc:
      'Threat modeling, cloud security, and defense strategies for modern systems.',
    tag: 'Postgraduate',
  },
];

export default function ProgramsGrid() {
  return (
    <section id="programs" className="relative w-full bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Programs</h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              Flexible study paths designed with industry to prepare you for high‑impact careers.
            </p>
          </div>
          <a
            href="#admissions"
            className="hidden rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 md:inline-block"
          >
            Admissions
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {programs.map((p) => (
            <article
              key={p.title}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                  {p.tag}
                </span>
              </div>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-900">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{p.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-900">
                Learn more
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
