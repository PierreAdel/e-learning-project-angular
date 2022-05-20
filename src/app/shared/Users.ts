export type UserObj = {
    email: string,
    name: string,
    password: string

}
export class User {

    constructor(public name: string, public email: string, public password: string,) {
    }
    getUserObj(): UserObj {
        return  {email: this.email,  name: this.name, password: this.password }
    }
}