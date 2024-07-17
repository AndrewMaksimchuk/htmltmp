default: build
	@bash test.bash

build: clean build_ts build_js

build_ts:
	@deno run --allow-read --allow-write index.ts

build_js:
	@deno run --allow-read --allow-write --allow-env --allow-net --allow-run build-js.ts

clean:
	@rm -f htmltmp.ts
	@rm -f htmltmp.js
