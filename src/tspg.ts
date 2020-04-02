import { Client } from 'ts-postgres';
 
async function main() {
    const client = new Client();
    await client.connect();
 
    try {
        // Querying the client returns a query result promise
        // which is also an asynchronous result iterator.
        const resultIterator = client.query(
            // `SELECT 'Hello ' || $1 || '!' AS message`,
            // ['world']
            `SELECT * FROM test`
        );
 
        for await (const row of resultIterator) {
            // 'Hello world!'
            //console.log(row.get('message'));
            console.log(row.get('testcolumn'));
        }
    } finally {
        await client.end();
    }
}
 
main()