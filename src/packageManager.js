import { execSync } from 'child_process';

export function detectPackageManager() {
  const userAgent = process.env.npm_config_user_agent;
  if (userAgent) {
    if (userAgent.startsWith("pnpm")) return "pnpm";
    if (userAgent.startsWith("yarn")) return "yarn";
    if (userAgent.startsWith("npm")) return "npm";
  }
  return "npm";
}

export function run(pmCommand, options = {}) {
  execSync(pmCommand, { stdio: "inherit", ...options });
}

export function installDeps(deps = [], dev = false) {
  const pm = detectPackageManager();
  const cmd = {
    npm: `npm install ${dev ? "--save-dev" : ""} ${deps.join(" ")}`,
    yarn: `yarn add ${dev ? "--dev" : ""} ${deps.join(" ")}`,
    pnpm: `pnpm add ${dev ? "-D" : ""} ${deps.join(" ")}`,
  }[pm];
  run(cmd);
}

export function installAll() {
  const pm = detectPackageManager();
  const cmd = {
    npm: "npm install",
    yarn: "yarn install",
    pnpm: "pnpm install",
  }[pm];
  run(cmd);
}
