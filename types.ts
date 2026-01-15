
export interface Milestone {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  isCurrent?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'Cloud' | 'Containerization' | 'CI/CD' | 'Monitoring' | 'Security' | 'Languages';
}

export interface Project {
  title: string;
  description: string[];
  tech: string[];
  github?: string;
}
