import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

// Simplicity - Just a simple controller to create and list users
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.listUsers();
  }

  @Post()
  createUser(@Body() user: { email: string; password: string }) {
    return this.usersService.createUser(user.email, user.password);
  }
}
