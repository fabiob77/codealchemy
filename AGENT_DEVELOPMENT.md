# Agent Development Guide

Learn how to create custom agents for CodeAlchemy and extend its capabilities.

## Agent Anatomy

Every agent consists of:

```typescript
export const myAgent: AgentDefinition = {
  id: 'my-agent',                    // Unique identifier
  displayName: 'My Custom Agent',     // User-friendly name
  model: 'openai/gpt-4',            // AI model to use
  instructionsPrompt: 'Your system...', // System instructions
  toolNames: ['read_files', 'write_file'], // Available tools
};
```

## Creating Your First Agent

### Step 1: Define the Agent

Create `agents/src/custom-agent.ts`:

```typescript
import { AgentDefinition } from '@codealchemy/common';

export const bugFixerAgent: AgentDefinition = {
  id: 'bug-fixer',
  displayName: 'Bug Fixer',
  model: 'openai/gpt-4',
  instructionsPrompt: `You are an expert bug finder and fixer.
  
When given a bug report:
1. Analyze the error
2. Find the root cause in the code
3. Suggest and implement a fix
4. Write tests to verify the fix
5. Document the change`,
  toolNames: ['read_files', 'write_file', 'run_command', 'analyze_code'],
};
```

### Step 2: Export from Index

Update `agents/src/index.ts`:

```typescript
export { bugFixerAgent } from './custom-agent';
```

### Step 3: Use the Agent

```javascript
import { CodeAlchemyClient } from '@codealchemy/sdk';
import { bugFixerAgent } from '@codealchemy/agents';

const client = new CodeAlchemyClient({
  apiKey: process.env.OPENROUTER_API_KEY,
  cwd: '/path/to/project',
});

const result = await client.run({
  agent: 'bug-fixer',
  prompt: 'Fix the NullPointerException in user.js',
});
```

## Available Tools

Agents can use these tools:

### Code Inspection
- `read_files` - Read file contents
- `list_files` - List directory contents
- `search_code` - Search for patterns in code
- `analyze_code` - Get code analysis

### Code Modification
- `write_file` - Create or update files
- `delete_file` - Remove files
- `rename_file` - Move/rename files

### Execution
- `run_command` - Execute shell commands
- `run_tests` - Run test suite

### Integration
- `create_pr` - Create GitHub pull requests
- `commit_changes` - Commit to git

## Advanced Agent Patterns

### Multi-Step Agent

```typescript
export const refactoringAgent: AgentDefinition = {
  id: 'refactorer',
  displayName: 'Code Refactorer',
  model: 'openai/gpt-4',
  instructionsPrompt: `You are a refactoring expert.

Process:
1. First, analyze the code structure
2. Identify refactoring opportunities
3. Create a refactoring plan
4. Execute changes incrementally
5. Verify tests still pass
6. Document improvements`,
  toolNames: [
    'read_files',
    'analyze_code',
    'write_file',
    'run_command',
  ],
};
```

### Specialized Model Agent

```typescript
export const dataAnalystAgent: AgentDefinition = {
  id: 'data-analyst',
  displayName: 'Data Analyst',
  model: 'openrouter/gpt-4-turbo', // More powerful model
  instructionsPrompt: `Analyze data and provide insights...`,
  toolNames: ['read_files', 'run_command', 'analyze_code'],
};
```

## Chaining Agents

Create orchestrator agents that use other agents:

```typescript
export const fullStackAgent: AgentDefinition = {
  id: 'full-stack',
  displayName: 'Full Stack Developer',
  model: 'openai/gpt-4',
  instructionsPrompt: `Coordinate between frontend and backend agents:

1. Use frontend-builder for UI changes
2. Use backend-builder for API changes
3. Use reviewer to validate all changes
4. Use tester to run integration tests`,
  toolNames: [
    'frontend-builder',
    'backend-builder',
    'reviewer',
    'tester'
  ],
};
```

## Testing Custom Agents

Create test files:

```typescript
// agents/src/__tests__/custom-agent.test.ts
import { describe, it, expect } from 'bun:test';
import { bugFixerAgent } from '../custom-agent';

describe('Bug Fixer Agent', () => {
  it('should have correct configuration', () => {
    expect(bugFixerAgent.id).toBe('bug-fixer');
    expect(bugFixerAgent.model).toContain('gpt-4');
    expect(bugFixerAgent.toolNames).toContain('read_files');
  });
});
```

Run tests:

```bash
bun test agents/src/__tests__/
```

## Best Practices

### 1. Clear Instructions

Write detailed system prompts:

```typescript
instructionsPrompt: `You are a security audit agent.

Your responsibilities:
- Identify security vulnerabilities
- Check for OWASP Top 10 issues
- Verify authentication/authorization
- Check for injection attacks
- Review sensitive data handling

When reporting issues:
1. Severity: Critical/High/Medium/Low
2. Location: File and line number
3. Description: What and why it's a problem
4. Fix: How to resolve it`,
```

### 2. Appropriate Tools

Only include tools the agent needs:

```typescript
// Good - minimal tools
toolNames: ['read_files', 'analyze_code']

// Bad - unnecessary tools
toolNames: ['read_files', 'write_file', 'run_command', 
           'delete_file', 'create_pr'] // Too many!
```

### 3. Model Selection

Choose appropriate models:

```typescript
// For complex reasoning
model: 'openai/gpt-4'

// For faster, simpler tasks
model: 'openai/gpt-3.5-turbo'

// For specialized domains (code)
model: 'openrouter/claude-3-sonnet'

// For cost optimization
model: 'openrouter/gpt-3.5-turbo'
```

### 4. Documentation

Document your agents:

```typescript
/**
 * Performance Optimization Agent
 * 
 * Analyzes code for performance bottlenecks and optimization opportunities.
 * 
 * @example
 * ```typescript
 * const result = await client.run({
 *   agent: 'performance-optimizer',
 *   prompt: 'Optimize the database queries in service.ts',
 * });
 * ```
 */
export const performanceAgent: AgentDefinition = { ... };
```

## Publishing Custom Agents

1. **Create in agents/src/**
2. **Test thoroughly**
3. **Export from index.ts**
4. **Document usage**
5. **Include examples**

Share common agents as npm packages!

## Common Issues

### Agent Doesn't Find Files

Make sure to include `read_files` tool:

```typescript
toolNames: ['read_files', 'analyze_code'] // Add read_files
```

### Model Not Responding

Check if model exists on OpenRouter:

```typescript
model: 'openrouter/model-name' // Verify format
```

### Tests Failing

Run locally first:

```bash
bun test
cd agents && bun run build
```

## Example Agents Library

Check `agents/src/implementations.ts` for production examples:
- File Picker Agent
- Planner Agent
- Editor Agent
- Reviewer Agent

## Resources

- [OpenRouter Models](https://openrouter.ai/models)
- [CodeAlchemy SDK Docs](./docs/API.md)
- [GitHub Integration](./docs/GITHUB_INTEGRATION.md)

## Getting Help

- **Issues**: Open on GitHub
- **Discussions**: Use GitHub Discussions
