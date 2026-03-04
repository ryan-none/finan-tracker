export interface User {
  id: string;
  email: string;
  password: string;
  created_at: Date;
}

export interface UserSafe {
  id: string;
  email: string;
  created_at: Date;
}
