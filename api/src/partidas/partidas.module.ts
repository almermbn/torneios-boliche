import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PartidasService } from './partidas.service';
import { PartidasController } from './partidas.controller';
import { Partida, PartidaSchema } from './schemas/partida.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Partida.name, schema: PartidaSchema }])],
  controllers: [PartidasController],
  providers: [PartidasService],
})
export class PartidasModule {}
