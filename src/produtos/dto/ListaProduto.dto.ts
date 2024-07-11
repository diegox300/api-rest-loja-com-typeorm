import { CaracteristicaProdutoEntity } from "../validacao/CaracteristicaProduto.entity";

export class ListaProdutoDTO {
  constructor(
    readonly id: string,
    readonly nome: string
    //readonly caracteristicas: CaracteristicaProdutoEntity
  ) {}
}
