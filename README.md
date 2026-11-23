# One-Line Roast

A make.fun competition entry for **"One-Line Roast: The Gadget You Use Every Day."**

`main.ts` writes a single original roast (<=200 chars) to `/output/entry.txt`.
No network access, no external file reads — fully self-contained.

## The line

> My GPS recalculates in the weary sigh of a driving instructor who's already written me off.

## Run

```sh
node main.ts
```

Writes to `/output/entry.txt` (creating the directory if needed). If `/output`
isn't writable, falls back to `./entry.txt`.

## License

MIT — see [LICENSE](./LICENSE).