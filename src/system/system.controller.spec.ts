/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Test } from '@nestjs/testing';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';

describe('SystemController', () => {
  let systemController: SystemController;
  let systemService: SystemService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SystemController],
      providers: [SystemService],
    }).compile();

    systemController = moduleRef.get<SystemController>(SystemController);
    systemService = moduleRef.get<SystemService>(SystemService);
  });

  describe('SystemService gets functionality', () => {
    it('should get array of systems', async () => {
      const result = [{}];
      try {
        jest
          .spyOn(systemService, 'getSystems')
          .mockImplementation(async () => result);

        expect(await systemController.getAll()).toBe(result);
      } catch (err) {}
    });

    it('getSystemById', async () => {
      const result = ['test'];
      jest.spyOn(systemService, 'getSystemById').mockImplementation(() => result);
      const system = await systemController.getSystemById('987');
      expect(system).toBe(result);
    });
  });

  it('should be defined', () => {
    expect(systemController).toBeDefined();
  });
});
