// The isOdd() generator 6000
// The longer you run, the better the isOdd() function is!
// The isOdd() generator 6000 is not responsible for any damage that may happen your hardware!
const { rmSync, appendFileSync } = require("fs"); // FS module
try { rmSync("./isOdd.js") } catch (err) { } // Try delete existing isOdd() function
for (let i = 0; true; i++) appendFileSync("./isOdd.js", `${i ? " else " : ""}if (i == ${i}) {\n  return ${i % 2 ? true : false};\n}`); // Create the isOdd() function
