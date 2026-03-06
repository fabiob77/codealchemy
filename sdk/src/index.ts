import { AgentDefinition } from '@codealchemy/common';

export interface CodeAlchemyClientOptions {
  apiKey: string;
  cwd: string;
  onError?: (error: Error) => void;
  defaultModel?: string; // Allow overriding default model
}

export interface MultiAgentTask {
  agents: string[]; // Array of agent IDs to run
  prompt: string;
  strategy?: 'parallel' | 'sequential' | 'consensus'; // Execution strategy
  models?: Record<string, string>; // Override models per agent
  timeout?: number; // Timeout for parallel execution
}

export class CodeAlchemyClient {
  constructor(private options: CodeAlchemyClientOptions) {}

  async run({
    agent,
    prompt,
    handleEvent,
  }: {
    agent: string;
    prompt: string;
    handleEvent?: (event: any) => void;
  }) {
    // Implementation for running single agent
    console.log(`Running agent ${agent} with prompt: ${prompt}`);
    // Simulate response
    return { result: 'Code changes applied successfully' };
  }

  /**
   * Run multiple agents simultaneously or in different strategies
   */
  async runMulti({
    agents,
    prompt,
    strategy = 'parallel',
    models = {},
    timeout = 30000,
    handleEvent,
  }: MultiAgentTask & { handleEvent?: (event: any) => void }) {
    console.log(`Running ${agents.length} agents with ${strategy} strategy`);

    if (strategy === 'parallel') {
      return this.runParallelAgents(agents, prompt, models, timeout);
    } else if (strategy === 'consensus') {
      return this.runConsensusAgents(agents, prompt, models);
    } else {
      return this.runSequentialAgents(agents, prompt, models);
    }
  }

  private async runParallelAgents(
    agents: string[],
    prompt: string,
    models: Record<string, string>,
    timeout: number
  ) {
    const promises = agents.map(agentId =>
      this.runSingleAgent(agentId, prompt, models[agentId])
    );

    try {
      const results = await Promise.race([
        Promise.all(promises),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Parallel execution timeout')), timeout)
        )
      ]);

      return {
        strategy: 'parallel',
        results: results as any[],
        bestResult: this.selectBestResult(results as any[]),
      };
    } catch (error) {
      return {
        strategy: 'parallel',
        error: error instanceof Error ? error.message : String(error),
        partialResults: [], // Any completed results
      };
    }
  }

  private async runConsensusAgents(
    agents: string[],
    prompt: string,
    models: Record<string, string>
  ) {
    // Run all agents and have them vote on the best approach
    const results = await Promise.all(
      agents.map(agentId => this.runSingleAgent(agentId, prompt, models[agentId]))
    );

    // Consensus agent reviews all results and picks the best
    const consensusPrompt = `
      Review these ${agents.length} different approaches to: "${prompt}"

      Results from each agent:
      ${results.map((r, i) => `Agent ${i + 1} (${agents[i]}): ${r.result}`).join('\n\n')}

      Please:
      1. Compare the approaches
      2. Identify strengths and weaknesses of each
      3. Recommend the best solution with reasoning
      4. Provide a final, improved solution that combines the best elements
    `;

    const consensusResult = await this.runSingleAgent('reviewer', consensusPrompt, 'openai/gpt-4');

    return {
      strategy: 'consensus',
      individualResults: results,
      consensusResult,
      finalRecommendation: consensusResult.result,
    };
  }

  private async runSequentialAgents(
    agents: string[],
    prompt: string,
    models: Record<string, string>
  ) {
    const results = [];
    let currentPrompt = prompt;

    for (const agentId of agents) {
      const result = await this.runSingleAgent(agentId, currentPrompt, models[agentId]);
      results.push(result);

      // Use the result of the previous agent as input for the next
      currentPrompt = `Building on the previous result: ${result.result}\n\nOriginal task: ${prompt}`;
    }

    return {
      strategy: 'sequential',
      results,
      finalResult: results[results.length - 1],
    };
  }

  private async runSingleAgent(agentId: string, prompt: string, model?: string) {
    const modelToUse = model || this.options.defaultModel || 'openai/gpt-4';
    console.log(`Running ${agentId} with ${modelToUse}`);

    // Simulate agent execution with different models
    return {
      agent: agentId,
      model: modelToUse,
      result: `Response from ${agentId} using ${modelToUse}`,
      confidence: Math.random() * 0.5 + 0.5, // 0.5-1.0 confidence score
    };
  }

  private selectBestResult(results: any[]): any {
    // Simple selection based on confidence score
    return results.reduce((best, current) =>
      current.confidence > best.confidence ? current : best
    );
  }
}
