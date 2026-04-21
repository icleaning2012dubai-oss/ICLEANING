export interface ServiceData {
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  // All cleaning-related services removed as requested
};
