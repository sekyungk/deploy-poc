const { Octokit } = require("@octokit/action");

const octokit = new Octokit();
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const { TAG_NAME } = process.env;

myAsyncMethod();

async function myAsyncMethod() {
  const { data: releases } = await octokit.request(
    "GET /repos/{owner}/{repo}/releases/tags/{tag}",
    {
      owner,
      repo,
      tag: TAG_NAME,
    }
  );

  await octokit.request("Delete /repos/{owner}/{repo}/releases/{release_id}", {
    owner,
    repo,
    release_id: releases.id,
  });

  await octokit.request("Delete /repos/{owner}/{repo}/git/refs/tags/{tag}", {
    owner,
    repo,
    tag: TAG_NAME,
  });
}
