import { Command } from "commander";
import screenshots from "./puppeteer";
import { blur } from "./sharp";

const program = new Command();

const run = async (domain) => {
  console.log(`URL passed: ${domain}`);

  const url = "https://" + domain;

  // validate
  const parsedUrl = new URL(url);
  const filename = parsedUrl.hostname.replace(/\./g, "-");

  console.log(filename);
  const imagePaths = await screenshots(url, filename);
  await blur(imagePaths, filename);
};

program
  .name("pagesnap-cli") // CLI tool name
  .description("A CLI tool to take screenshots of websites")
  .version("0.0.1") // Version of your CLI tool
  .argument("<url>", "The URL to process")
  .action((url) => {
    // Call your function with the provided URL
    run(url);
  });

program.parse();
