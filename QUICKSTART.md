# Quick Start Guide for CodeAlchemy

Get started with CodeAlchemy in 5 minutes!

## Prerequisites

- **Bun** 1.0+ or **Node.js** 18+
- **OpenRouter API Key** (free at [openrouter.ai](https://openrouter.ai))
- **Git** for cloning the repository
- Optional: **GitHub Token** for GitHub integration

## 1. Get Your OpenRouter API Key

1. Visit [openrouter.ai](https://openrouter.ai)
2. Sign up or log in to your account
3. Go to **Account Settings** → **Keys**
4. Click **Create New Key**
5. Copy your API key and keep it secure

**Why OpenRouter?**
- Access to 50+ AI models (GPT-4, Claude 3, Gemini, DeepSeek, etc.)
- Single unified API for all models
- Per-request model selection
- Transparent pricing and usage tracking

**Why CodeAlchemy vs ChatGPT/Claude?**
Unlike general AI assistants, CodeAlchemy provides specialized development tools with multi-agent orchestration, GitHub integration, and production-ready workflows designed specifically for software teams.

## 2. Installation Options

### Option A: Global CLI (Recommended for Quick Start)
```bash
npm install -g @codealchemy/cli
codealchemy --help
```

### Option B: Local Development (Full Features)
```bash
git clone https://github.com/fabiob77/codealchemy.git
cd codealchemy
bun install
bun run build
```

### Option C: As an SDK (For Integration)
```bash
npm install @codealchemy/sdk @codealchemy/agents @codealchemy/common
```

## 3. Configuration

Create `.env.local` in your home directory or project root:

```bash
# REQUIRED - Your OpenRouter API key
OPENROUTER_API_KEY=sk_or_your_api_key_here

# OPTIONAL - For GitHub integration
GITHUB_TOKEN=gh_your_github_token_here
```

**Windows Users:**
- Save as `%USERPROFILE%\.env.local` for global access
- Or in your project root for project-specific access

**Linux/macOS Users:**
- Save as `~/.env.local` for global access
- Or in your project root for project-specific access

## 4. Your First Task - CLI

### Simple Example
```bash
cd ~/my-project
codealchemy run "Add input validation to the login form"
```

### With Specific Agent
```bash
# Review code quality
codealchemy run "Is there any security issue in my authentication code?" --agent reviewer

# Plan a large refactoring
codealchemy run "Plan how to migrate from Express to Fastify" --agent planner

# Make specific edits
codealchemy run "Add TypeScript types to util functions" --agent editor
```

### Full Example
```bash
# Navigate to your project
cd ~/my-express-api

# Generate code
codealchemy run "Add JWT authentication with the following:
- Login endpoint at POST /api/auth/login
- Protected routes middleware
- Password hashing with bcrypt
- 24-hour token expiration
- Proper error handling"
```

## 5. Your First Task - Web UI

```bash
# Start the development server
cd codealchemy/web
bun run dev

# Wait for "Local: http://localhost:3000"
# Open http://localhost:3000 in your browser
```

**Using the Web UI:**
1. Select an agent from the dropdown
2. Enter your task in the text area
3. Click "Run Task"
4. Monitor progress in real-time
5. Review results in the terminal-style output panel

### Web UI Features
- 🎯 **Agent Selection** - Choose the best agent for your task
- ⚡ **Real-time Output** - See progress as it happens
- 💾 **History** - Review previous tasks
- 🎨 **Dark Theme** - Eye-friendly interface for long sessions

## 6. Your First Task - SDK

Create `codealchemy-test.ts`:
```typescript
import { CodeAlchemyClient } from '@codealchemy/sdk';

const client = new CodeAlchemyClient({
  apiKey: process.env.OPENROUTER_API_KEY || '',
  cwd: process.cwd(),
});

const result = await client.run({
  agent: 'base',
  prompt: 'Create a function to validate email addresses',
});

console.log('Generated Code:');
console.log(result.output);
console.log('\nResult:', result.status);
```

Run it:
```bash
bun run codealchemy-test.ts
```

### SDK Advanced Usage
```typescript
import { CodeAlchemyClient } from '@codealchemy/sdk';

const client = new CodeAlchemyClient({
  apiKey: process.env.OPENROUTER_API_KEY || '',
  cwd: process.cwd(),
});

// With progress tracking
const result = await client.run({
  agent: 'planner',
  prompt: 'Plan database schema redesign',
  handleEvent: (event) => {
    console.log(`[${event.type}] ${event.message}`);
  },
});

// Access detailed results
if (result.status === 'success') {
  console.log('Plans created:', result.output);
}
```

## 7. Available Agents

| Agent | Use Case | Example |
|-------|----------|---------|
| **base** | General coding tasks | Adding features, creating functions, bug fixes |
| **reviewer** | Code quality & security | Finding vulnerabilities, style issues, performance |
| **planner** | Strategic design | Refactoring plans, migrations, architecture |
| **editor** | Precise modifications | Updating specific code, formatting, refactoring |
| **file-picker** | Code analysis | Finding relevant files, understanding structure |

## 8. Common Tasks

### Add Authentication
```bash
codealchemy run "Add OAuth2 authentication to my web app"
```

### Fix Security Issues
```bash
codealchemy run "Find and fix SQL injection vulnerabilities" --agent reviewer
```

### Refactor Code
```bash
codealchemy run "Refactor database layer for better performance" --agent planner
```

### Add Tests
```bash
codealchemy run "Add unit tests for the user service with 80% coverage"
```

### Documentation
```bash
codealchemy run "Generate API documentation from code comments"
```

## 9. Real-World Examples

CodeAlchemy includes practical examples in the `examples/` folder:

### For Developers
- **[Express.js Authentication](./examples/01-express-authentication.js)** - Add JWT auth to your API
- **[Database Migration](./examples/02-database-migration.js)** - Create and review migrations
- **[React Refactoring](./examples/03-react-refactoring.js)** - Modernize React components
- **[GitHub Integration](./examples/04-github-integration.js)** - Automate PR creation
- **[Multi-Agent Planning](./examples/05-multi-agent-planning.js)** - Complex task planning and execution
- **[Multi-Agent Execution](./examples/06-multi-agent-execution.js)** - Advanced multi-agent orchestration with different AI models

### For Product Managers
- **[Feature Specification](./examples/07-feature-specification.js)** - Turn user stories into technical specs
- **[Release Notes Automation](./examples/08-release-notes-automation.js)** - Generate changelogs from commits
- **[Acceptance Criteria](./examples/09-acceptance-criteria.js)** - Create testable requirements
- **[User Research Analysis](./examples/10-user-research-analysis.js)** - Synthesize user feedback
- **[Competitive Analysis](./examples/11-competitive-analysis.js)** - Compare against competitors

See [examples/README.md](./examples/README.md) for detailed setup.

## 10. Tips & Tricks

### Prompt Best Practices
```bash
# ✅ GOOD - Specific and detailed
codealchemy run "Add password reset endpoint at POST /api/auth/reset
with email verification and token expiration of 1 hour"

# ❌ BAD - Vague and unclear
codealchemy run "Fix password stuff"
```

### Using Multiple Agents
```bash
# 1. Plan first
codealchemy run "Plan a React migration from JavaScript to TypeScript" --agent planner

# 2. Execute
codealchemy run "Convert React components to TypeScript" --agent editor

# 3. Review
codealchemy run "Check for TypeScript errors and best practices" --agent reviewer
```

### Working with GitHub
```bash
# Set up GitHub token first
export GITHUB_TOKEN=your_token_here

# Then use in tasks
codealchemy run "Create a pull request adding authentication to main branch"
```

### Model Selection in Code
```typescript
const client = new CodeAlchemyClient({
  apiKey: process.env.OPENROUTER_API_KEY,
  cwd: '/my/project',
  model: 'openai/gpt-4',  // Use specific model
});
```

## 11. Troubleshooting

### "API Key Invalid"
```bash
# Check your .env.local file
cat .env.local

# Verify at https://openrouter.ai/settings/keys
# Make sure key format starts with: sk_or_...
```

### "Module not found: @codealchemy/xxx"
```bash
# Reinstall dependencies
rm -rf node_modules
bun install
```

### "Web UI won't start (SWC error on Windows)"
Solution 1: Use WSL 2
```bash
# Open WSL 2 terminal and run
cd codealchemy/web
bun run dev
```

Solution 2: Use production build
```bash
bun run build
bun run start
```

### "Command not found: codealchemy"
```bash
# Reinstall globally
npm install -g @codealchemy/cli

# Or use bun
bun install -g @codealchemy/cli
```

### GitHub Integration Not Working
```bash
# Verify token at https://github.com/settings/tokens
# Required scopes:
#   - repo (full control)
#   - gist
#   - workflow

# Update your .env.local
GITHUB_TOKEN=ghp_your_new_token_here
```

## 12. Next Steps

1. **Explore Examples**: Check out the `examples/` folder for more complex use cases
2. **Create Custom Agents**: See [AGENT_DEVELOPMENT.md](./AGENT_DEVELOPMENT.md)
3. **GitHub Integration**: Read [GitHub setup guide](./docs/GITHUB_INTEGRATION.md)
4. **Deploy**: Publish your own version (see [NPM_DEPLOYMENT.md](./NPM_DEPLOYMENT.md))

## 13. Getting Help

- 📖 **Documentation**: [README.md](./README.md) - Full feature documentation
- 🐛 **Issues**: [GitHub Issues](https://github.com/fabiob77/codealchemy/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/fabiob77/codealchemy/discussions)

## 14. Performance Tips

### For Large Codebases
- Use **file-picker agent** first to identify relevant files
- Then use **editor agent** with specific file paths
- Finally **reviewer agent** to validate changes

### Cost Optimization
- Use faster models for initial drafts
- Use advanced models for final review
- Batch related tasks together

### Quality Improvements
- Always run **reviewer agent** on sensitive code
- Use **planner agent** for architectural changes
- Include detailed requirements in your prompts

---

**Ready to supercharge your coding?** Start with any of the examples above! ⚡

For more detailed information, see [README.md](./README.md)
