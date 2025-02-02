export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  implementation: string;
  tech: string[];
  images: {
    main: string;
    gallery: string[];
  };
  timeline: string;
  features: string[];
  achievements: string[];
  links: {
    github?: string;
    demo?: string;
    playStore?: string;
  };
}