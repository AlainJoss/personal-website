export type Project = {
  section: 'research' | 'products';
  title: string;
  description: string;
  detail: string;
  tags: string[];
  href?: string;
  linkLabel: string;
};

export const projects: Project[] = [
  {
    section: 'research',
    title: 'Guided weather generation',
    description: 'Guiding generative weather models towards prescribed scenarios.',
    detail: 'Developed methods for specifying extreme weather scenarios and guiding model generation with low computational overhead. Evaluated generation settings in my master’s thesis.',
    tags: ['flow matching', 'machine learning'],
    href: 'https://github.com/AlainJoss/guiding-generative-probabilistic-weather-models',
    linkLabel: 'Explore my master’s thesis',
  },
  {
    section: 'research',
    title: 'Food web resilience',
    description: 'Understanding how species loss disrupts ecological networks.',
    detail: 'Developed a node-removal algorithm and simulations to assess food-web robustness under species and habitat loss. Contributed to research published in Communications Biology.',
    tags: ['graph algorithms', 'simulation'],
    href: 'https://www.nature.com/articles/s42003-025-08396-y',
    linkLabel: 'Read the paper',
  },
  {
    section: 'products',
    title: 'numerino',
    description: 'A workspace for understanding and organizing personal finances.',
    detail: 'Transaction classification, cash flow and balance tracking, document management, and preparation of Swiss tax declarations.',
    tags: ['personal finance', 'agents'],
    linkLabel: 'In development',
  },
  {
    section: 'products',
    title: 'tabulino',
    description: 'A platform for automating workflows for tabular datasets.',
    detail: 'From data analysis to machine learning modeling and data pipelines.',
    tags: ['reproducible science', 'agents'],
    linkLabel: 'Next in queue',
  },
];

// Add the forecasting project's content and URL here when it is ready.
export const forecasting: Project | null = null;
