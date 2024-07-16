import { Test, TestingModule } from '@nestjs/testing';
import { NoSpecController } from './no--spec.controller';

describe('NoSpecController', () => {
  let controller: NoSpecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoSpecController],
    }).compile();

    controller = module.get<NoSpecController>(NoSpecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
