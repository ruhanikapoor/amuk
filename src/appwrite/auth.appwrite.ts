import config from "./config.appwrite";
import { Client, Account, ID } from "appwrite";
import { useUserStore } from "@/store/useStore";

const { login, logout } = useUserStore();
class AuthService {
    client: Client = new Client();
    account: Account | undefined;

    constructor (){
        this.client
            .setEndpoint(config.endPoint)
            .setProject(config.projectId);
        this.account = new Account(this.client);
    }

    // Signup
    async signUpUser(name: string, email: string, password: string) {
        try {
            const userAccount = await this.account?.create(ID.unique(), email, password, name);
            console.log("userAccount: ", userAccount);
            return userAccount;
        } catch (error) {
            console.log("Error during signup: ", error);
            throw error;
        }
    }

    // Signin
    async signInUser(email: string, password: string) {
        try {
            const userSession = await this.account?.createEmailPasswordSession(email, password);
            console.log("userSession: ", userSession);
            return userSession;
        } catch (error) {
            console.log("Error during signin: ", error);
            throw error;
        }
    }

    // Signout
    async signOutUser() {
        try {
            const userSession = await this.account?.deleteSessions();
            logout();
            return userSession;
        } catch (error) {
            console.log("Error during signout: ", error);
            throw error;
        }
    }

    // Get User
    async getUser() {
        try {
            const user = await this.account?.get();
            console.log("user: ", user);
            return user;
        } catch (error) {
            console.log("Error during get user: ", error);
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;

// Todo: change store values 