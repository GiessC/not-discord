import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';
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
    const dbclient = new DynamoDBClient({
        region: process.env.AWS_DEFAULT_REGION,
        endpoint: 'http://localhost:8000',
    });
    try {
        const results = await dbclient.send(new ListTablesCommand({}));
        results.TableNames.forEach((item) => {
            console.log(item);
        });
    } catch (error) {
        console.error(error);
    }

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
