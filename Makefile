default: build
	@bash test.bash

build: clean
	@deno run --allow-read --allow-write index.ts

clean:
	@rm -f htmltmp.ts
