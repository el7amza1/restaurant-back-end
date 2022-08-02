import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    
} from "typeorm"
import { Order } from "./Order";
import { Product } from "./Product";

@Entity() 
export class OrderLines extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    orderId:Number;
    @Column()
    productId:number;

    @Column()
    quantity:number;
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
    @ManyToOne (()=> Order, (order) => order.lines)
    order :Order;
    @ManyToOne (()=> Product, (product) => product.lines)
    product :Product
}