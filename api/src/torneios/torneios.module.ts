import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TorneiosService } from './torneios.service';
import { TorneiosController } from './torneios.controller';
import { Torneio, TorneioSchema } from './schemas/torneio.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Torneio.name, schema: TorneioSchema }]),
  ],
  controllers: [TorneiosController],
  providers: [TorneiosService],
  exports: [MongooseModule],
})
export class TorneiosModule {}
