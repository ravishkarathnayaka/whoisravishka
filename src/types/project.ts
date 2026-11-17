export type ProjectCategory = 'cybersecurity' | 'devops' | 'mlops' | 'fullstack' | 'media';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: string;
  github?: string;
  live?: string;
  highlights: string[];
}
