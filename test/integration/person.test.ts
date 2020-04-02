import { Utils } from 'simple-api-ts';
import dBHandler from '../../source/database/dBHandler';
import { testService } from '../../source/service/service';

test('store person, update, select all, select by id person and delete it', async (done) => {
  try {
    // Inicializa o banco de dados
    await Utils.init(dBHandler.getReadPool());
    const createdPerson = await testService.store({});
    const expectedPerson = {
      id: createdPerson.id,
    };
    expect(createdPerson).toStrictEqual(expectedPerson);
  } catch (error) {
    console.error(error);
    await Utils.end(dBHandler.getReadPool());
    expect(error).toBe(null);
    done();
  }
  await Utils.end(dBHandler.getReadPool());
  done();
});
