import { Listing } from './listing.entity';
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true })
    isActive: boolean;

    @OneToOne(() => Listing, { cascade: true })
    @JoinColumn()
    listing: Listing;

    constructor(item: Partial<Item>) {
        Object.assign(this, item);
        // super();
        // Object.assign(this, param);
    }
}
