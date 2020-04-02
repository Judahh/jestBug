import TestDAO from './testDAO';
import dBHandler from '../database/dBHandler';

const testDAO = new TestDAO(dBHandler.getReadPool());
export { testDAO };
