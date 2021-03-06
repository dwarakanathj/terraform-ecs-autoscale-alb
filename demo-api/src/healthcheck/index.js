import { Router } from 'express';

export default () => {
  const api = Router();

  api.get('/ping', (req, res) => {
    res.sendStatus(200);
  });

  api.get('/healthcheck', (req, res) => {
    res.json({ message: 'All good' });
  });

  return api;
};
