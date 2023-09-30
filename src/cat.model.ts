import { prop } from '@typegoose/typegoose';

class Ts {
  @prop()
  year: number;

  @prop({ type: () => [Number] })
  weekDays: number[];
}

class Job {
  @prop()
  public title: string;

  @prop()
  public position: string;

  @prop({ type: () => [Ts] })
  ts?: Ts[];
}

export class Cat {
  @prop({ required: true })
  public name: string;

  @prop()
  type: string;

  @prop({ type: () => [Job] })
  public jobs?: Job[];
}
