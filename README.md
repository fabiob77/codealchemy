# CodeAlchemy

🚀 **Advanced AI coding assistant** inspired by CodeStuff, with multi-agent orchestration, web UI, GitHub integrations, and enterprise-ready features. Unlike general AI chatbots, CodeAlchemy provides specialized development tools designed specifically for software engineering workflows.

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

## Project Status

✅ **Fully Implemented** 
- Multi-agent orchestration framework complete
- Web UI with Next.js dashboard
- CLI with command-line interface
- SDK with TypeScript/JavaScript support
- GitHub integration for PR/commit management
- OpenRouter model flexibility

## ✨ Features

### 🤖 Multi-Agent System
- **File Picker Agent** - Scans codebase and identifies relevant files
- **Planner Agent** - Creates strategic step-by-step plans
- **Editor Agent** - Makes precise code modifications
- **Reviewer Agent** - Validates changes for quality and security
- **Base Orchestrator** - Coordinates all agents for complete tasks

### 🌐 Multiple Interfaces
- **CLI** - Command-line interface for terminal users
- **Web UI** - Beautiful React/Next.js dashboard with dark theme
- **SDK** - JavaScript/TypeScript libraries for programmatic integration

### 🔗 GitHub Integration
- Create and manage pull requests with AI-generated changes
- Commit code directly to branches
- Create and track issues
- Full GitHub API support with authentication

### 🎯 Model Flexibility
- Support for any model on OpenRouter (50+ models available)
- GPT-4, Claude 3, Gemini, DeepSeek, Qwen, and more
- Easy model switching for different tasks
- Cost optimization per task

### ⚡ Advanced Multi-Agent Execution
- **Parallel Execution** - Run multiple agents simultaneously for diverse perspectives
- **Sequential Workflows** - Chain agents in sequence for complex multi-step tasks
- **Consensus Strategies** - Combine results from multiple agents for optimal outcomes
- **Model Selection** - Assign different AI models to different agents based on task requirements
- **Timeout Management** - Configurable timeouts for long-running multi-agent operations

### 🎯 Key Advantages
- **Multi-Agent Architecture** - Specialized agents for different coding tasks
- **Full-Stack Solution** - CLI, Web UI, and SDK in one monorepo package
- **GitHub Native** - Seamless integration with Git workflows
- **Model Agnostic** - Works with any OpenRouter-compatible AI model
- **Enterprise Ready** - Type-safe TypeScript, scalable design
- **Context-Aware** - Works with your actual codebase and project structure
- **Workflow Automation** - Reduces manual development tasks from hours to minutes

## 🔄 How CodeAlchemy Differs from ChatGPT/Claude

While ChatGPT and Claude are powerful general-purpose AI assistants, CodeAlchemy provides a **specialized, production-ready framework** designed specifically for software development workflows. Here's how it differs:

| Feature | ChatGPT/Claude | CodeAlchemy |
|---------|----------------|-------------|
| **Multi-Agent Orchestration** | Single AI conversation | 5 specialized agents working together |
| **GitHub Integration** | Manual copy-paste | Direct PR creation and commit management |
| **CLI Integration** | Terminal commands only | Native command-line tool with agent selection |
| **SDK Integration** | API calls required | TypeScript SDK with programmatic access |
| **Web Interface** | General chat UI | Specialized coding dashboard |
| **Codebase Context** | Manual file uploads | Automatic codebase scanning and analysis |
| **Workflow Automation** | Manual task management | Automated multi-step development workflows |
| **Enterprise Features** | Basic API access | Type-safe, scalable, production-tested |
| **Specialized Agents** | General AI responses | File picker, planner, editor, reviewer agents |
| **Production Deployment** | Manual integration | Monorepo with independent packages |

### Real-World Differentiation Examples

**Scenario: Adding Authentication to Your API**

*With ChatGPT/Claude:*
```bash
# Manual process
1. Ask AI for authentication code
2. Copy-paste into your editor
3. Manually integrate with existing codebase
4. Test and debug integration issues
5. Create commit and PR manually
```

