// https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-javascript-actions
const core = require('@actions/core')
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
    core.notice('Hello from my custom javascript action!')
}


run();