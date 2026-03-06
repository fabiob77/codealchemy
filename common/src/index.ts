// Common utilities for CodeAlchemy

export interface AgentDefinition {
  id: string;
  displayName: string;
  model: string;
  instructionsPrompt: string;
  toolNames: string[];
}

export interface ToolDefinition {
  name: string;
  description: string;
  parameters: any;
}

export class Logger {
  static info(message: string) {
    console.log(`[INFO] ${message}`);
  }

  static error(message: string) {
    console.error(`[ERROR] ${message}`);
  }
}

// Export GitHub integration
export { GitHubIntegration, type GitHubConfig, type PullRequestOptions, type CommitOptions } from './github';




