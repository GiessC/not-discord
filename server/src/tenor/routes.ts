import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { isString } from 'lodash';
import APIErrorResponse from '../APIResponseType';
import GifSearchApi from './GifDataType';

const TENOR_API_URL = 'https://tenor.googleapis.com/v2';
const DEFAULT_LOCALE = 'en_US';
const VALID_CONTENT_FILTERS = new Set<string>(['off', 'low', 'medium', 'high']);
const DEFAULT_CONTENT_FILTER = 'off';
const SEARCH_LIMIT = 20;
const MEDIA_FILTER = 'gif, tinygif';

export const TenorSearch = async (req: Request, res: Response) => {
    if (!process.env.TENOR_API_KEY) {
        const response: APIErrorResponse<GifSearchApi> = {
            status: 500,
            message: 'Internal server error: Tenor API key is missing',
        };
        return res.status(500).send(response);
    }
    if (!req.query?.searchQuery || !isString(req.query.searchQuery)) {
        const response: APIErrorResponse<GifSearchApi> = {
            status: 400,
            message:
                'Bad request: searchQuery is required and must be a non-empty string',
        };
        return res.status(400).send(response);
    }
    if (Boolean(req.query?.locale) && !isString(req.query?.locale)) {
        const response: APIErrorResponse<GifSearchApi> = {
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
        const response: APIErrorResponse<GifSearchApi> = {
            status: 400,
            message: `Bad request: contentFilter must be one of the following values: ${Array.from(
                VALID_CONTENT_FILTERS,
            ).join(', ')}`,
        };
        return res.status(400).send(response);
    }
    if (Boolean(req.query?.position) && !isString(req.query.pos)) {
        const response: APIErrorResponse<GifSearchApi> = {
            status: 400,
            message: 'Bad request: position must be a string',
        };
        return res.status(400).send(response);
    }
    const searchQuery: string = req.query.searchQuery;
    const locale: string = (req.query?.locale as string) || DEFAULT_LOCALE;
    const contentFilter: string =
        (req.query?.contentFilter as string) || DEFAULT_CONTENT_FILTER;
    const position: string = (req.query?.position as string) || '';

    const tenorResponse: AxiosResponse = await axios.get(
        `${TENOR_API_URL}/search?key=${process.env.TENOR_API_KEY}&q=${searchQuery}&locale=${locale}&contentfilter=${contentFilter}&limit=${SEARCH_LIMIT}&media_filter=${MEDIA_FILTER}&pos=${position}`,
    );
    console.debug(tenorResponse.data);
    return res.send(tenorResponse.data);
};
