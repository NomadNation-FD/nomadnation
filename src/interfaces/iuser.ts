interface IUser {
    _id?: string;
    name: string;
    email: string;
    password?: string;
    profilePic?: string | File;
}

export default IUser;