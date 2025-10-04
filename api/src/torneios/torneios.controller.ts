import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TorneiosService } from './torneios.service';
import { CreateTorneioDto } from './dto/create-torneio.dto';

@Controller('torneios')
export class TorneiosController {
  constructor(private readonly service: TorneiosService) {}

  @Post()
  create(@Body() dto: CreateTorneioDto) {
    return this.service.create(dto);
  }

  @Get()
  list() {
    return this.service.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
