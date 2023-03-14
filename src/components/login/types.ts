export interface loginTypes {
    username: string;
    password: string;
}

export interface user {
    user: loginTypes,
    isSuccess: boolean
}
