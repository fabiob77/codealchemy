/**
 * Example 5: Multi-Agent Planning for Complex Tasks
 * 
 * This example demonstrates how to use the planner agent to break down
 * complex tasks into steps, then execute each step with specialized agents.
 */

import { CodeAlchemyClient } from '@CodeAlchemy/sdk';

const client = new CodeAlchemyClient({
  apiKey: process.env.CodeAlchemy_API_KEY,
  cwd: './my-api-project',
});

async function migrateRestToGraphQL() {
  console.log('🚀 Starting REST to GraphQL migration...\n');

  // Step 1: Plan the migration
  const planResult = await client.run({
    agent: 'planner',
    prompt: `
      Plan the migration from REST to GraphQL API:
      1. Schema design phase - Define GraphQL types and queries
      2. Resolver implementation - Create resolvers for all queries
      3. Authentication - Implement GraphQL auth middleware
      4. Client-side migration - Update client to use GraphQL
      5. Testing strategy - Unit and integration tests
      6. Deployment plan - Gradual rollout strategy
      
      Consider: backward compatibility, performance, team coordination
    `,
  });

  console.log('📋 Plan created:');
  console.log(planResult.result);
  console.log('\n');

  // Step 2: Implement the schema
  const schemaResult = await client.run({
    agent: 'base',
    prompt: `
      Implement the GraphQL schema based on the migration plan:
      - Define all necessary types
      - Create Query and Mutation types
      - Add proper field documentation
      - Include relationships between types
    `,
  });

  console.log('✅ Schema implemented');

  // Step 3: Review for best practices
  const reviewResult = await client.run({
    agent: 'reviewer',
    prompt: `
      Review the GraphQL implementation for:
      - Performance optimization opportunities
      - Security vulnerabilities
      - Best practices compliance
      - N+1 query problem prevention
      - Error handling adequacy
    `,
  });

  console.log('✅ Code reviewed and approved\n');
  console.log('🎉 Migration planning complete!');
  console.log('\nNext steps:');
  console.log('1. Review the generated schema');
  console.log('2. Set up resolver implementation');
  console.log('3. Add comprehensive tests');
  console.log('4. Deploy to staging environment');
}

migrateRestToGraphQL().catch(console.error);

