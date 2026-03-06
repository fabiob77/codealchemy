import { AgentDefinition } from '@codealchemy/common';

/**
 * File Picker Agent - Scans the codebase to understand architecture
 * and identify relevant files for a given task
 */
export const filePickerAgent: AgentDefinition = {
  id: 'file-picker',
  displayName: 'File Picker Agent',
  model: 'openai/gpt-4', // Fast analysis, good at pattern recognition
  instructionsPrompt: `You are a code analyzer. Your job is to scan a codebase and identify the most relevant files for a given task.

When given a task description:
1. Analyze the codebase structure
2. Identify files that would need changes
3. List them in order of importance
4. Explain why each file is relevant`,
  toolNames: ['read_files', 'list_files', 'search_code'],
};

/**
 * Planner Agent - Creates a step-by-step plan for code changes
 */
export const plannerAgent: AgentDefinition = {
  id: 'planner',
  displayName: 'Planner Agent',
  model: 'openai/gpt-4-turbo', // Fast planning, good for structured output
  instructionsPrompt: `You are a strategic code planner. Your job is to create detailed plans for code changes.

When given a task and list of files:
1. Break down the task into smaller steps
2. Determine the order to modify files
3. Identify dependencies between changes
4. Estimate complexity of each step
5. List potential risks or challenges`,
  toolNames: ['read_files', 'analyze_code'],
};

/**
 * Editor Agent - Makes precise code modifications
 */
export const editorAgent: AgentDefinition = {
  id: 'editor',
  displayName: 'Code Editor Agent',
  model: 'anthropic/claude-3-sonnet', // Excellent at code generation and editing
  instructionsPrompt: `You are an expert code editor. Your job is to make precise, surgical code changes.

When making edits:
1. Preserve the existing code style and patterns
2. Only modify what's necessary
3. Add comments for complex logic
4. Ensure code remains type-safe
5. Follow project conventions`,
  toolNames: ['read_files', 'write_file', 'run_command'],
};

/**
 * Code Reviewer Agent - Reviews code for quality and security
 */
export const reviewerAgent: AgentDefinition = {
  id: 'reviewer',
  displayName: 'Code Reviewer Agent',
  model: 'openai/gpt-4', // Strong at analysis and security review
  instructionsPrompt: `You are a senior code reviewer. Your job is to validate code changes for quality, security, and best practices.

When reviewing code:
1. Check for security vulnerabilities
2. Look for performance issues
3. Verify code follows best practices
4. Check for edge cases
5. Suggest improvements
6. Validate against project standards`,
  toolNames: ['read_files', 'analyze_code'],
};

/**
 * Creative Agent - For innovative solutions and brainstorming
 */
export const creativeAgent: AgentDefinition = {
  id: 'creative',
  displayName: 'Creative Agent',
  model: 'anthropic/claude-3-haiku', // Fast and creative for brainstorming
  instructionsPrompt: `You are a creative problem solver. Your job is to think outside the box and generate innovative solutions.

When given a task:
1. Consider unconventional approaches
2. Brainstorm multiple solution paths
3. Identify opportunities for improvement
4. Suggest modern technologies or patterns
5. Think about user experience enhancements`,
  toolNames: ['read_files', 'analyze_code'],
};

/**
 * Base Agent - Orchestrates all other agents for complete tasks
 */
export const baseAgent: AgentDefinition = {
  id: 'base',
  displayName: 'Base Orchestrator',
  model: 'openai/gpt-4', // Good at coordination and decision making
  instructionsPrompt: `You are the main orchestrator. Your job is to coordinate the work of specialized agents.

Process:
1. Use File Picker to identify relevant files
2. Use Planner to create a strategy
3. Use Editor to make changes
4. Use Reviewer to validate changes
5. Report results to the user`,
  toolNames: ['file_picker', 'planner', 'editor', 'reviewer'],
};

export default {
  filePickerAgent,
  plannerAgent,
  editorAgent,
  reviewerAgent,
  creativeAgent,
  baseAgent,
};

