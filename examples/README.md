# Real-World Examples

This directory contains practical, ready-to-use examples demonstrating how to leverage CodeAlchemy in real-world scenarios.

## Examples Overview

### 1. **Express Authentication** (`01-express-authentication.js`)
Add JWT authentication to an Express.js API including:
- Login endpoint implementation
- Password hashing with bcrypt
- Protected routes middleware
- JWT token management
- Error handling

**Use when:** You need to secure an existing Express API

```bash
node 01-express-authentication.js
```

---

### 2. **Database Migration** (`02-database-migration.js`)
Create and review database migrations:
- Generate PostgreSQL migration scripts
- Create complex table relationships
- Review for SQL injection vulnerabilities
- Validate constraints and indexes

**Use when:** You need to manage database schema changes safely

```bash
node 02-database-migration.js
```

---

### 3. **React Refactoring** (`03-react-refactoring.js`)
Improve React component quality:
- Convert to TypeScript
- Add error boundaries
- Optimize with React.memo
- Improve accessibility
- Apply best practices

**Use when:** You want to modernize and optimize React components

```bash
node 03-react-refactoring.js
```

---

### 4. **GitHub Integration** (`04-github-integration.js`)
Automated GitHub workflow integration:
- Generate feature code
- Create pull requests automatically
- Document changes professionally
- Streamline code review process

**Use when:** You want to automate PR creation with generated code

```bash
node 04-github-integration.js
```

---

### 5. **Multi-Agent Planning** (`05-multi-agent-planning.js`)
Complex task orchestration:
- Break down large migrations
- Execute multi-step implementations
- Validate at each stage
- Provide detailed planning

**Use when:** You have complex projects requiring strategic planning

```bash
node 05-multi-agent-planning.js
```

---

### 6. **Multi-Agent Execution** (`06-multi-agent-execution.js`)
Advanced multi-agent orchestration with different AI models:
- Parallel execution for diverse perspectives
- Sequential workflows for complex tasks
- Consensus-based decision making
- Model selection per agent for optimal results

**Use when:** You want to leverage multiple AI models simultaneously for better outcomes

```bash
node 06-multi-agent-execution.js
```

---

### 7. **Feature Specification** (`07-feature-specification.js`)
Turn a high-level user story into a comprehensive technical specification:
- API endpoints and data contracts
- UI flow and wireframes
- Database schema requirements
- Acceptance criteria

**Use when:** Product managers need to hand off clear specs to engineering

```bash
node 07-feature-specification.js
```

---

### 8. **Release Notes Automation** (`08-release-notes-automation.js`)
Automatically generate polished release notes from commit history or PR
summaries:
- Categorize features, fixes, docs
- Produce stakeholder-friendly changelog
- Save time at the end of sprints

**Use when:** You need to publish release notes quickly and consistently

```bash
node 08-release-notes-automation.js
```

---

### 9. **Acceptance Criteria Generation** (`09-acceptance-criteria.js`)
Convert vague feature requests into detailed, testable acceptance criteria:
- Specific user scenarios and edge cases
- Non-functional requirements
- Success metrics and validation rules
- Technical constraints for engineering

**Use when:** Product managers need to hand off clear, testable requirements

```bash
node 09-acceptance-criteria.js
```

---

### 10. **User Research Analysis** (`10-user-research-analysis.js`)
Synthesize user research data into actionable product insights:
- Identify patterns and themes
- Generate prioritized recommendations
- Suggest quick wins vs major initiatives
- Propose success metrics and follow-up research

**Use when:** You have user interview data, surveys, or analytics to analyze

```bash
node 10-user-research-analysis.js
```

---

### 11. **Competitive Analysis** (`11-competitive-analysis.js`)
Analyze your product features against competitors:
- Compare feature implementations
- Identify differentiation opportunities
- Find market gaps to fill
- Suggest pricing and go-to-market strategies

**Use when:** Planning product positioning or feature development

```bash
node 11-competitive-analysis.js
```

---

## Setup

### Prerequisites
```bash
# Install CodeAlchemy
npm install @codealchemy/sdk @codealchemy/common

# Set up environment variables
export OPENROUTER_API_KEY=your_openrouter_api_key
export GITHUB_TOKEN=your_github_token  # For GitHub integration examples
```

### Running Examples

1. **Configure your API keys** in `.env.local`
2. **Update project paths** in the example scripts to match your project
3. **Run the example:**

```bash
# Run a specific example
node 01-express-authentication.js

# Or with Node.js TypeScript support
npx tsx 01-express-authentication.js
```

---

## Tips & Best Practices

### 1. Model Selection
Different agents are optimized for different tasks:
- **base**: General code generation and implementation
- **planner**: Breaking down complex tasks into steps
- **editor**: Code refactoring and improvements
- **reviewer**: Security and quality reviews

### 2. Prompt Engineering
- Be specific about requirements
- Include file paths and locations
- Mention constraints and best practices
- Specify language/framework versions

### 3. Error Handling
Always wrap agent calls in try-catch:
```javascript
try {
  const result = await client.run({ agent, prompt });
} catch (error) {
  console.error('CodeAlchemy error:', error);
}
```

### 4. Chain Multiple Agents
Use sequential agent calls for better results:
```javascript
const plan = await client.run({ agent: 'planner', prompt: taskDescription });
const implementation = await client.run({ agent: 'base', prompt: planDetails });
const review = await client.run({ agent: 'reviewer', prompt: implementationCode });
```

---

## Customization

All examples can be customized:
- Modify the `prompt` parameter for your specific needs
- Change the `agent` selection based on task type
- Add error handling and logging
- Integrate with your CI/CD pipeline

---

## Troubleshooting

### API Key Issues
```bash
# Verify your OpenRouter API key is set
echo $OPENROUTER_API_KEY
```

### Agent Availability
If an agent is not responding, ensure:
- API keys are correctly set
- OpenRouter is accessible
- Your account has API quota remaining

### SSH/GitHub Issues
For GitHub integration examples:
- Ensure `GITHUB_TOKEN` has proper permissions
- Check repository accessibility
- Verify branch names exist

---

## More Examples

Want to see more examples? 
- Check [README.md](../README.md) for basic usage
- Review [AGENT_DEVELOPMENT.md](../AGENT_DEVELOPMENT.md) for custom agents
- See [NPM_DEPLOYMENT.md](../NPM_DEPLOYMENT.md) for deployment examples

---

## Contributing

Found a useful pattern? Consider contributing!
1. Create a descriptive example file: `NN-description.js`
2. Add documentation to this README
3. Test with real scenarios
4. Submit a PR

---

## License

All examples are provided under the Apache License 2.0

