import axios, { AxiosError } from 'axios';

export default class TenorApi {
    private static _instance: TenorApi;

    public async search(
        searchQuery: string,
        locale?: string,
        contentFilter?: string,
        position?: string,
    ) {
        try {
            const response = await axios.get(
                `http://localhost:5000/tenor/search?searchQuery=${searchQuery}${
                    locale ? `&locale=${locale}` : ''
                }${contentFilter ? `&contentFilter=${contentFilter}` : ''}${
                    position ? `&position=${position}` : ''
                }`,
            );
            return response;
        } catch (error: unknown) {
            if (error instanceof AxiosError)
                console.error(error?.response?.data?.message);
            return null;
        }
    }

    public static getInstance(): TenorApi {
        if (!TenorApi._instance) {
            TenorApi._instance = new TenorApi();
        }
        return TenorApi._instance;
    }
}
