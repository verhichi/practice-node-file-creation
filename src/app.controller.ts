import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import {
  tCreateFileReqBody,
  tEditFileReqBody,
  tDeleteFileReqBody,
  tReadFileReqBody,
} from './types';
import { BASE_PATH } from './constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('tree')
  // getFileTree() {
  //   return this.appService.getFileTree(BASE_PATH);
  // }

  @Get('read')
  readFile(@Body() body: tReadFileReqBody) {
    console.log(body);
    return this.appService.readFile(`${BASE_PATH}${body.path}`);
  }

  @Post('create')
  createFile(@Body() body: tCreateFileReqBody) {
    console.log(body);
    this.appService.createFile(`${BASE_PATH}${body.path}`, body.content);
  }

  @Post('edit')
  editFile(@Body() body: tEditFileReqBody) {
    console.log(body);
    this.appService.editFile(`${BASE_PATH}${body.path}`, body.content);
  }

  @Delete('delete')
  deleteFile(@Body() body: tDeleteFileReqBody) {
    console.log(body);
    this.appService.deleteFile(`${BASE_PATH}${body.path}`);
  }
}
