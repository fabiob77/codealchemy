import { CodeAlchemyClient } from '@codealchemy/sdk';

/**
 * Example: Automate the creation of release notes from a list of commit messages
 * or PR summaries. This can help product managers generate a polished changelog
 * at the end of each sprint.
 */

async function run() {
  const client = new CodeAlchemyClient({
    apiKey: process.env.OPENROUTER_API_KEY || '',
    cwd: process.cwd(),
  });

  const commitMessages = `
- feat: add user login page
- fix: correct validation bug on signup
- chore: upgrade dependencies
- feat: support OAuth2 login
- docs: update README with setup instructions
`;

  const prompt = `
Generate release notes suitable for a public-facing changelog based on the
following commits. Group features, fixes, and documentation changes into
sections. Use friendly, non-technical language appropriate for stakeholders.

Commits:
${commitMessages}
`;

  const result = await client.run({ agent: 'base', prompt });
  console.log('=== Release Notes ===');
  console.log(result.output);
}

run().catch(console.error);
