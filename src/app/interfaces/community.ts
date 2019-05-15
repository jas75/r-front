export interface CommunityResponse {
    success: boolean;
    community: Community;
}

export interface Community {
    _id: string;
    createdBy: string;
    createdAt: string;
    name: string;
    topic: string;
    summary: string;
}
