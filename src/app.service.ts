import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createFile(path: string, content: string) {
    console.log(path);
    try {
      fs.writeFileSync(`../../${path}`, content);
    } catch (e) {
      console.log(e);
    }
  }
}
