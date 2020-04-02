import { Utils } from 'simple-api-ts';
import dBHandler from '../../source/database/dBHandler';
test('create, populate and drop database', async (done) => {
  try {
    await Utils.init(dBHandler.getReadPool());
    await Utils.populate(dBHandler.getReadPool());
    await Utils.dropTables(dBHandler.getReadPool());
  } catch (error) {
    await Utils.end(dBHandler.getReadPool());
    expect(error).toBe(null);
    done();
  }
  await Utils.end(dBHandler.getReadPool());
  done();
});
