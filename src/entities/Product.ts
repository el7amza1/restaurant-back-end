import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    
} from "typeorm"
import { Category } from "./Category";
import { OrderLines } from "./OrderLines";

@Entity() 
export class Product extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    description:string;
    @Column()
    price: number;
    @Column({nullable:false})
    categoryId: number;
    @Column()
    popular: boolean;
    @CreateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
    })
    createdAt: Date;
    
    @UpdateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)",
    })
    updateAt: Date;
    @OneToMany(()=> OrderLines,(lines)=> lines.product)
    lines :OrderLines
    @ManyToOne (()=> Category, (category) => category.product)
    category :Category
}