import { Module } from '@nestjs/common';
import {
  EventoController,
  ItemController,
  PalestranteController,
} from './controller/controllers';

import {
  EventoService,
  ItemService,
  PalestranteService,
} from './services/services';

@Module({
  imports: [],
  controllers: [EventoController, ItemController, PalestranteController],
  providers: [EventoService, ItemService, PalestranteService],
})
export class AppModule {}
