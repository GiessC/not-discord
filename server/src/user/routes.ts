import { Request, Response } from 'express';
import APIErrorResponse from '../APIResponseType';

export const FavoriteGifs = async (req: Request, res: Response) => {
    if (req.query.testing === 'true') {
        const favorites: string[] = ['13906564281384227237'];
        return res.status(200).send(favorites);
    }

    const response: APIErrorResponse<null> = {
        status: 501,
        message: 'Not implemented',
    };
    return res.status(501).send(response);
};

export const FavoriteGif = async (req: Request, res: Response) => {
    if (req.query.testing === 'true') {
        const gifId = req.params.gifId;

        return res.status(200).send();
    }

    const response: APIErrorResponse<null> = {
        status: 501,
        message: 'Not implemented',
    };
    return res.status(501).send(response);
};
