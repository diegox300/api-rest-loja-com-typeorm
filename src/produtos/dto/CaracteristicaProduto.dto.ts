import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity("produto_caracteristicas")
export class CaracteristicaProdutoDTO {

  @PrimaryGeneratedColumn ('uuid')
  id: string;
  
  @Column({name: "nome", length: 100, nullable: false })
  nome: string;

  @Column({name: "descricao", length: 100, nullable: false })
  descricao: string;
}
