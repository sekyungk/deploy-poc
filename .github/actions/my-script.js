const { Octokit } = require("@octokit/action");

const octokit = new Octokit();
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
console.log(process.env);

myAsyncMethod();

async function myAsyncMethod() {
  const { data } = await octokit.request(
    "GET /repos/{owner}/{repo}/releases/tags/{tag_name}",
    {
      owner,
      repo,
      tag_name: "1.38.0",
    }
  );
  console.log("Issue created: %s", data);
}