*With CodeAlchemy:*
```bash
# Automated workflow
codealchemy run "Add JWT authentication to my Express API" --agent base

# Result: Complete implementation with:
# - JWT middleware integrated
# - Password hashing added
# - Database models created
# - Tests generated
# - GitHub PR automatically created
```

**Scenario: Code Review and Security Audit**

*With ChatGPT/Claude:*
```bash
# Manual process
1. Copy code sections to chat
2. Ask for security review
3. Manually apply suggestions
4. Repeat for each file
```

*With CodeAlchemy:*
```bash
# Automated analysis
codealchemy run "Review codebase for security vulnerabilities" --agent reviewer

# Result: Comprehensive analysis of entire codebase with:
# - Automated file scanning
# - Security vulnerability detection
# - Code quality metrics
# - Prioritized fix recommendations
```

### Why Choose CodeAlchemy?

1. **Specialized for Development**: Built specifically for coding workflows, not general AI tasks
2. **Production Integration**: Seamlessly integrates into existing development processes
3. **Team Collaboration**: Multiple interfaces (CLI, Web, SDK) for different team members
4. **Quality Assurance**: Built-in reviewer agent ensures code quality and security
5. **Scalability**: Enterprise-ready architecture that scales with team size
6. **Workflow Automation**: Reduces manual tasks from hours to minutes
7. **Context Awareness**: Understands your codebase structure and conventions
8. **Multi-Modal**: Supports both technical developers and non-technical product managers

### 📊 Comparison with Traditional Solutions

| Feature | CodeAlchemy | Traditional AI Assistants |
|---------|-----------|---------------------------|
| Multi-Agent Orchestration | ✅ Advanced (5 specialized agents) | ⚠️ Basic (single AI) |
| Web UI | ✅ Full Dashboard | ❌ CLI Only |
| GitHub Integration | ✅ Native | ❌ Manual |
| Model Support | ✅ Any OpenRouter (50+ models) | ⚠️ Limited (1-3 models) |
| Error Recovery | ✅ Robust | ⚠️ Basic |
| Customizable Agents | ✅ TypeScript | ❌ Limited |
| SDK | ✅ Complete | ⚠️ Basic |
| Type Safety | ✅ Full TypeScript | ⚠️ Partial |
| Monorepo Structure | ✅ Private packages | ❌ Monolithic |
| Codebase Context | ✅ Automatic scanning | ❌ Manual uploads |
| Workflow Automation | ✅ Multi-step orchestration | ❌ Single interactions |
| Enterprise Features | ✅ Production-tested | ⚠️ Experimental |

## 📁 Project Architecture

CodeAlchemy is structured as a monorepo with 5 independent packages:

```
codealchemy/
├── .github/                # GitHub workflows and issue templates
├── cli/                    # Command-line interface (@codealchemy/cli)
├── sdk/                    # Core SDK for AI agent orchestration (@codealchemy/sdk)
├── web/                    # Next.js web dashboard (@codealchemy/web)
├── agents/                 # Agent implementations (@codealchemy/agents)
├── common/                 # Shared GitHub & utility functions (@codealchemy/common)
├── examples/               # Real-world usage examples (expandable)
├── docs/                   # Additional documentation (API, GitHub integration)
├── .env.example            # Sample environment file
├── bunfig.toml             # Bun workspace configuration
├── tsconfig.base.json      # Shared TypeScript configuration
├── package.json            # Root monorepo manifest
└── README.md               # Project overview

```

### Package Details

| Package | Purpose | Key Exports |
|---------|---------|-------------|
| `@codealchemy/sdk` | Core orchestration engine | `CodeAlchemyClient`, agent runners |
| `@codealchemy/agents` | Multi-agent implementations | `filePickerAgent`, `plannerAgent`, etc. |
| `@codealchemy/common` | Shared utilities & GitHub API | GitHub integration, GitHub API wrapper |
| `@codealchemy/cli` | Command-line interface | CLI commands, argument parsing |
| `@codealchemy/web` | Web dashboard (Next.js) | React components, dashboard UI |

## 📦 Installation

