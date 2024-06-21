// /* eslint-disable no-undef */
// /* eslint-disable no-useless-catch */
// import conf from "../conf/conf.js";
// import { Client, Account, ID, Databases } from "appwrite";

// export class AuthService {
//   client = new Client();
//   account;
//   users;

//   constructor() {
//     this.client
//       .setEndpoint(conf.appwriteUrl)
//       .setProject(conf.appwriteProjectId);
//     this.account = new Account(this.client);
//     this.users = new Databases(this.client);
//   }

//   async createAccount({ email, password, name }) {
//     try {
//       const userAccount = await this.account.create(
//         ID.unique(),
//         email,
//         password,
//         name
//       );
//       if (userAccount) {
//         // call another method
//         return this.login({ email, password });
//       } else {
//         return userAccount;
//       }
//     } catch (error) {
//       throw error;
//     }
//   }

//   async login({ email, password }) {
//     try {
//       return await this.account.createEmailPasswordSession(email, password);
//     } catch (error) {
//       throw error;
//     }
//   }

//   async getCurrentUser() {
//     try {
//       return await this.account.get();
//     } catch (error) {
//       console.log("Appwrite serive :: getCurrentUser :: error", error);
//     }

//     return null;
//   }

//   async logout() {
//     try {
//       await this.account.deleteSessions();
//     } catch (error) {
//       console.log("Appwrite serive :: logout :: error", error);
//     }
//   }
//   // async getUserId() {
//   //   const user = await this.getCurrentUser();
//   //   return user ? user.$id : null;
//   // }
//   // async getUserName(userId) {
//   //   // console.log(userId);
//   //   // const user = await this.users.get('6');
//   //   console.log(user);
//   //   // console.log(user.name);
//   //   // return user ? user.name: null;
//   // }
// }

// const authService = new AuthService();

// export default authService;

import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite Service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;
