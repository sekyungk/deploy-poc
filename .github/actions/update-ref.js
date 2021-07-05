const { Octokit } = require("@octokit/action");

const octokit = new Octokit();
const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
const { deployment, sha } = process.env;

updateDeploymentRef();

async function updateDeploymentRef() {
  const { data: deploymentRef } = await octokit.request(
    "GET /repos/{owner}/{repo}/git/ref/deployments/{deployment}",
    {
      owner,
      repo,
      deployment,
    }
  );

  if (!deploymentRef) {
    return await octokit.request("POST /repos/{owner}/{repo}/git/refs", {
      owner,
      repo,
      ref: `refs/deployments/${deployment}`,
      sha,
    });
  }

  return await octokit.request(
    "PATCH /repos/{owner}/{repo}/git/refs/deployments/{deployment}",
    {
      owner,
      repo,
      deployment,
      sha,
    }
  );
}
