import { Controller, Get, Post } from '@nestjs/common';
import { Palestrante } from 'types/Palestrante';
import { PalestranteService } from '../services/palestrante.service';

@Controller()
export class PalestranteController {
  constructor(private readonly palestranteService: PalestranteService) {}

  @Get()
  async getPalestrante(id: number): Promise<Palestrante> {
    return await this.palestranteService.getPalestrante(id);
  }

  @Post()
  async registraPalestrante(novoPalestrante: Palestrante): Promise<boolean> {
    return await this.palestranteService.registraPalestrante(novoPalestrante);
  }

  @Post()
  async excluiPalestrante(id: number): Promise<boolean> {
    return await this.excluiPalestrante(id);
  }
}
