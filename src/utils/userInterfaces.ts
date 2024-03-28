enum Roles {
  admin = "admin",
  user = "saler",
  salerManager = "salerManager",
}

export interface IUser {
  id: number;
  name: string;
  age: number;
  role: Roles;
  credentialsId: number;
}

export interface ICredentialUser {
  id: number;
  userName: string;
  password: string;
}

export interface IUserDTO {
  name: string;
  birthdate: string;
  cedula: string;
  role: Roles;
}

export interface ICredentialUserDTO {
  userName: string;
  password: string;
}

// export const arrayUsers = [
//   {
//     id: 1,
//     name: "david",
//     age: 25,
//     role: "admin",
//     credentialsId: 1,
//   },
// ];

// export const credentialsUsers = [
//   {
//     id: 1,
//     userName: "david01",
//     password: "12345",
//   },
// ];
