export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link: string;
};

export type Skill = {
  name: string;
  level: number;
  category: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};