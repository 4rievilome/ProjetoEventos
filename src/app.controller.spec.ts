import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  EventoController,
  ItemController,
  PalestranteController,
  SubController,
} from './controller/controllers';

import {
  EventoService,
  ItemService,
  PalestranteService,
  SubService,
} from './services/services';

describe('Teste de rotas', () => {
  let appController: AppController;
  let eventoController: EventoController;
  let itemController: ItemController;
  let palestranteController: PalestranteController;
  let subController: SubController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
  ('');
  describe('root', () => {
    it('Retorno Esperado: "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
