import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PartidasService } from './partidas.service';
import { CreatePartidaDto } from './dto/create-partida.dto';

@Controller('partidas')
export class PartidasController {
  constructor(private readonly service: PartidasService) {}

  @Post()
  create(@Body() dto: CreatePartidaDto) {
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
