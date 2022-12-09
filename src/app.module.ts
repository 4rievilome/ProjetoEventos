import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
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
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    EventoController,
    ItemController,
    PalestranteController,
    SubController,
  ],
  providers: [
    AppService,
    EventoService,
    ItemService,
    PalestranteService,
    SubService,
  ],
})
export class AppModule {}
