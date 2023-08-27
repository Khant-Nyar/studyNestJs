import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Listing {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    discription: string;

    @Column()
    rating: number;

    constructor(listing: Partial<Listing>) {
        Object.assign(this, listing);
        // super();
    }
}
