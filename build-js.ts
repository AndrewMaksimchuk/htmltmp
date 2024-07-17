import * as esbuild from 'https://deno.land/x/esbuild@v0.23.0/mod.js'

const fileTs = Deno.cwd() + "/htmltmp.ts"
const fileJs = Deno.cwd() + "/htmltmp.js"
Deno.createSync(fileJs)
const htmltmp = Deno.readTextFileSync(fileTs)

let result = await esbuild.transform(htmltmp, { loader: 'ts' })
Deno.writeTextFileSync(fileJs, result.code)
await esbuild.stop()
