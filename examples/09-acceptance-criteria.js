import { CodeAlchemyClient } from '@codealchemy/sdk';

/**
 * Example: Generate user acceptance criteria from a high-level feature request.
 *
 * Product managers often receive vague feature requests from stakeholders.
 * This script helps convert those into concrete, testable acceptance criteria
 * that can be handed directly to engineering teams.
 */

async function run() {
  const client = new CodeAlchemyClient({
    apiKey: process.env.OPENROUTER_API_KEY || '',
    cwd: process.cwd(),
  });

  const featureRequest = `
    "We need a way for users to share their favorite products with friends"
  `;

  const prompt = `
Convert this vague feature request into detailed user acceptance criteria.
Include:
- Specific user scenarios
- Edge cases to consider
- Non-functional requirements
- Success metrics
- Technical constraints to mention to engineering

Feature request: ${featureRequest}
`;

  const result = await client.run({ agent: 'base', prompt });
  console.log('=== User Acceptance Criteria ===');
  console.log(result.output);
}

run().catch(console.error);
