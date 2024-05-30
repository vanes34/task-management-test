import { SetMetadata } from '@nestjs/common';
import { TasksRepository } from 'src/tasks/tasks.repository';

export const TYPEORM_EX_CUSTOM_REPOSITORY = 'TYPEORM_EX_CUSTOM_REPOSITORY';

export function CustomRepository(entity: TasksRepository): ClassDecorator {
  return SetMetadata(TYPEORM_EX_CUSTOM_REPOSITORY, entity);
}
