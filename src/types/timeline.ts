export interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'work' | 'education';
  description: string;
  tags: string[];
  logo?: string;
  achievement?: string;
}
