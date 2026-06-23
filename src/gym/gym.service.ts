import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Gym, GymDocument } from './schemas/gym.schema';

@Injectable()
export class GymService {
  constructor(
    @InjectModel(Gym.name)
    private gymModel: Model<GymDocument>,
  ) {}

  async create(gymData: any) {
    const gym = new this.gymModel(gymData);
    return gym.save();
  }

  async findAll() {
    return this.gymModel.find();
  }

  async update(id: string, gymData: any) {
    return this.gymModel.findByIdAndUpdate(
      id,
      gymData,
      { new: true },
    );
  }
  async delete(id: string) {
  return this.gymModel.findByIdAndDelete(id);
}
}