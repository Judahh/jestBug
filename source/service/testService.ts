import { BaseService, ServiceModel, ServiceSimpleModel } from 'simple-api-ts';
import { testDAO } from '../dAO/dAO';
export default class TestService extends BaseService {
  protected element = 'tests';

  public async selectElementById(id: string): Promise<ServiceModel> {
    return testDAO.selectById(id);
  }

  public async selectAllElements(): Promise<Array<ServiceModel>> {
    return testDAO.selectAll();
  }

  public async storeElement(
    content: ServiceSimpleModel
  ): Promise<ServiceModel> {
    return testDAO.store(content);
  }

  public async updateElement(
    id: string,
    content: ServiceSimpleModel
  ): Promise<ServiceModel> {
    return testDAO.update(id, content);
  }

  public async deleteElement(id: string): Promise<boolean> {
    return testDAO.delete(id);
  }

  public selectById(id: string): Promise<ServiceModel> {
    return super.selectById(id) as Promise<ServiceModel>;
  }

  public selectAll(): Promise<Array<ServiceModel>> {
    return super.selectAll() as Promise<Array<ServiceModel>>;
  }

  public store(content: ServiceSimpleModel): Promise<ServiceModel> {
    return super.store(content) as Promise<ServiceModel>;
  }

  public update(
    id: string,
    content: ServiceSimpleModel
  ): Promise<ServiceModel> {
    return super.update(id, content) as Promise<ServiceModel>;
  }
}
