import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { GymService } from './gym.service';

@Controller('gyms')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  @Get()
  getGyms() {
    return this.gymService.getGyms();
  }

  @Post()
  createGym(@Body() gym: any) {
    console.log('Received Gym:', gym);
    return this.gymService.addGym(gym);
  }

  @Get(':id')
  getGymById(@Param('id') id: string) {
    console.log('Gym ID:', id);
    return {
      message: `Gym ID received: ${id}`,
    };
  }
}