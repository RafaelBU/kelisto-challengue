/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const madge = require("madge");

const maxCircularDeps = 0;

const configuration = {
  fileExtensions: ["ts", "tsx", "js", "jsx"],
  tsConfig: "tsconfig.json",
};

const target = "src";

console.log(
  `Checking circular dependencies (max=${maxCircularDeps}) in ${target}...`,
  "\n"
);

madge(target, configuration).then((res) => {
  const circularDeps = res.circular();

  console.log(
    "\x1b[31m",
    `${circularDeps.length} circular dependencies found!`,
    "\x1b[0m",
    "\n"
  );
  circularDeps.forEach((circularDep, index) => {
    const deps = [...circularDep, circularDep[0]].map(
      (dep) => `\x1b[33m${dep}\x1b[0m`
    );

    console.log(`${index + 1}) `, deps.join(" -> "));
  });

  if (circularDeps.length > maxCircularDeps) {
    console.log(
      "\n",
      "\x1b[31m",
      `There're more circular dependencies than expected (max=${maxCircularDeps})`,
      "\x1b[0m"
    );
    process.exit(1);
  }
});
