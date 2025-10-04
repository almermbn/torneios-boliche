import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TorneiosModule } from './torneios/torneios.module';
import { PartidasModule } from './partidas/partidas.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    UsuariosModule,
    TorneiosModule,
    PartidasModule
  ],
})
export class AppModule {}
