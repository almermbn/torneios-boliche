import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Usuario } from '../../usuarios/schemas/usuario.schema';
import { Torneio } from '../../torneios/schemas/torneio.schema';

export type PartidaDocument = HydratedDocument<Partida>;

@Schema({ timestamps: true })
export class Partida {
  @Prop({ type: Types.ObjectId, ref: Usuario.name, required: true })
  id_usuario: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Torneio.name, required: true })
  id_torneio: Types.ObjectId;

  @Prop({ type: Number, required: true, min: 0 })
  handicap: number;

  @Prop({ type: Date, required: true })
  data: Date;
}

export const PartidaSchema = SchemaFactory.createForClass(Partida);

// id bonito no JSON
PartidaSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_: any, ret: any) => {
    ret.id = ret._id;
    delete ret._id;
  },
});
