import { Injectable } from '@nestjs/common';
import { Item } from '../../types/Item';
import { Itens } from '../../utils/models/Item';

@Injectable()
export class ItemService {
  async getItem(id: number): Promise<Item> {
    let retornoItem: Item;
    try {
      const item = (await Itens.findByPk(id)).toJSON();
      return new Item(item.nomeItem, item.preco);
    } catch (error) {
      return retornoItem;
    }
  }

  async criaItem(novoItem: Item): Promise<boolean> {
    try {
      const itemNovo = await Itens.create({
        nomeItem: novoItem.getNomeItem(),
        preco: novoItem.getPreco(),
      });
      return itemNovo ? true : false;
    } catch (error) {
      return false;
    }
  }

  async removeItem(id: number): Promise<boolean> {
    try {
      const item = await Itens.findByPk(id);
      item.destroy();
      return true;
    } catch (error) {
      return false;
    }
  }

  async getAll(): Promise<object> {
    try {
      const itens = await Itens.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });
      return itens;
    } catch (error) {
      return {};
    }
  }
}
