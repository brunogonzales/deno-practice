const url = `https://example.com`
const res = await fetch(url)

const body = new Uint8Array(await res.arrayBuffer())
await Deno.stdout.write(body)
