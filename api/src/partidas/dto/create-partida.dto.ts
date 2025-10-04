import { IsDate, IsMongoId, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePartidaDto {
  @IsMongoId()
  id_usuario: string;

  @IsMongoId()
  id_torneio: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  handicap: number;

  @Type(() => Date)
  @IsDate()
  data: Date;
}
