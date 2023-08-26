import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager, Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemsService {
  
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository:Repository<Item>,
    private readonly entityManager: EntityManager,
    ){}

  async create(createItemDto: CreateItemDto) {
    const item = new Item(createItemDto)
    return await this.entityManager.save(item)
  }

  async findAll() {
    return await this.itemRepository.find();
  }

  async findOne(id: number) {
    return await this.itemRepository.findOneBy({ id });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.itemRepository.findOneBy({ id });
    item.isActive = updateItemDto.isActive;
    return await this.entityManager.save(item);
  }

  async remove(id: number) {
    await this.itemRepository.delete(id);
  }
}
