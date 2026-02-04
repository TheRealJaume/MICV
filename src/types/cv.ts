export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export type Project = {
  name: string;
  period?: string;
  description: string;
  highlights: string[];
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  notes?: string;
};

export type LanguageItem = {
  name: string;
  level: string;
  flag?: string;
};

export type Skills = {
  technical: string[];
  product: string[];
};
