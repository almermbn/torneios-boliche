import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Partida, PartidaDocument } from './schemas/partida.schema';
import { CreatePartidaDto } from './dto/create-partida.dto';

@Injectable()
export class PartidasService {
  constructor(
    @InjectModel(Partida.name) private readonly model: Model<PartidaDocument>,
  ) {}

  create(dto: CreatePartidaDto) {
    return this.model.create({
      ...dto,
      // strings -> ObjectId ficam ok porque o Schema tipa como ObjectId
    });
  }

  findAll() {
    return this.model
      .find()
      .populate('id_usuario', 'nome')
      .populate('id_torneio', 'nome')
      .lean();
  }

  async findOne(id: string) {
    const doc = await this.model
      .findById(id)
      .populate('id_usuario', 'nome')
      .populate('id_torneio', 'nome')
      .lean();
    if (!doc) throw new NotFoundException('Partida não encontrada');
    return doc;
  }
}
