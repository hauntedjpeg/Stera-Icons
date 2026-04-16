export interface VariantInfo {
  version: string;
  componentName: string;
  fileName: string;
}

export interface IconData {
  name: string;
  kebabName: string;
  componentName: string;
  tags: string[];
  weights: string[];
  supportsDuotone: boolean;
  variants: Record<string, VariantInfo>;
}
