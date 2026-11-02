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
    title: 'Guided weather generation',
    description: 'How to guide generative weather models towards prescribed weather scenarios?',
    detail: 'A method for designing extreme weather scenarios and guiding models with minimal computational overhead, alongside an analysis of optimal generation settings.',
    tags: ['flow matching', 'machine learning'],
    href: 'https://github.com/AlainJoss/guiding-generative-probabilistic-weather-models',
    linkLabel: 'Explore my master’s thesis',
  },
  {
    title: 'Food web resilience',
    description: 'How does species loss ripple through an ecosystem?',
    detail: 'A node-removal algorithm and simulations exploring how species and habitat loss disrupt regional food webs.',
    tags: ['graph algorithms', 'simulation'],
    href: 'https://www.nature.com/articles/s42003-025-08396-y',
    linkLabel: 'Read the paper',
  },
];

// Add the forecasting project's content and URL here when it is ready.
export const forecasting: Project | null = null;
