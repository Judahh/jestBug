import { BaseService, ServiceModel, ServiceSimpleModel } from 'simple-api-ts';

export default class TestService extends BaseService {
  protected element = 'tests';

  public async selectElementById(id: string): Promise<ServiceModel> {
    return { id };
  }

  public async selectElementBySimpleModel(
    content: ServiceSimpleModel
  ): Promise<ServiceModel> {
    return { id: '', ...content };
  }

  public async selectAllElements(): Promise<Array<ServiceModel>> {
    return [];
  }

  public async storeElement(
    content: ServiceSimpleModel
  ): Promise<ServiceModel> {
    return { id: '', ...content };
  }

  public async updateElement(
    id: string,
    content: ServiceSimpleModel
  ): Promise<ServiceModel> {
    return { id: '', ...content };
  }

  public async deleteElement(id: string): Promise<boolean> {
    return id !== undefined;
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
