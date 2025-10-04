import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TorneioDocument = HydratedDocument<Torneio>;

@Schema({ timestamps: true })
export class Torneio {
  @Prop({ required: true, trim: true })
  nome: string;

  @Prop({ required: true, trim: true })
  descricao: string;

  @Prop({ required: true, type: Date })
  dataInicio: Date;

  @Prop({ required: true, type: Date })
  dataFim: Date;
}

export const TorneioSchema = SchemaFactory.createForClass(Torneio);

// Expor `id` no JSON (e esconder `_id` e `__v`)
TorneioSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_: any, ret: any) => {
    ret.id = ret._id;
    delete ret._id;
  },
});
