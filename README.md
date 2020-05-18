## For more information about Deno please refer to [Deno's Manual](https://deno.land/manual/getting_started/installation).

## Requirements

- [Deno > 1.0.0](https://deno.land/manual/getting_started/installation)
- [nc > 1.0.3](https://www.npmjs.com/package/nc)

## Scripts

### TCP server example

- Run the server `deno run --allow-net examples/tcpServer.js`
- Then test the server with `nc localhost 8080`

### Fetch example

- Retrieve the content of example.com and print it to the console
  `deno run --allow-net examples/fetch.js`
