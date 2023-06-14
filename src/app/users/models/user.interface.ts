import { Role } from "src/app/roles/models/role.interface";

export interface User {
  email: string;
  password: string;
  phoneNumber: string;
  firstname: string;
  lastname: string;
  role: Role
}