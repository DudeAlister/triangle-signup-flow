export class LoginModel {
    private userNameEmail: string;
    private password: string;

    public set setUserNameEmail(value: string) {
        this.userNameEmail = value;
    }
    public set setPassword(value: string) {
        this.password = value;
    }
    public get getUserNameEmail() {
        return this.userNameEmail;
    }
    public get getPassword() {
        return this.password;
    }

}