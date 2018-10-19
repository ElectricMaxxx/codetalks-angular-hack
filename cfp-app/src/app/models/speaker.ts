export interface Speaker {
    id: number;
    name: string;
    email: string;
    image?: string;
    company?: string;
    bio: string;
    socialMedia?: SocialMedia;
}

export interface SocialMedia {
    twitter?: string;
    github?: string;
    linkedIn?: string;
    joind?: string;
    web?: string;
    linkedin?: string;
    slides?: string;
    youtube?: string;
}
