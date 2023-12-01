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

export interface EducationProps {
  title: string;
  institute: string;
  passingYear: string;
  gpa: string;
}

export interface CompetitiveProgramingCardProps {
  name: string;
  topRating: string;
  participationInContest: string;
  totalSolve: string;
  link: string;
}
