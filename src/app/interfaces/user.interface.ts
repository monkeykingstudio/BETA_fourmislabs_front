export interface User {
  _id?: string;
  creationDate: Date;
  username: string;
  email: string;
  password: string;
  roles: string;
  newsletter: boolean;
  isVerified: boolean;
  lastLogin?: Date;
  isConnected?: boolean;
}
