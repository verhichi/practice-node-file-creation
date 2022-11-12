import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
// import * as pathlib from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // getFileTree(path: string, ret = []) {
  //   console.log('getFileTree', path);
  //   const filesInDirectory = fs.readdirSync(path);
  //   for (const file of filesInDirectory) {
  //     const absolute = pathlib.join(path, file);
  //     if (fs.statSync(absolute).isDirectory()) {
  //       this.getFileTree(absolute);
  //     } else {
  //       return ret.push(absolute);
  //     }
  //   }
  // }

  readFile(path: string): string {
    console.log('readFile', path);
    try {
      return fs.readFileSync(path).toString();
    } catch (e) {
      console.log(e);
    }
  }

  createFile(path: string, content: string) {
    console.log('createFile', path, content);
    try {
      fs.writeFileSync(path, content);
    } catch (e) {
      if (e.code !== 'ENOENT') return console.log(e);
      const dirPath = path.substring(0, path.lastIndexOf('/'));
      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(path, content);
    }
  }

  editFile(path: string, content: string) {
    console.log('editFile', path, content);
    try {
      fs.writeFileSync(path, content);
    } catch (e) {
      console.log(e);
    }
  }

  deleteFile(path: string) {
    console.log('deleteFile', path);
    try {
      fs.rmSync(path, { recursive: true });
    } catch (e) {
      console.log(e);
    }
  }
}
