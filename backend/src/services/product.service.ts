// Product service stub
export async function saveProductWithQuestions(payload: any) {
  // TODO: Implement DB logic
  return 1; // stub productId
}

export async function saveReport(productId: number, pdfPath: string) {
  // TODO: Implement DB logic
}

export async function getProductById(id: string) {
  // TODO: Implement DB logic
  return { product: {}, questions: [] };
}

export async function getReportByProductId(id: string) {
  // TODO: Implement DB logic
  return null;
}
