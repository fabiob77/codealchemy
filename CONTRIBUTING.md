# Contributing to CodeAlchemy

First off, thank you for considering a contribution to CodeAlchemy! It's people like you that make CodeAlchemy such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots if possible**
* **Include your environment details** (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the TypeScript / JavaScript styleguides
* Include appropriate test cases
* End all files with a newline

## Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/fabiob77/codealchemy.git
   cd codealchemy
   ```

2. **Install Dependencies**
   ```bash
   bun install
   ```

3. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Add tests for new features
   - Update documentation as needed

5. **Build and Test**
   ```bash
   bun run build
   bun test
   bun run lint
   ```

6. **Commit and Push**
   ```bash
   git commit -m "Description of changes"
   git push origin feature/your-feature-name
   ```

7. **Create Pull Request**
   - Use a clear title and description
   - Link any related issues
   - Explain your changes clearly

## Styleguides

### Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### TypeScript/JavaScript

* Use TypeScript for all new code
* Add proper type annotations
* Use 2 spaces for indentation
* Use `const` and `let`, avoid `var`
* Use arrow functions when appropriate
* Add JSDoc comments for public functions
* Follow the existing code style

### Documentation

* Use clear, simple language
* Include code examples where helpful
* Update README.md if adding new features
* Add inline comments for complex logic

## Project Structure

```
codealchemy/
├── cli/              # CLI package
├── sdk/              # SDK package
├── web/              # Web UI (Next.js)
├── agents/           # Agent definitions
├── common/           # Shared utilities
├── examples/         # Practice examples to learn
├── .github/
│   ├── workflows/    # CI/CD workflows
│   └── copilot-instructions.md
├── docs/             # Documentation
└── tests/            # Tests
```

## Running Tests

```bash
# Run all tests
bun test

# Run specific test file
bun test path/to/test.ts

# Watch mode
bun test --watch
```

## Issue and PR Labels

* **bug** - Something isn't working
* **enhancement** - New feature or request
* **documentation** - Improvements or additions to documentation
* **good first issue** - Good for newcomers
* **help wanted** - Extra attention is needed

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

## Questions?

Don't hesitate to ask questions! You can:
- Open an issue with the question label
- Join our GitHub Discussions

Thank you for contributing to CodeAlchemy! 🎉
