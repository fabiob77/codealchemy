/**
 * Example 3: React Component Refactoring
 * 
 * This example demonstrates how to use CodeAlchemy to refactor a React component
 * to improve type safety, performance, and accessibility.
 */

import { CodeAlchemyClient } from '@CodeAlchemy/sdk';

const client = new CodeAlchemyClient({
  apiKey: process.env.CodeAlchemy_API_KEY,
  cwd: './my-react-app',
});

async function refactorComponent() {
  const refactorResult = await client.run({
    agent: 'editor',
    prompt: `
      Refactor this React component to:
      - Use TypeScript
      - Add proper error boundaries
      - Implement React.memo for performance
      - Add accessibility attributes (aria-*)
      - Follow React best practices
      - Add proper PropTypes or TypeScript interfaces
      
      Component location: src/components/UserProfile.tsx
    `,
  });

  console.log('Component refactored:', refactorResult.result);
}

refactorComponent().catch(console.error);

