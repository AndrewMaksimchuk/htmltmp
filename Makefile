default: build
	@bash test.bash

build: clean build_ts build_type_declaration build_js

build_ts:
	@echo -n '[ Generate typescript file ] '
	@deno run --allow-read --allow-write index.ts
	@echo 'Done'

build_js:
	@echo -n '[ Generate javascript file ] '
	@deno run --allow-read --allow-write --allow-env --allow-net --allow-run build-js.ts
	@echo 'Done'

build_type_declaration:
	@echo -n '[ Generate types file      ] '
	@./node_modules/.bin/tsc --declaration --target esnext htmltmp.ts
	@echo 'Done'

clean:
	@rm -f htmltmp.d.ts
	@rm -f htmltmp.ts
	@rm -f htmltmp.js

example:
	npx --yes listhen -w --open ./example.js
