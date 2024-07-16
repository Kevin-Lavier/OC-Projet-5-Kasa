const fs = require("fs");
const path = require("path");

const targetDir = process.argv[2] || ".";
const ignoreDirs = ["node_modules", ".git"];

function generateTree(dir, level = 0) {
  const indent = "│   ".repeat(level);
  const files = fs.readdirSync(dir);

  files.forEach((file, index) => {
    const filePath = path.join(dir, file);
    const isLast = index === files.length - 1;
    const connector = isLast ? "└── " : "├── ";

    if (fs.statSync(filePath).isDirectory()) {
      if (!ignoreDirs.includes(file)) {
        console.log(`${indent}${connector}${file}`);
        generateTree(filePath, level + 1);
      }
    } else {
      console.log(`${indent}${connector}${file}`);
    }
  });
}

generateTree(targetDir);
