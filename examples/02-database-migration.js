/**
 * Example 2: Database Migration with Code Review
 * 
 * This example shows how to use multiple agents to create a database migration
 * and then review it for SQL security issues.
 */

import { CodeAlchemyClient } from '@CodeAlchemy/sdk';

const client = new CodeAlchemyClient({
  apiKey: process.env.CodeAlchemy_API_KEY,
  cwd: './my-project',
});

async function createAndReviewMigration() {
  // First, generate the migration using the base agent
  const migrationResult = await client.run({
    agent: 'base',
    prompt: `
      Create a database migration to add user roles table:
      - PostgreSQL syntax
      - Foreign key to users table
      - Roles: admin, moderator, user
      - Add role_id column to users table
    `,
  });

  console.log('Migration created');

  // Then, review the code for security using the reviewer agent
  const reviewResult = await client.run({
    agent: 'reviewer',
    prompt: `
      Review this database migration for:
      - SQL injection vulnerabilities
      - Proper constraints and indexes
      - Data integrity
      - Rollback safety
    `,
  });

  console.log('Migration reviewed');
  console.log('Review results:', reviewResult.result);
}

createAndReviewMigration().catch(console.error);

