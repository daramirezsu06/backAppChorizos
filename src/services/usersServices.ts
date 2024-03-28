import { ICredentialUserDTO, IUserDTO } from "../utils/userInterfaces";
import { arrayUsers, credentialsUsers } from "../utils/arrayUsers";
export const createUserService = async (userandCredentials: IUserDTO & ICredentialUserDTO) => {
    const { name, birthdate, role, cedula, userName, password } = userandCredentials;
    const id = arrayUsers.length + 1

    const credentialsId = credentialsUsers.length + 1
    
    await arrayUsers.push({
        id,
        name,
        birthdate,
        role,
        creationDate: String(new Date()),
        cedula,
        credentialsId: credentialsId
    })

    await credentialsUsers.push({
        id: credentialsId,
        userName,
        password
    })



    


  return {arrayUsers, credentialsUsers};
};
