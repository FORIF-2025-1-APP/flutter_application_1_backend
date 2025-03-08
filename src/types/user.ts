export interface User {
  id: string;
  username: string;
  password: string;
}

export interface UserResponse {
  id: string;
  username: string;
  token?: string;
} 