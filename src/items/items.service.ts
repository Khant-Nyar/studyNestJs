import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager, Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Listing } from './entities/listing.entity';

@Injectable()
export class ItemsService {
  
  constructor(
    private readonly entityManager: EntityManager,
    @InjectRepository(Item)
    private readonly itemRepository:Repository<Item>,
    ){}

  async create(createItemDto: CreateItemDto) {
    const listing = new Listing({
      ...createItemDto.listing,
      rating: 0,
    });
    const item = new Item({
      ...createItemDto,
      listing,
    });
    return await this.entityManager.save(item);
  }

  async findAll() {
    return await this.itemRepository.find();
  }

  async findOne(id: number) {
    return await this.itemRepository.findOne({ 
      where: { id },
      relations: { listing: true },
    });
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
