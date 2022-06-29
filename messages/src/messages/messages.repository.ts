import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const messages = await this.getAll();
    return messages[id];
  }

  async findAll() {
    const messages = await this.getAll();
    return Object.values(messages);
  }

  async create(content: string) {
    const messages = await this.getAll();
    const id = Math.round(Math.random() * 10000);
    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages));

    return messages[id];
  }

  private async getAll() {
    const contents = await readFile('messages.json', 'utf8');
    return JSON.parse(contents);
  }
}
