import { Injectable } from "@nestjs/common";

const users = [
  {
    id: 1,
    username: "user1@user.com",
    password: "$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K", //123456
  },
  {
    id: 2,
    username: "user2@user.com",
    password: "$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K",
  },
  {
    id: 3,
    username: "user3@user.com",
    password: "$2b$10$EecWnvyBtN4ttSJWILAjs.lnOfVejB7ABCxWGLS0OUCEcbcnwTu5K",
  },
];

@Injectable()
export class AuthService {
  login(username, password) {
    console.log(username, password)
  }
}
