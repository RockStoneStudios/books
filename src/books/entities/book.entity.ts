import { Entity ,Column, DeleteDateColumn} from "typeorm";

@Entity()
export class Book {
    @Column({primary :true, generated:true})
    id: number;
    @Column()
    title : string;
    @Column()
    author : string;
    @Column()
    genre : string;
    @Column()
    quantity : number;
    @Column()
    image : string;
    @DeleteDateColumn()
    deletedAt : Date

}
