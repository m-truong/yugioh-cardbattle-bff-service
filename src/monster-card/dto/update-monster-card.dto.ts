import { PartialType } from '@nestjs/mapped-types';
import { CreateMonsterCardDto } from './create-monster-card.dto';

export class UpdateMonsterCardDto extends PartialType(CreateMonsterCardDto) {}
