import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/databricks', (req: Request, res: Response) => {
    // use services to make the API call to Databricks here

    const response = {
        status: 'success',
        message: 'Data fetched from Databricks API',
        data: {},
    };

    res.status(200).json(response);
});

router.post('/databricks', (req: Request, res: Response) => {
    // use services to make the API call to Databricks here

    const response = {
        status: 'success',
        message: 'Data sent to Databricks API',
        data: {},
    };

    res.status(200).json(response);
});

export { router as databricksRoutes };