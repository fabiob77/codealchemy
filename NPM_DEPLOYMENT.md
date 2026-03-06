# npm Registry Deployment Guide for CodeAlchemy

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://npmjs.com)
2. **GitHub Account**: Already have one (you're reading this!)
3. **Access Token**: Create an npm access token for CI/CD

## Step 1: Create npm Access Token

1. Go to [npmjs.com/settings/tokens](https://www.npmjs.com/settings/tokens)
2. Click "Create New Token"
3. Select "Automation" (for CI/CD)
4. Copy the token

## Step 2: Add Secret to GitHub

1. Go to your GitHub repository
2. Navigate to **Settings > Secrets and variables > Actions**
3. Click "New repository secret"
4. Add `NPM_TOKEN` with your npm token value

## Step 3: Update Repository URLs

Update each `package.json` repository URL from:
```
"url": "https://github.com/fabiob77/codealchemy.git"
```

## Step 4: Tag and Push Release

```bash
# Update version in package.json files
# Then tag a release

git tag -a v1.0.1 -m "Release 1.0.1"
git push origin v1.0.1
```

This automatically triggers the publish workflow!

## Step 5: Verify Publication

Check npm registry:
```bash
npm view @codealchemy/cli
npm view @codealchemy/sdk
npm view @codealchemy/agents
npm view @codealchemy/common
```

## Installation After Publication

Users can then install with:

```bash
# CLI
npm install -g @codealchemy/cli
codealchemy --help

# SDK
npm install @codealchemy/sdk

# Agents
npm install @codealchemy/agents

# Common utilities
npm install @codealchemy/common
```

## Scoped Package Setup

All packages are under `@codealchemy` scope. To publish scoped packages:

1. Ensure all packages have scope in name: `@codealchemy/package-name`
2. For public publish, add to each package.json:
   ```json
   {
     "publishConfig": {
       "access": "public"
     }
   }
   ```

This is already configured in the publish workflow!

## Versioning Strategy

Follow Semantic Versioning:
- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (1.1.0): New features
- **PATCH** (1.0.1): Bug fixes

Update all packages together for consistency.

## Continuous Deployment

The GitHub Actions workflow (`publish.yml`) automatically:
- Installs dependencies
- Builds all packages
- Publishes to npm on git tag
- Works with scoped packages

## Troubleshooting

**"npm ERR! 403 Forbidden"**
- Verify NPM_TOKEN is set correctly
- Check token has publish permissions

**"npm ERR! not found: package@version"**
- Ensure version is incremented
- Check package.json name is correct

**Build failures**
- Run `bun install && bun run build` locally first
- Check all TypeScript compiles
