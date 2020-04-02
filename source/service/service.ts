import dBHandler from '../database/dBHandler';
import TestService from './testService';

const testService = new TestService(dBHandler.getEventHandler());
export { testService };
