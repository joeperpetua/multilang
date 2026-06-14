export interface Language {
    name: string;
    code: string;
}

export interface TranslationResponse {
    translations: { target: string; result: string }[];
    message?: string;
}

export interface DictionaryResponse {
    definitions: { target: string; result: string[] }[];
    message?: string;
}
