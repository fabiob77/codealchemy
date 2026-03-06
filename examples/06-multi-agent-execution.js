/**
 * Example 6: Multi-Agent Parallel Execution
 *
 * This example demonstrates how to run multiple agents simultaneously
 * with different AI models to get diverse perspectives and optimal results.
 */

const { CodeAlchemyClient } = require('@codealchemy/sdk');

async function multiAgentPlanning() {
  const client = new CodeAlchemyClient({
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  // Define a complex task that benefits from multiple perspectives
  const task = `
    Design a new authentication system for a React application that includes:
    - JWT token management
    - Social login (Google, GitHub)
    - Role-based access control
    - Password reset functionality
    - Session management
  `;

  console.log('🚀 Starting multi-agent planning session...\n');

  // Run multiple agents in parallel with different models
  const results = await client.runMulti({
    task,
    agents: [
      {
        agentId: 'planner',
        model: 'openai/gpt-4', // Strategic planning
        strategy: 'parallel'
      },
      {
        agentId: 'creative',
        model: 'anthropic/claude-3-haiku', // Creative solutions
        strategy: 'parallel'
      },
      {
        agentId: 'editor',
        model: 'anthropic/claude-3-sonnet', // Technical implementation
        strategy: 'parallel'
      }
    ],
    strategy: 'consensus', // Get consensus from all agents
    timeout: 60000, // 1 minute timeout
  });

  console.log('📋 Consensus Plan:');
  console.log(results.consensus);

  console.log('\n📊 Individual Agent Responses:');
  results.agentResults.forEach((result, index) => {
    console.log(`\n--- Agent ${index + 1} (${result.agentId}) ---`);
    console.log(result.response.substring(0, 200) + '...');
  });

  console.log('\n✅ Multi-agent planning completed!');
}

async function sequentialAgentWorkflow() {
  const client = new CodeAlchemyClient({
    apiKey: process.env.OPENROUTER_API_KEY,
  });

  const task = 'Add TypeScript support to an existing JavaScript project';

  console.log('🔄 Starting sequential agent workflow...\n');

  // Run agents in sequence, each building on the previous result
  const results = await client.runMulti({
    task,
    agents: [
      {
        agentId: 'file-picker',
        model: 'openai/gpt-4-turbo', // Fast file analysis
        strategy: 'sequential'
      },
      {
        agentId: 'planner',
        model: 'openai/gpt-4', // Detailed planning
        strategy: 'sequential'
      },
      {
        agentId: 'editor',
        model: 'anthropic/claude-3-sonnet', // Code implementation
        strategy: 'sequential'
      },
      {
        agentId: 'reviewer',
        model: 'openai/gpt-4', // Quality review
        strategy: 'sequential'
      }
    ],
    strategy: 'sequential', // Chain the results
    timeout: 120000, // 2 minutes timeout
  });

  console.log('📝 Sequential Workflow Results:');
  console.log(results.finalResult);

  console.log('\n✅ Sequential workflow completed!');
}

// Run the examples
async function main() {
  try {
    await multiAgentPlanning();
    console.log('\n' + '='.repeat(50) + '\n');
    await sequentialAgentWorkflow();
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { multiAgentPlanning, sequentialAgentWorkflow };