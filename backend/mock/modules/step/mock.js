import Mock from 'mockjs';
import setupMock, { successResponseWrap, installMock } from '../setup-mock.js';

setupMock({
  setup() {
    // submit
    installMock(new RegExp('/api/channel-form/submit'), () => {
      return successResponseWrap('ok');
    });
  },
});
