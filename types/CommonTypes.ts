export type childrenProps = {
  children: React.ReactNode;
};

export interface ExperienceProps {
  title: string;
  location: string;
  description: string;
  date: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
}
