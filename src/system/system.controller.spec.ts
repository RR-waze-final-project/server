/* eslint-disable prettier/prettier */
iimport { Test, TestingModule } from '@nestjs/testing';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';

describe('SystemController', () => {
  let systemController: SystemController;
  let systemService: SystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemController],
      providers: [SystemService],
    }).compile();

    systemController = module.get<SystemController>(SystemController);
    systemService = module.get<SystemService>(SystemService);
  });

  describe('SystemService gets functionality', () => {
    // it('should get array of systems', async () => {
    //   const result = ['test'];
    //   try {
    //     jest
    //       .spyOn(systemService, 'getSystems')
    //       .mockImplementation(() => result);
    //     expect(await systemController.getAll()).toBe(result);
    //   } catch (err) {}
    // });
> {
    expect(systemController).toBeDefined();
  });
});
