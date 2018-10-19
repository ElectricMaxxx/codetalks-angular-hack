
export interface Talk {
    id: number;
    speaker_id: number;
    co_speaker_id?: number;
    name: string;
    abstract: string;
    accepted: boolean;
    timeSlot?: string;
    other: string;
    category: string;
    level: string;
    votes: number;
    links: {name: string, link: string}[];
}
