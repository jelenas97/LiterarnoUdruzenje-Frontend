export class User{
    id: any;
    username!: string;
    password!: string;
    email!: string;
    firstName!: string;
    lastName!: string;
    city!: string;
    state!: string;
    genres!: string[];
    betaReader!: boolean;
    roles!: string[];

    constructor(){}
}