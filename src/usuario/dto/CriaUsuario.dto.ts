import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-unico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @EmailEhUnico({ message: 'Já Existe um usuario com este e-mail' })
  @IsEmail(undefined, { message: 'O e-mail, informado, é invalido.' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  senha: string;
}