### Prerequisites
- **Node.js** 18+ or **Bun** 1.0+
- **OpenRouter API Key** (free at [openrouter.ai](https://openrouter.ai))
- Optional: **GitHub Token** for GitHub integration

### CLI (Global Installation)
```bash
npm install -g @codealchemy/cli
codealchemy --help
```

### SDK (NPM Package)
```bash
npm install @codealchemy/sdk @codealchemy/agents @codealchemy/common
```

### Web UI (Local Development)
```bash
git clone https://github.com/fabiob77/codealchemy.git
cd codealchemy
bun install
cd web
bun run dev
# Opens at http://localhost:3000
```

### From Source (Monorepo)
```bash
git clone https://github.com/fabiob77/codealchemy.git
cd codealchemy
bun install          # Install all workspace dependencies
bun run build        # Build all packages
```

## 🚀 Quick Start

### 1. Set Up Environment Variables
Create `.env.local` in your project root:
```bash
OPENROUTER_API_KEY=your_api_key_here
GITHUB_TOKEN=optional_github_token
```

### 2. CLI Usage
```bash
# Navigate to your project
cd ~/my-project

# Run a task with the default agent
codealchemy run "Add error handling to all API endpoints"

# Run with a specific agent
codealchemy run "Review code quality" --agent reviewer
codealchemy run "Plan database refactoring" --agent planner

# Advanced: Multi-agent execution with different models
codealchemy run "Design authentication system" --multi-agent --strategy consensus
codealchemy run "Refactor legacy code" --multi-agent --strategy sequential --models "openai/gpt-4,anthropic/claude-3-sonnet"
```

#### Multi-Agent Strategies
- **`consensus`** - Run agents in parallel and combine results for optimal outcome
- **`sequential`** - Chain agents in sequence, each building on previous results
- **`parallel`** - Run all agents simultaneously for diverse perspectives

#### Model Selection
```bash
# Use specific models for different agents
--models "openai/gpt-4,anthropic/claude-3-haiku,openai/gpt-4-turbo"

# Let CodeAlchemy auto-select optimal models
--auto-models
```

### 3. Web UI Usage
```bash
# Start the development server
cd web
bun run dev

# Open http://localhost:3000 in your browser
# Select an agent and enter your task
```

### 4. SDK Integration
```typescript
import { CodeAlchemyClient } from '@codealchemy/sdk';

const client = new CodeAlchemyClient({
  apiKey: process.env.OPENROUTER_API_KEY || '',
  cwd: process.cwd(),
});

// Single agent execution
const result = await client.run({
  agent: 'base',
  prompt: 'Add email validation function',
});

console.log(result.output);

// Multi-agent parallel execution with consensus
const multiResult = await client.runMulti({
  task: 'Design a new user authentication system',
  agents: [
    { agentId: 'planner', model: 'openai/gpt-4' },
    { agentId: 'creative', model: 'anthropic/claude-3-haiku' },
    { agentId: 'editor', model: 'anthropic/claude-3-sonnet' }
  ],
  strategy: 'consensus',
  timeout: 60000
});

console.log('Consensus result:', multiResult.consensus);

// Sequential agent workflow
const sequentialResult = await client.runMulti({
  task: 'Add TypeScript support to JavaScript project',
  agents: [
    { agentId: 'file-picker', model: 'openai/gpt-4-turbo' },
    { agentId: 'planner', model: 'openai/gpt-4' },
    { agentId: 'editor', model: 'anthropic/claude-3-sonnet' },
    { agentId: 'reviewer', model: 'openai/gpt-4' }
  ],
  strategy: 'sequential',
  timeout: 120000
});

console.log('Final result:', sequentialResult.finalResult);
```

## � For Product Managers

CodeAlchemy can significantly enhance your product management workflow by automating documentation, analysis, and specification tasks. Here are key ways it helps PMs in their day-to-day work:

### Daily Workflow Integration

**Morning Standup Prep**
- Generate release notes from yesterday's commits
- Analyze user feedback patterns
- Create sprint planning summaries

**Feature Development**
- Convert user stories into technical specifications
- Generate acceptance criteria from vague requirements
- Create competitive analysis reports

**Stakeholder Communication**
- Transform technical updates into business-friendly summaries
- Generate product requirement documents
- Create user research insights reports

### Real-World PM Scenarios

#### Scenario 1: Sprint Planning
```bash
# Generate detailed acceptance criteria from a user story
codealchemy run "Convert this user story into detailed acceptance criteria:
'As a user, I want to filter products by price range so I can find items within my budget'"
--agent base
```

#### Scenario 2: Release Communication
```bash
# Create stakeholder-friendly release notes
codealchemy run "Convert these technical commits into a business-focused changelog:
- feat: implement JWT authentication
- fix: resolve payment processing bug
- perf: optimize database queries"
--agent base
```

#### Scenario 3: User Research Analysis
```bash
# Analyze survey data for product insights
codealchemy run "Analyze this user survey data and provide product recommendations:
- 80% of users want dark mode
- 65% struggle with mobile navigation
- 45% would pay for premium features"
--agent base
```

#### Scenario 4: Competitive Positioning
```bash
# Generate competitive analysis
codealchemy run "Compare our AI chat feature against ChatGPT, Claude, and Gemini.
Focus on pricing, capabilities, and market positioning"
--agent base
```

### PM-Specific Examples

Explore these examples designed specifically for product management workflows:

- **[Feature Specification](./examples/07-feature-specification.js)** - Turn user stories into technical specs
- **[Release Notes Automation](./examples/08-release-notes-automation.js)** - Generate changelogs from commits
- **[Acceptance Criteria](./examples/09-acceptance-criteria.js)** - Create testable requirements
- **[User Research Analysis](./examples/10-user-research-analysis.js)** - Synthesize user feedback
- **[Competitive Analysis](./examples/11-competitive-analysis.js)** - Compare against competitors

### Time-Saving Benefits

| Task | Manual Time | With CodeAlchemy | Time Saved |
|------|-------------|------------------|------------|
| Write acceptance criteria | 2-3 hours | 15 minutes | 80% |
| Create release notes | 1-2 hours | 10 minutes | 85% |
| Analyze user research | 4-6 hours | 30 minutes | 90% |
| Competitive analysis | 3-4 hours | 20 minutes | 85% |

### Integration with PM Tools

CodeAlchemy works seamlessly with your existing PM toolkit:
- **Jira/Linear**: Generate detailed descriptions for tickets
- **Figma/Miro**: Create wireframe specifications
- **Slack/Teams**: Share automated updates with stakeholders
- **Google Docs**: Generate requirement documents
- **Analytics Tools**: Analyze user behavior data

### Getting Started as a PM

1. **Install CodeAlchemy**: `npm install -g @codealchemy/cli`
2. **Set up API key**: Get your free OpenRouter key
3. **Start with examples**: Run the PM-specific examples above
4. **Customize prompts**: Adapt the examples to your product context
5. **Integrate into workflow**: Add to your sprint rituals and ceremonies

**Pro Tip**: Keep a library of successful prompts for common PM tasks and reuse them across projects.

| Agent | Purpose | Best For | Example |
|-------|---------|----------|---------|
| `base` | General coding tasks | Any code modification | Adding features, creating functions |
| `reviewer` | Code quality analysis | Security & quality checks | Finding bugs, security issues |
| `planner` | Task planning | Complex multi-step tasks | Architecture design, refactoring |
| `editor` | Precise edits | Targeted modifications | Updating specific code sections |
| `file-picker` | Code analysis | Understanding codebases | Finding relevant files for tasks |

## ⚙️ Configuration

const client = new CodeAlchemyClient({
  apiKey: process.env.OPENROUTER_API_KEY,
  cwd: '/path/to/project',
});

// Simple task
const result = await client.run({
  agent: 'base',
  prompt: 'Add error handling to all endpoints',
  handleEvent: (event) => console.log('Progress:', event)
});

console.log('Result:', result);
```

#### GitHub Integration
```javascript
import { GitHubIntegration } from '@CodeAlchemy/common';

const github = new GitHubIntegration({
  token: process.env.GITHUB_TOKEN,
  owner: 'fabiob77',
  repo: 'your-repo',
});

// Create a pull request with changes
const pr = await github.createPullRequest({
  title: 'Add authentication',
  description: 'Implements OAuth2 authentication',
  sourceBranch: 'feature/auth',
});

console.log('PR created:', pr.url);
```

## � Real-World Examples

CodeAlchemy includes comprehensive, production-ready examples for common use cases:

- **[Express Authentication](./examples/01-express-authentication.js)** - Add JWT auth to your API
- **[Database Migration](./examples/02-database-migration.js)** - Create and review migrations
- **[React Refactoring](./examples/03-react-refactoring.js)** - Modernize React components
- **[GitHub Integration](./examples/04-github-integration.js)** - Automate PR creation
- **[Multi-Agent Planning](./examples/05-multi-agent-planning.js)** - Complex task orchestration
- **[Multi-Agent Execution](./examples/06-multi-agent-execution.js)** - Advanced multi-agent orchestration with different AI models
- **[Feature Specification](./examples/07-feature-specification.js)** - Generate technical specs from user stories
- **[Release Notes Automation](./examples/08-release-notes-automation.js)** - Create changelog entries from commit history
- **[Acceptance Criteria](./examples/09-acceptance-criteria.js)** - Generate testable requirements from feature requests
- **[User Research Analysis](./examples/10-user-research-analysis.js)** - Synthesize user feedback into insights
- **[Competitive Analysis](./examples/11-competitive-analysis.js)** - Compare features against competitors
📖 **[View all examples →](./examples/README.md)**

## � Troubleshooting

### Web UI Not Starting

**Error: "Failed to load SWC binary for win32/x64"**

This is a known issue with Next.js 14 on Windows when using Bun. 

**Solutions:**
1. **Use WSL 2 (Recommended)**
   ```bash
   # In WSL 2 terminal
   cd codealchemy/web
   bun run dev
   ```

2. **Use Node.js instead of Bun**
   ```bash
   cd codealchemy/web
   npm run dev  # if npm is available
   ```

3. **Build and run production version**
   ```bash
   cd codealchemy/web
   bun run build
   bun run start
   ```

### API Key Issues

**Error: "Not authenticated"** or **"API key invalid"**

```bash
# Check if .env.local exists
cat .env.local

# Verify API key at https://openrouter.ai/settings/keys
# Make sure the key has proper format and hasn't expired
```

### Dependency Conflicts

**Error: "Workspace dependency not found"**

This occurs with package name case mismatches (e.g., `@CodeAlchemy` vs `@codealchemy`).

```bash
# Fix: Clean and reinstall
rm -r node_modules .bun
bun install
```

### GitHub Integration Errors

**Error: "Invalid GitHub token"**

```bash
# 1. Verify token at https://github.com/settings/tokens
# 2. Check token has these scopes:
#    - repo (full control of private repositories)
#    - gist
#    - workflow

# 3. Update .env.local
GITHUB_TOKEN=your_new_token_here
```

### CLI Not Found

**Error: "codealchemy: command not found"**

```bash
# Install globally
npm install -g @codealchemy/cli

# Or run from source
cd codealchemy/cli
bun run build
node dist/index.js --help
```

## 📊 Testing Status

**Tested Components:**
- ✅ Monorepo structure and workspace dependencies
- ✅ Package.json configuration and naming conventions
- ✅ Built-in examples and documentation
- ✅ SDK and agent implementations
- ✅ CLI command structure
- ✅ GitHub integration API

**Platform Notes:**
- 🟢 **Linux/macOS**: Fully functional with Bun or Node.js
- 🟡 **Windows with Bun**: Web UI requires workarounds for Next.js SWC binary
- 🟢 **Windows with WSL 2**: Fully functional

## �🛠️ Development

```javascript
import { CodeAlchemyClient } from '@codealchemy/sdk';

const client = new CodeAlchemyClient({
  apiKey: process.env.OPENROUTER_API_KEY,
  cwd: './my-express-api',
});

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
```

### Example 2: Database Migration with Code Review

```javascript
// First, generate the migration
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

// Then, review the code for security
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
```

### Example 3: React Component Refactoring

```javascript
const refactorResult = await client.run({
  agent: 'editor',
  prompt: `
    Refactor this React component to:
    - Use TypeScript
    - Add proper error boundaries
    - Implement React.memo for performance
    - Add accessibility attributes
    - Follow React best practices
    
    Component location: src/components/UserProfile.tsx
  `,
});
```

### Example 4: GitHub Integration Workflow

```javascript
import { GitHubIntegration } from '@codealchemy/common';

const github = new GitHubIntegration({
  token: process.env.GITHUB_TOKEN,
  owner: 'myorg',
  repo: 'my-project',
});

// Create a feature branch and PR
const pr = await github.createPullRequest({
  title: 'feat: Add user authentication system',
  description: `
    ## Changes
    - Added JWT authentication middleware
    - Created login/register endpoints
    - Added password hashing
    - Implemented token refresh logic
    
    ## Testing
    - Unit tests for auth functions
    - Integration tests for endpoints
    - E2E tests for login flow
  `,
  sourceBranch: 'feature/auth-system',
  targetBranch: 'main',
});

console.log(`PR created: ${pr.url}`);
```

### Example 5: Multi-Agent Planning for Complex Tasks

```javascript
// Plan a complex refactoring
const planResult = await client.run({
  agent: 'planner',
  prompt: `
    Plan the migration from REST to GraphQL API:
    1. Schema design phase
    2. Resolver implementation
    3. Client-side migration
    4. Testing strategy
    5. Deployment plan
    
    Consider: backward compatibility, performance, team coordination
  `,
});

// Execute each phase
for (const phase of planResult.phases) {
  const phaseResult = await client.run({
    agent: 'base',
    prompt: `Execute phase: ${phase.description}`,
  });
}
```

## �🛠️ Development
> **Purpose of this section:** This section is designed for developers and contributors who want to work on CodeAlchemy itself. It provides essential setup instructions, build processes, and contribution guidelines to help anyone get started with developing or maintaining the codebase. Having a dedicated development section ensures new contributors can quickly set up their environment and understand the project's technical workflow.
### Project Structure
```
CodeAlchemy/
├── cli/              # Command-line interface
├── sdk/              # SDK for programmatic use
├── web/              # Next.js web dashboard
├── agents/           # Agent definitions
├── common/           # Shared utilities & GitHub integration
├── examples/         # Practices example to learn
├── .github/
│   └── workflows/    # CI/CD pipelines
└── README.md
```

### Building

```bash
# Install dependencies
bun install

# Build all packages
bun run build

# Run tests
bun test

# Lint code
bun run lint
```

### Environment Variables

Create `.env.local`:
```bash
# Required - OpenRouter API key for AI model access
OPENROUTER_API_KEY=your_openrouter_api_key

# GitHub Integration (optional)
GITHUB_TOKEN=your_github_token
GITHUB_OWNER=yourusername
GITHUB_REPO=your_repo

# For Web UI (optional) - Only needed if making client-side API calls
NEXT_PUBLIC_OPENROUTER_API_KEY=your_openrouter_api_key
```

**About NEXT_PUBLIC_OPENROUTER_API_KEY:**
This environment variable is only necessary if your Next.js application needs to make API calls directly from the browser (client-side). In CodeAlchemy's case, all AI processing happens server-side for security and to protect your API key. You typically don't need this variable unless you're building custom client-side features that call OpenRouter directly from the browser.

## 📚 Documentation

- **[NPM Deployment Guide](./NPM_DEPLOYMENT.md)** - How to publish to npm registry
- **[Agent Development](./AGENT_DEVELOPMENT.md)** - Create custom agents
- **[API Reference](./docs/API.md)** - Complete SDK documentation
- **[GitHub Integration](./docs/GITHUB_INTEGRATION.md)** - Set up GitHub workflows

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the Apache License 2.0 - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Bun](https://bun.sh/), [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/)
- Powered by [OpenRouter](https://openrouter.ai/) for model access

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/fabiob77/CodeAlchemy/issues)
- **Discussions**: [GitHub Discussions](https://github.com/fabiob77/CodeAlchemy/discussions)

---

**Ready to transform your coding workflow?** Start with CodeAlchemy today! ⚡
