import { prop } from '@typegoose/typegoose';

class Job {
  @prop()
  public title: string;

  @prop()
  public position: string;
}

export class Cat {
  @prop({ required: true })
  name: string;

  @prop({ type: () => [Job] })
  public jobs?: Job[];
}
