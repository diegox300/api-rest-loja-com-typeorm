import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaProdutoEntity } from '../validacao/CaracteristicaProduto.entity';
import { ImagemProdutoDTO } from '../validacao/ImagemProduto.dto';
import { Type } from 'class-transformer';

export class AtualizaProdutoDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsOptional()
  valor: number;

  @IsPositive({ message: 'Quantidade tem que ser possitiva.' })
  @IsOptional()
  quantidade: number;

  @IsNotEmpty()
  @MaxLength(1000)
  @IsOptional()
  descricao: string;

  @IsOptional()
  @Type(() => CaracteristicaProdutoEntity)
  @IsArray()
  @ValidateNested()
  caracteristicas: CaracteristicaProdutoEntity[];

  @IsOptional()
  @Type(() => ImagemProdutoDTO)
  @IsArray()
  @ValidateNested()
  imagens: ImagemProdutoDTO;

  @IsOptional()
  @IsNotEmpty()
  categoria: string;
}
