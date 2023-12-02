interface MediaFormat {
    dims: number[];
    duration: number;
    preview: string;
    size: number;
    url: string;
}

export default interface Gif {
    content_description: string;
    created: number;
    flags: string[];
    hasaudio: boolean;
    id: string;
    itemurl: string;
    media_formats: { [key: string]: MediaFormat };
    tags: string[];
    title: string;
    url: string;
}
