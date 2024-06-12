import { CaracteristicaProdutoDTO } from '../dto/CaracteristicaProduto.dto';
import { ImagemProdutoDTO } from '../dto/ImagemProduto.dto';
import { Entity, 
         Column,
         PrimaryGeneratedColumn }
         from 'typeorm';

  @Entity({ name: 'produtos' })
  export class ProdutoEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column ({name: 'usuario_id', length: 100, nullable: false })
  usuarioId: string;

  @Column ({name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column ({name: 'valor', nullable: false })
  valor: number;

  @Column ({name: 'quantidade', nullable: false })
  quantidade: number;

  @Column ({name: 'descricao', length: 255, nullable: false })
  descricao: string;

  //@Column ({name: 'caracteristicas', length: 100, nullable: false })
  //caracteristicas: CaracteristicaProdutoDTO;

 // @Column ({name: 'imagens', length: 100, nullable: false })
 // imagens: ImagemProdutoDTO;
  
  @Column ({name: 'categoria', length: 100, nullable: false })
  categoria: string;
}