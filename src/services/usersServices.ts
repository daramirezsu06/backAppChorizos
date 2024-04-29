import { ICredentialUserDTO, IUserDTO } from "../utils/userInterfaces";
import { arrayUsers, credentialsUsers } from "../utils/arrayUsers";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/Users";
import { Credential } from "../entities/Credentials";

const userModel = AppDataSource.getRepository(User);
const credentialModel = AppDataSource.getRepository(Credential);

export const createUserService = async (
  userandCredentials: IUserDTO & ICredentialUserDTO
) => {
  const { name, birthdate, role, cedula, userName, password } =
    userandCredentials;
  const user = await userModel.create({ name, birthdate, role, cedula });
  const credentials = await credentialModel.create({ userName, password });

  const userResult = await userModel.save(user);
  const credentialsResult = await credentialModel.save(credentials);

  user.credentials = credentials;
  await userModel.save(user);
  return { userResult, credentialsResult };
};

export const getUsersService = async () => {
  const users = await userModel.find({
    relations: {
      credentials: true,
    },
  });
  return users;
};
//  const id = arrayUsers.length + 1;

//  const credentialsId = credentialsUsers.length + 1;

//  await arrayUsers.push({
//    id,
//    name,
//    birthdate,
//    role,
//    creationDate: String(new Date()),
//    cedula,
//    credentialsId: credentialsId,
//  });

//  await credentialsUsers.push({
//    id: credentialsId,
//    userName,
//    password,
//  });

//  return { arrayUsers, credentialsUsers };
