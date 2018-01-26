import buble from "rollup-plugin-buble"
import json from "rollup-plugin-json"
import executable from "rollup-plugin-executable"
import builtinModules from "builtin-modules"

var pkg = require('./package.json')
var external = Object.keys(pkg.dependencies).concat(builtinModules)

export default {
  input: "src/index.js",
  output: {
    file: "bin/prepublish",
    format: "cjs",
    sourcemap: true,
    banner: "#!/usr/bin/env node\n"
  },
  external,
  plugins: [
    json(),
    buble({
      objectAssign: "Object.assign"
    }),
    executable()
  ]
}
