import express from 'express';
import cors from 'cors';

let app = null;

export default () => {
  if (app === null) {
    app = express();
    app.use(cors({
      origin: '*'
    }));
  }
  return app;
}
