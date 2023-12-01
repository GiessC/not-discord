import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { isString } from 'lodash';
import APIResponseType from '../APIResponseType';

const TENOR_API_URL = 'https://tenor.googleapis.com/v2';
const DEFAULT_LOCALE = 'en_US';
const VALID_CONTENT_FILTERS = new Set<string>(['off', 'low', 'medium', 'high']);
const DEFAULT_CONTENT_FILTER = 'low';
const SEARCH_LIMIT = 20;
const MEDIA_FILTER = 'gif';

export const TenorSearch = async (req: Request, res: Response) => {
    // TODO: Add pos using next from response
    if (!process.env.TENOR_API_KEY) {
        const response: APIResponseType<undefined> = {
            status: 500,
            message: 'Internal server error: Tenor API key is missing',
        };
        return res.status(500).send(response);
    }
    if (!req.query?.query || !isString(req.query.query)) {
        const response: APIResponseType<undefined> = {
            status: 400,
            message:
                'Bad request: query is required and must be a non-empty string',
        };
        return res.status(400).send(response);
    }
    if (Boolean(req.query?.locale) && !isString(req.query?.locale)) {
        const response: APIResponseType<undefined> = {
            status: 400,
            message: 'Bad request: locale must be a string',
        };
        return res.status(400).send(response);
    }
    if (
        Boolean(req.query?.contentFilter) &&
        (!isString(req.query.contentFilter) ||
            !VALID_CONTENT_FILTERS.has(req.query.contentFilter))
    ) {
        const response: APIResponseType<undefined> = {
            status: 400,
            message: `Bad request: contentFilter must be one of the following values: ${Array.from(
                VALID_CONTENT_FILTERS,
            ).join(', ')}`,
        };
        return res.status(400).send(response);
    }
    const searchQuery: string = req.query.query;
    const locale: string = (req.query?.locale as string) || DEFAULT_LOCALE;
    const contentFilter: string =
        (req.query?.contentFilter as string) || DEFAULT_CONTENT_FILTER;

    const tenorResponse: AxiosResponse = await axios.get(
        `${TENOR_API_URL}/search?key=${process.env.TENOR_API_KEY}&q=${searchQuery}&locale=${locale}&contentfilter=${contentFilter}&limit=${SEARCH_LIMIT}&media_filter=${MEDIA_FILTER}`,
    );
    console.debug(tenorResponse.data);

    const response: APIResponseType<unknown> = {
        status: 200,
        data: tenorResponse.data,
    };
    return res.send(response);
};
