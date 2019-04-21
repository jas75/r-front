export interface UserResponse {
    success: boolean;
    user: User;
}

export interface User {
    _id: string;
    email: string;
    username: string;
}
