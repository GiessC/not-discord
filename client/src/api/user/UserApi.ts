import axios, { AxiosResponse } from 'axios';
import { isArray, isString } from 'lodash';

export default class UserApi {
    private static instance: UserApi;

    public async getFavoriteGIFs(): Promise<Set<string>> {
        try {
            const response: AxiosResponse<unknown> = await axios.get(
                `${process.env.REACT_APP_API_URL}/user/gifs/favorites?testing=${
                    process.env.REACT_APP_TESTING || 'false'
                }`,
            );
            console.debug(response.data);
            if (
                isArray(response.data) &&
                (response.data.length === 0 || isString(response.data[0]))
            ) {
                return new Set<string>(response.data);
            }
            throw new Error(
                `Invalid response from server: expected data to be string array, got ${typeof response.data}`,
            );
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            return new Set<string>();
        }
    }

    public async favoriteGIF(gifId: string): Promise<void> {
        const response: AxiosResponse<{ message: string }> = await axios.post(
            `${
                process.env.REACT_APP_API_URL
            }/user/gifs/favorite/${gifId}?testing=${
                process.env.REACT_APP_TESTING || 'false'
            }`,
        );
        if (response.status !== 200) {
            throw new Error(response.data?.message);
        }
    }

    public static getInstance() {
        if (!UserApi.instance) {
            UserApi.instance = new UserApi();
        }
        return UserApi.instance;
    }
}
