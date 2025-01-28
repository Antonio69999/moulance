import { JWTPayload } from "jose";

export interface User {
  id: string;
  username: string;
  password: string;
}

export interface SessionPayload extends JWTPayload {
  user: {
    id: string;
    username?: string;
  };
  expires?: number;
}
