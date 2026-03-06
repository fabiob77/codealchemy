/**
 * Example 4: GitHub Integration Workflow
 * 
 * This example shows how to integrate CodeAlchemy with GitHub to automatically
 * create pull requests with AI-generated changes.
 */

import { GitHubIntegration } from '@CodeAlchemy/common';
import { CodeAlchemyClient } from '@CodeAlchemy/sdk';

const client = new CodeAlchemyClient({
  apiKey: process.env.CodeAlchemy_API_KEY,
  cwd: './my-project',
});

const github = new GitHubIntegration({
  token: process.env.GITHUB_TOKEN,
  owner: 'myorg',
  repo: 'my-project',
});

async function createFeatureWithPR() {
  // Generate the feature code
  const featureResult = await client.run({
    agent: 'base',
    prompt: `
      Implement a complete user authentication system with:
      - Login/Logout functionality
      - Session management
      - Password reset flow
      - Email verification
    `,
  });

  console.log('Feature implementation generated');

  // Create a pull request with the changes
  const pr = await github.createPullRequest({
    title: 'feat: Add user authentication system',
    description: `
      ## Changes
      - Added JWT authentication middleware
      - Created login/register endpoints
      - Added password hashing with bcrypt
      - Implemented token refresh logic
      - Added email verification system
      
      ## Testing
      - Unit tests for auth functions
      - Integration tests for endpoints
      - E2E tests for login flow
      
      ## Review Checklist
      - [ ] Code review completed
      - [ ] Security audit passed
      - [ ] Tests passing locally
      - [ ] Documentation updated
    `,
    sourceBranch: 'feature/auth-system',
    targetBranch: 'main',
  });

  console.log(`✅ PR created: ${pr.url}`);
  console.log(`💬 Title: ${pr.title}`);
}

createFeatureWithPR().catch(console.error);

