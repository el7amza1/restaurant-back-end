import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    
} from "typeorm"
import { Product } from "./Product";

@Entity() 
export class Category extends BaseEntity{

    @PrimaryColumn( {unique :true})
    name:string;
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
    @OneToMany(()=> Product,(product)=> product.category)
    product :Product
}