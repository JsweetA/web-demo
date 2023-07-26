import getApp from '../../common/index.js';

const app = getApp();

export default ({ mock, setup }) => {
  if (mock !== false) setup();
};

export const successResponseWrap = (data) => {
  return data;
};

export const failResponseWrap = (data, msg, code = 50000) => {
  return {
    data,
    status: 'fail',
    msg,
    code,
  };
};

export const installMock = (url, func) => {
  app.get(url, (req, res) => {
    const data = func(req?.query);
    res.json(data);
  });
}
