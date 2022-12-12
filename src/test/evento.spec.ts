import { Test } from '@nestjs/testing';
import { EventoController } from '../controller/evento.controller';
import { EventoService } from '../services/evento.service';

describe('Evento Controller', () => {
  let eventoController: EventoController;
  let eventoService: EventoService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [EventoController],
      providers: [EventoService],
    }).compile();

    eventoService = moduleRef.get<EventoService>(EventoService);
    eventoController = moduleRef.get<EventoController>(EventoController);
  });

  describe('/eventos', () => {
    it('deve retornar um array de objetos', async () => {
      const result = [
        {
          id: 1,
          nomeEvento: 'Novo Evento',
          horario: '20:00',
          capacidadeMax: 200,
          tema: 'T1',
          dataEvento: '2022-12-21T00:00:00.000Z',
          palestrantes: [
            {
              id: 1,
              nomePalestrante: 'Jose',
              email: 'jose@gmail.com',
              cargo: 'Programador',
              instituicao: 'Google',
              eventoID: 1,
            },
          ],
          subscriptions: [
            {
              id: 1,
              nomePessoa: 'Drew',
              email: 'dr@gmail.com',
              eventoID: 1,
            },
          ],
        },
      ];
      jest
        .spyOn(eventoService, 'getAll')
        .mockImplementation(async () => result);

      expect(await eventoController.getAll()).toBe(result);
    });
  });
  describe('/eventos/filter/1', () => {
    it('Espera-se retornar um objeto com dados do evento e id igual a 1', async () => {
      const result = {
        id: 1,
        nomeEvento: 'Novo Evento',
        horario: '20:00',
        capacidadeMax: 200,
        tema: 'T1',
        dataEvento: '2022-12-21T00:00:00.000Z',
        palestrantes: [
          {
            id: 1,
            nomePalestrante: 'Jose',
            email: 'jose@gmail.com',
            cargo: 'Programador',
            instituicao: 'Google',
            eventoID: 1,
          },
        ],
        subscriptions: [
          {
            id: 1,
            nomePessoa: 'Drew',
            email: 'dr@gmail.com',
            eventoID: 1,
          },
        ],
      };
      jest
        .spyOn(eventoService, 'getEvento')
        .mockImplementation(async () => result);

      expect(await eventoController.getOne(1)).toBe(result);
    });
  });
  describe('/eventos/new', () => {
    it('Espera-se retornar um objeto', async () => {
      const result = { Message: 'Criado com sucesso' };
      jest
        .spyOn(eventoService, 'getEvento')
        .mockImplementation(async () => result);

      expect(
        await eventoController.registra({
          nomeEvento: 'Nome do evento',
          horario: '18:00 - 21:00',
          capacidade: 200,
          tema: 'IoT',
          data: '2022-08-14',
        }),
      ).toStrictEqual(result);
    });
  });
  describe('/eventos/remove', () => {
    it('Espera-se receber um objeto com a mensagem dizendo se conseguiu excluir ou não', async () => {
      const result = { Message: 'Falha ao excluir!' };
      jest
        .spyOn(eventoService, 'getEvento')
        .mockImplementation(async () => result);

      expect(await eventoController.exclui({ id: 1 })).toStrictEqual(result);
    });
  });
});
