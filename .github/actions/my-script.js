const { Octokit } = require("@octokit/action");

const octokit = new Octokit();
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
console.log(process.env);

const { data } = await octokit.request(
  "GET /repos/{owner}/{repo}/releases/tags/{tag_name}",
  {
    owner,
    repo,
    tag_name,
  }
);
console.log("Issue created: %s", data);
