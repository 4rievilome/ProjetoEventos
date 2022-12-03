import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
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
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [EventoController, ItemController, PalestranteController],
  providers: [EventoService, ItemService, PalestranteService],
})
export class AppModule {}
