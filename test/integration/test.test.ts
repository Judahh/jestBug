import { Utils } from 'simple-api-ts';
import dBHandler from '../../source/database/dBHandler';
import TestService from '../../source/service/testService';
import TestDAO from '../../source/dAO/testDAO';

const testService = new TestService(
  dBHandler.getEventHandler(),
  new TestDAO(dBHandler.getReadPool())
);

test('store person, update, select all, select by id person and delete it', async (done) => {
  try {
    // Inicializa o banco de dados
    await Utils.init(dBHandler.getReadPool());
    const createdPerson = await testService.store({});
    const expectedPerson = {
      id: createdPerson.id,
    };
    expect(createdPerson).toStrictEqual(expectedPerson);
    const all = await testService.selectAll();

    expect(all).toStrictEqual([expectedPerson]);
  } catch (error) {
    console.error(error);
    await Utils.end(dBHandler.getReadPool());
    expect(error).toBe(null);
    done();
  }
  await Utils.end(dBHandler.getReadPool());
  done();
});
