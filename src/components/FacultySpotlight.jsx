import React from 'react';

const faculty = [
  {
    name: 'Dr. Aisha Patel',
    title: 'AI & Machine Learning',
    blurb:
      'Leads research on responsible AI and applied deep learning for healthcare.',
    color: 'from-fuchsia-500 to-rose-500',
  },
  {
    name: 'Prof. Mateo García',
    title: 'Human‑Computer Interaction',
    blurb:
      'Designs interactive systems that are inclusive, playful, and accessible.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Dr. Evelyn Chen',
    title: 'Cybersecurity',
    blurb:
      'Focuses on cloud security, threat intelligence, and privacy‑preserving systems.',
    color: 'from-emerald-500 to-teal-500',
  },
];

function InitialsAvatar({ name, gradient }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
    >
      <span className="text-xl font-semibold">{initials}</span>
    </div>
  );
}

export default function FacultySpotlight() {
  return (
    <section className="relative w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Faculty Spotlight
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            Learn from researchers and practitioners pushing the boundaries of their fields.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faculty.map((f) => (
            <article
              key={f.name}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <InitialsAvatar name={f.name} gradient={f.color} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{f.name}</h3>
                  <p className="text-sm text-gray-600">{f.title}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-700">{f.blurb}</p>
              <div className="mt-5 text-sm font-medium text-gray-900">
                View profile →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
