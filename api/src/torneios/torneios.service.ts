import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Torneio, TorneioDocument } from './schemas/torneio.schema';
import { CreateTorneioDto } from './dto/create-torneio.dto';

@Injectable()
export class TorneiosService {
  constructor(
    @InjectModel(Torneio.name) private readonly model: Model<TorneioDocument>,
  ) {}

  async create(dto: CreateTorneioDto) {
    if (dto.dataFim < dto.dataInicio) {
      throw new BadRequestException('dataFim não pode ser antes de dataInicio');
    }
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find().lean();
  }

  async findOne(id: string) {
    const doc = await this.model.findById(id).lean();
    if (!doc) throw new NotFoundException('Torneio não encontrado');
    return doc;
  }
}
