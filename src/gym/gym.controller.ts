import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Delete,
  Param,

} from '@nestjs/common';

import { GymService } from './gym.service';
import { CreateGymDto } from './dto/create-gym.dto';

@Controller('gyms')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  @Get()
  findAll() {
    return this.gymService.findAll();
  }

  @Post()
  createGym(@Body() gym: CreateGymDto) {
    return this.gymService.create(gym);
  }

  @Patch(':id')
  updateGym(
    @Param('id') id: string,
    @Body() gym: any,
  ) {
    return this.gymService.update(id, gym);
  }

  @Get(':id')
  getGymById(@Param('id') id: string) {
    return {
      message: `Gym ID received: ${id}`,
    };
  }
  @Delete(':id')
deleteGym(@Param('id') id: string) {
  return this.gymService.delete(id);
}
}