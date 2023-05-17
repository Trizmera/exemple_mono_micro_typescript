"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
// UserService.ts
const User_1 = require("./User");
class UserService {
    constructor() {
        this.users = [];
    }
    generateId() {
        return Math.random().toString(36).substring(2, 9);
    }
    createUser(name) {
        const id = this.generateId();
        const user = new User_1.User(id, name);
        this.users.push(user);
        return user;
    }
}
exports.UserService = UserService;
