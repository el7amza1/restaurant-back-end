import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    
} from "typeorm"
import { OrderLines } from "./OrderLines";

@Entity() 
export class Order extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName:string;
    @Column()
    lastName:string;

    @Column()
    mobileNim:number;
    @Column()
    city: string;
    @Column({nullable:false})
    orderNamber: number;
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
    @OneToMany(()=> OrderLines,(lines)=> lines.order)
    lines :OrderLines
}
