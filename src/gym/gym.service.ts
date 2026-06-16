import { Injectable } from '@nestjs/common';

@Injectable()
export class GymService {
  private gyms = [
    { id: 1, name: 'Gold Gym' },
    { id: 2, name: 'FitZone' },
  ];

  getGyms() {
    return this.gyms;
  }

  addGym(gym: any) {
    this.gyms.push(gym);
    return gym;
  }
}