import { Request, Response } from 'express';
import {
  BaseControllerStore,
  ServiceSimpleModel,
  ServiceModel,
} from 'simple-api-ts';
import { testService } from '../service/service';
class TestController extends BaseControllerStore {
  protected element = 'test';

  protected elements = 'tests';

  protected storeElement(content: ServiceSimpleModel): Promise<ServiceModel> {
    return testService.store(content);
  }
}

export default new TestController();
