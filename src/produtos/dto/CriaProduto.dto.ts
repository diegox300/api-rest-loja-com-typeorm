import {
  IsArray,
  IsNotEmpty,
  IsPositive,
  IsString,
  IsUrl,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { ImagemProdutoDTO } from '../validacao/ImagemProduto.dto';
import { Type } from 'class-transformer';
import { CaracteristicaProdutoEntity } from '../validacao/CaracteristicaProduto.entity';
import { ProdutoEntity } from '../validacao/produto.entity';

export class CaracteristicaProdutoDTO {

  id: string;

  @IsString()
  @IsNotEmpty({message: 'Nome da Caracteristica não pode ser vazio'})
  nome: string;
  
  @IsString()
  @IsNotEmpty({message: 'Nome da Caracteristica não pode ser vazio'})
  descricao: string;

  produto: ProdutoEntity;
}

export class ImagemProdutoDTO {

  id: string;

  @IsUrl()
  url: string;

  @IsString()
  @IsNotEmpty({message: 'Nome da Caracteristica não pode ser vazio'})
  descricao: string;

  produto: ProdutoEntity

}

export class CriaProdutoDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  nome: string;

  valor: number;

  @IsPositive({ message: 'Quantidade tem que ser possitiva.' })
  quantidade: number;

  @IsNotEmpty()
  @MaxLength(1000)
  descricao: string;

  @Type(() => CaracteristicaProdutoEntity)
  @IsArray()
  @ValidateNested()
  caracteristicas: CaracteristicaProdutoEntity[];

  @Type(() => ImagemProdutoDTO)
  @IsArray()
  @ValidateNested()
  imagens: ImagemProdutoDTO;

  @IsNotEmpty()
  categoria: string;
}
