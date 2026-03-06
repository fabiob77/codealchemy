import { AgentDefinition } from '@codealchemy/common';

export const baseAgent: AgentDefinition = {
  id: 'base',
  displayName: 'Base Coding Agent',
  model: 'openai/gpt-4',
  instructionsPrompt: 'You are an expert coding assistant. Help with coding tasks.',
  toolNames: ['read_files', 'write_file', 'run_command'],
};

export const reviewerAgent: AgentDefinition = {
  id: 'reviewer',
  displayName: 'Code Reviewer',
  model: 'anthropic/claude-3',
  instructionsPrompt: 'Review code for bugs, security issues, and best practices.',
  toolNames: ['read_files', 'analyze_code'],
};

// Import specialized agents
export { filePickerAgent, plannerAgent, editorAgent } from './implementations';

export const allAgents = [baseAgent, reviewerAgent];

