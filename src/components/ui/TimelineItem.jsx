'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineItem = ({ title, period, icon, description, isLeft = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Icons for the timeline items
  const icons = {
    diploma: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    graduated: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    openBook: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    code: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  };

  return (
    <motion.li
      ref={ref}
      className={`mb-12 ${isLeft ? 'ml-6' : 'ml-6 md:ml-0 md:mr-6 md:text-right'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`absolute flex items-center justify-center w-12 h-12 rounded-full
        bg-secondary border-4 border-[var(--bg-primary)]
        ${isLeft ? '-left-6' : 'left-[-1.5rem] md:left-auto md:right-[-1.5rem]'}`} style={{ borderColor: 'var(--bg-primary)' }}
      >
        <span className="text-[var(--bg-primary)]" style={{ color: 'var(--primary)' }}>
          {icons[icon] || icons.code}
        </span>
      </div>
      <div className="p-4 md:p-6 bg-[var(--bg-secondary)] rounded-lg shadow-lg border-l-4 border-[var(--primary)]">
        <div className="flex flex-wrap items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-[var(--text-primary)]">{title}</h3>
          <time className="text-sm font-semibold px-3 py-1 rounded-full bg-[var(--primary)]/20 text-[var(--primary)]">
            {period}
          </time>
        </div>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.li>
  );
};

export default TimelineItem;