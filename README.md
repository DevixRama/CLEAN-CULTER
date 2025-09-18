# Clean Cutter

A simple Node.js script to organize files in a directory by their file extensions. Each file is moved into a folder named after its extension (e.g., `.txt` files go into a `TXT` folder). JavaScript (`.js`) and JSON (`.json`) files are skipped from being moved, and a message is logged for them.

## Features
- Automatically creates folders for each file extension.
- Moves files into their respective extension folders.
- Skips `.js` and `.json` files, logging a message instead.

## Usage

1. **Clone the repository**
2. **Install Node.js** (if not already installed)
3. **Run the script:**

```bash
node sever.js
```

The script will organize all files in the current directory (where `sever.js` is located).

## Example
Suppose your directory contains:
```
file1.txt
file2.png
sever.js
config.json
```
After running the script, the structure will be:
```
TXT/
  file1.txt
PNG/
  file2.png
sever.js
config.json
```

## Notes
- The script only affects files in the same directory as `sever.js`.
- Folders are named in uppercase based on the file extension.
- `.js` and `.json` files are not moved.

## License
ISC
