export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  accentColor: string;
  badge: string;
  keyOutcomes: string[];
  quote: string;
}

export interface ProgramItem {
  id: string;
  code: string;
  title: string;
  category: "Corporate Tour" | "Case Competition" | "Training Community" | "Open Knowledge" | "Pro-Bono Advisory";
  shortDesc: string;
  fullDesc: string;
  audience: string;
  timeline: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  partners: string[];
  ctaText: string;
}

export type ResearchStream =
  | "Climate Change"
  | "Circular Economy"
  | "Purpose-Led Company"
  | "Inclusive Products"
  | "Inclusive Jobs";

export interface InsightItem {
  id: string;
  title: string;
  category: ResearchStream;
  curriculumType: "Strategic Presentation (SP)" | "Expertise Network Project (ENP)";
  readTime: string;
  date: string;
  authors: string;
  abstract: string;
  keyTakeaways: string[];
  featured?: boolean;
}

export interface PartnershipInquiry {
  companyName: string;
  contactPerson: string;
  email: string;
  partnershipType: string;
  timeline: string;
  message: string;
}
