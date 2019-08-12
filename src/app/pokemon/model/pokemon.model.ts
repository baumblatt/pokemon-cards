export interface Pokemon {
    id: string;
    name: string;
    height?: number;
    weight?: number;
    thumbnail?: string;
    type?: string[];
    weakness?: string[];
}
