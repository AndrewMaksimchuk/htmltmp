import { base } from "./base-function.ts"
import { createElement } from "./generator.ts"

const file = Deno.cwd() + "/htmltmp.ts"
Deno.createSync(file)
Deno.writeTextFileSync(file, base, { append: true })
createElement.forEach((chunk) => Deno.writeTextFileSync(file, chunk, { append: true }))
