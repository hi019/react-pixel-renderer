/**
 * Copies this project to the Raspberry Pi via rsync.
 * Create a JSON file named "sync.config.json" that has these properties:
 *  - username
 *  - hostname
 *  - directory
 *  - quiet (optional)
 */

const username = "pi";
const hostname = "rpi.local";
const directory = "/home/pi/led";
const quiet = false;

const Rsync = require("rsync");

// Build the command
const rsync = Rsync.build({
  shell: "ssh",
  flags: "ahP",
  recursive: true,
  exclude: [".git", ".DS_Store", "node_modules"],
  source: __dirname + "/*",
  destination: `${username}@${hostname}:${directory}`,
});

console.log(`\n🚀\t$ ${rsync.command()}`);

// Execute the command
rsync
  .output(
    (data) =>
      quiet ||
      console.log(`📤\t${data.toString().split("\n").slice(0, 1).join("")}`)
  )
  .execute((error, code) => {
    if (error) {
      console.error("👎\t", error);
    } else {
      console.log(`👍\tDone! [exit code ${code}]\n\n`);
    }
  });
