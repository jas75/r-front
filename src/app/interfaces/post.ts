export interface PostResponse {
    success: boolean;
    msg?: string;
    post: Post;
}

export interface Post {
    _id: string;
    userid: string;
    community: string;
    content: string;
    title: string;
}
