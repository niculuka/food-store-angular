import { Role } from "../enums/food.enum";

export class User {
  userId: number | undefined;
  username: string = "";
  password: string = "";
  name: string = "";
  email: string = "";
  phone: string = "";
  address: string = "";
  createTime: Date = new Date();

  enabled: boolean = false;

  oldPassword: string = "";
  newPassword: string = "";

  token: string = "";
  role: Role = Role.USER;
  
}
