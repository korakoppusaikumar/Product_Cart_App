// User model TypeScript interface
export interface User {
  id?: number;
  email: string;
  password_hash: string;
  company_id?: number;
}
