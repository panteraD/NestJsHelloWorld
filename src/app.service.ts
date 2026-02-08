import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';
import { PG_CONNECTION } from './database.module';

@Injectable()
export class AppService {
  constructor(@Inject(PG_CONNECTION) private readonly pool: Pool) {}

  async callInsertProcedure(name: string): Promise<string> {
    const client = await this.pool.connect();
    try {
      // Calling the procedure raw, just like before
      await client.query('CALL custody.test_insert($1)', [name]);
      return `Successfully called custody.test_insert with name: ${name}`;
    } finally {
      client.release();
    }
  }
}