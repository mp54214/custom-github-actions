// https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-javascript-actions
const core = require('@actions/core')
const github = require("@actions/github");
const exec = require("@actions/exec");

function run() {
    // 1. Get Some Input values
    const bucket = core.getInput("bucket", { required: true });
    const bucketRegion = core.getInput("bucket-region", { required: false });
    const distFolder = core.getInput("dist-folder", {
        required: true,
    });

    // 2. Upload the files
    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);
    
    core.notice("Hello from my custom javascript action!");
    const websiteURL = `http://${bucket}.s3-website.${bucketRegion}.amazonaws.com`
    core.setOutput("website-url", websiteURL); // see outputs: in action.yaml
}


run();