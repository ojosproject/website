const fs = require("fs");
const items = ["node_modules/", ".next/", "out/", "next-env.d.ts"];

items.forEach((item) => {
	fs.rmSync(item, { recursive: true, force: true });
	console.log(`> rm -rf ${item}`);
});

console.log("\n✅ Done! Continue with...\n$ pnpm i\n$ pnpm run dev");
