interface MediaFormat {
    url: string;
    duration: number;
    preview: string;
    dims: number[];
    size: number;
}

export interface Gif {
    id: string;
    title: string;
    media_formats: Map<string, MediaFormat>;
    created: number;
    content_description: string;
    itemurl: string;
    url: string;
    tags: string[];
    flags: string[];
    hasaudio: boolean;
}

export default interface GifSearchApi {
    results: Gif[];
    next: string;
}
