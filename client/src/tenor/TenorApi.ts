export default class TenorApi {
    private static _instance: TenorApi;

    public async search(query: string): Promise<string[]> {}

    public static getInstance(): TenorApi {
        if (!TenorApi._instance) {
            TenorApi._instance = new TenorApi();
        }
        return TenorApi._instance;
    }
}
