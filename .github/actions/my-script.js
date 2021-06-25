const { Octokit } = require("@octokit/action");

const octokit = new Octokit();
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const { TAG_NAME } = process.env;

myAsyncMethod();

async function myAsyncMethod() {
  const { data } = await octokit.request(
    "GET /repos/{owner}/{repo}/releases/tags/{TAG_NAME}",
    {
      owner,
      repo,
      TAG_NAME,
    }
  );
  console.log(data.id);
}
