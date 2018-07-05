import moxios from 'moxios';
import axios from 'axios';

import { POST, GET } from './index';

describe('HTTP utils', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('should call a GET on the provided api', (done) => {
    moxios.stubRequest('/url', {
      status: 200,
      response: { data: '' },
    });
    const getSpy = jest.spyOn(axios, 'get');
    GET('/url');
    expect(getSpy).toHaveBeenCalled();
    done();
  });
  it('should call a POST on the provided api', (done) => {
    moxios.stubRequest('/url', {
      status: 200,
      response: { data: '' },
    });
    const postSpy = jest.spyOn(axios, 'post');
    POST('/url');
    expect(postSpy).toHaveBeenCalled();
    done();
  });
});
