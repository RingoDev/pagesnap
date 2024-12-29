#!/usr/bin/env node

import {Command} from 'commander';
import screenshot from "./puppeteer";

const program = new Command();

const placeholderFunction = async (domain) => {
    console.log(`URL passed: ${domain}`);

    const url = "https://" + domain

    // validate
    const parsedUrl = new URL(url)
    const filename = parsedUrl.hostname.replace(/\./g, '-')

    console.log(filename)
    await screenshot(url, filename)

};

program
    .name('pagesnap-cli')  // CLI tool name
    .description('A CLI tool to take screenshots of websites')
    .version('0.0.1')  // Version of your CLI tool
    .argument('<url>', 'The URL to process')  // Accepts a URL as an argument
    .action((url) => {
        // Call your function with the provided URL
        placeholderFunction(url);
    });

program.parse(); // Parse and execute the CLI tool commands