import { CodeAlchemyClient } from '@codealchemy/sdk';

/**
 * Example: Generate a detailed technical specification from a user story.
 *
 * This script demonstrates how a product manager can turn a high-level
 * requirement into a concrete engineering specification, complete with
 * acceptance criteria, API contracts, and UI notes.
 */

async function run() {
  const client = new CodeAlchemyClient({
    apiKey: process.env.OPENROUTER_API_KEY || '',
    cwd: process.cwd(),
  });

  const userStory = `
As a user, I want to be able to reset my password so that I can regain
access if I forget it.
`;

  const prompt = `
Convert the following user story into a detailed technical specification.
Include:
- API endpoints and request/response formats
- Database schema changes (if any)
- UI flow and wireframe notes
- Validation rules and error cases
- Acceptance criteria in bullet points

User story:
${userStory}
`;

  const result = await client.run({ agent: 'base', prompt });
  console.log('=== Technical Specification ===');
  console.log(result.output);
}

run().catch(console.error);
