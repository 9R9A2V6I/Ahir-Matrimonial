
export interface UserData {
  name: string;
  email: string;
  password: string;
  mobile: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
  error?: string;
}
