
import { ReactElement } from "react";

export interface SubjectCardProps {
  id: string;
  title: string;
  description: string;
  icon: ReactElement;
  color: string;
  textColor: string;
  ringColor: string;
  features: string[];
}
