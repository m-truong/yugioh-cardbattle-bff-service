import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MonsterCard {
  @Field()
  monsterName: string;

  @Field()
  monsterType: string;
}

@ObjectType()
export class MonsterData {
  @Field()
  private _monsterAtk: number;
  public get monsterAtk(): number {
    return this._monsterAtk;
  }
  public set monsterAtk(value: number) {
    this._monsterAtk = value;
  }

  @Field()
  private _MonsterDef: number;
  public get MonsterDef(): number {
    return this._MonsterDef;
  }
  public set MonsterDef(value: number) {
    this._MonsterDef = value;
  }
}
