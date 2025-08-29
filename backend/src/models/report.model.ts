// Report model TypeScript interface
export interface Report {
  id?: number;
  product_id: number;
  pdf_path: string;
  generated_at?: Date;
}
