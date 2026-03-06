/**
 * Example 1: Adding Authentication to an Express API
 * 
 * This example demonstrates how to use CodeAlchemy to add JWT authentication
 * to an existing Express.js API.
 */

import { CodeAlchemyClient } from '@CodeAlchemy/sdk';

const client = new CodeAlchemyClient({
  apiKey: process.env.CodeAlchemy_API_KEY,
  cwd: './my-express-api',
});

async function addAuthentication() {
  const result = await client.run({
    agent: 'base',
    prompt: `
      Add JWT authentication to my Express.js API with the following requirements:
      - Login endpoint at POST /api/auth/login
      - Protected routes middleware
      - Password hashing with bcrypt
      - JWT tokens with 24h expiration
      - Error handling for invalid tokens
    `,
  });

  console.log('Authentication added:', result.result);
}

addAuthentication().catch(console.error);

