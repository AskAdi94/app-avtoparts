import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesService } from './roles.service';
import { Role } from './roles.model';
import { User } from 'src/users/user.model';
import { UserRoles } from './user-roles.model';

@Module({
  providers:[RolesService],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
