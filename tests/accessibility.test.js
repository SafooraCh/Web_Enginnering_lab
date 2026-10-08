const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
const axe = require("axe-core");

const htmlPath = path.resolve(__dirname, "../public/index.html");
const html = fs.readFileSync(htmlPath, "utf-8");

const dom = new JSDOM(html, { runScripts: "dangerously" });
dom.window.eval(axe.source);

dom.window.axe
  .run()
  .then((results) => {
    if (results.violations.length === 0) {
      console.log(
        "PASS: 0 accessibility violations found! Page meets WCAG 2.1 AA/AAA accessibility criteria."
      );
      process.exit(0);
    } else {
      console.error(
        `FAIL: Found ${results.violations.length} accessibility violation(s):`
      );
      results.violations.forEach((violation, idx) => {
        console.error(`\n[${idx + 1}] ${violation.id}: ${violation.help}`);
        console.error(`Impact: ${violation.impact}`);
        violation.nodes.forEach((node) => {
          console.error(`Target: ${node.target.join(", ")}`);
          console.error(`Summary: ${node.failureSummary}`);
        });
      });
      process.exit(1);
    }
  })
  .catch((err) => {
    console.error("Axe audit error:", err);
    process.exit(1);
  });
