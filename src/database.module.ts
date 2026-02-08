import { Module, Global } from '@nestjs/common';
import { Pool } from 'pg';

// This is the "Bean" name we will use to inject the pool later
export const PG_CONNECTION = 'PG_CONNECTION';

@Global() // Makes this module available everywhere without importing it in every feature module
@Module({
    providers: [
        {
            provide: PG_CONNECTION,
            useValue: new Pool({
                connectionString: 'postgres://postgres:password@localhost:5432/postgres', // Update your DB name if needed
            }),
        },
    ],
    exports: [PG_CONNECTION], // Export the provider so other modules can use it
})
export class DatabaseModule {}