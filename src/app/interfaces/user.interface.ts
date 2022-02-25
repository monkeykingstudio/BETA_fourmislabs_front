export interface User {
  _id?: string;
  creationDate: Date;
  pseudo: string;
  email: string;
  password: string;
  roles: string;
  newsletter?: boolean;
  lastLogin?: Date;
  isConnected?: boolean;
}
