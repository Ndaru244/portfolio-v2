export interface ResumeOption {
  id: "uiux" | "software-engineer";
  label: string;
  url: string;
}

export interface Resume {
  options: ResumeOption[];
  updatedAt?: string;
}
