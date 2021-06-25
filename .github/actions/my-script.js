const { Octokit } = require("@octokit/action");

const octokit = new Octokit();
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const { TAG_NAME } = process.env;

myAsyncMethod();

async function myAsyncMethod() {
  const { data: releases } = await octokit.request(
    "GET /repos/{owner}/{repo}/releases/tags/{TAG_NAME}",
    {
      owner,
      repo,
      TAG_NAME,
    }
  );

  const { data } = await octokit.request(
    "Delete /repos/{owner}/{repo}/releases/{release_id}",
    {
      owner,
      repo,
      release_id: releases.id,
    }
  );

  console.log(data);
}
