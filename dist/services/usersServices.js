"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersService = exports.createUserService = void 0;
const data_source_1 = require("../config/data-source");
const Users_1 = require("../entities/Users");
const Credentials_1 = require("../entities/Credentials");
const userModel = data_source_1.AppDataSource.getRepository(Users_1.User);
const credentialModel = data_source_1.AppDataSource.getRepository(Credentials_1.Credential);
const createUserService = (userandCredentials) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, birthdate, role, cedula, userName, password } = userandCredentials;
    const user = yield userModel.create({ name, birthdate, role, cedula });
    const credentials = yield credentialModel.create({ userName, password });
    const userResult = yield userModel.save(user);
    const credentialsResult = yield credentialModel.save(credentials);
    user.credentials = credentials;
    yield userModel.save(user);
    return { userResult, credentialsResult };
});
exports.createUserService = createUserService;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userModel.find({
        relations: {
            credentials: true,
        },
    });
    return users;
});
exports.getUsersService = getUsersService;
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
