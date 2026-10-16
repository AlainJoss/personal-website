export type Project = {
  title: string;
  description: string;
  detail: string;
  tags: string[];
  href: string;
  linkLabel: string;
};

export const projects: Project[] = [
  {
    title: 'Food web resilience',
    description: 'How does species loss ripple through an ecosystem?',
    detail: 'A node-removal algorithm and simulations exploring how species and habitat loss disrupt regional food webs. Co-authored research published in Communications Biology.',
    tags: ['graph algorithms', 'simulation'],
    href: 'https://www.nature.com/articles/s42003-025-08396-y',
    linkLabel: 'Read the paper',
  },
  {
    title: 'Guided weather generation',
    description: 'Guiding weather models toward extreme scenarios.',
    detail: 'Guidance methods for flow-matching-based generative weather models. Developed and evaluated for my master’s thesis “Guided Flow Matching for Extreme Weather Scenarios”.',
    tags: ['flow matching', 'machine learning'],
    href: 'https://github.com/AlainJoss/guiding-generative-probabilistic-weather-models',
    linkLabel: 'Explore the research',
  },
];

// Add the forecasting project's content and URL here when it is ready.
export const forecasting: Project | null = null;
