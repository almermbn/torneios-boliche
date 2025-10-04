import { IsDate, IsString, MinLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTorneioDto {
  @IsString()
  @MinLength(2)
  nome: string;

  @IsString()
  @MinLength(2)
  descricao: string;

  @Type(() => Date)
  @IsDate()
  dataInicio: Date;

  @Type(() => Date)
  @IsDate()
  dataFim: Date;
}
