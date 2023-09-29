import { InjectModel } from '@m8a/nestjs-typegoose';
import { Injectable } from '@nestjs/common';
import { Cat } from './cat.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Cat) private readonly catModel: ReturnModelType<typeof Cat>,
  ) {}

  async store(data: any): Promise<Cat> {
    const createCat = new this.catModel(data);
    return await createCat.save();
  }

  async read(): Promise<Cat[] | null> {
    return await this.catModel.find().exec();
  }
}
