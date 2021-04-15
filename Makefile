# Makefile
install:
	npm ci
brain-games:
	node bin/games/brain-games.js
publish:
	npm publish --dry-run
make lint:
	npx eslint .