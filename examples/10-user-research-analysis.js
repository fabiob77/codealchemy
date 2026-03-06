import { CodeAlchemyClient } from '@codealchemy/sdk';

/**
 * Example: Analyze user research data and generate product insights.
 *
 * Product managers collect various forms of user research (surveys, interviews,
 * analytics data). This script helps synthesize that data into actionable
 * product insights and recommendations.
 */

async function run() {
  const client = new CodeAlchemyClient({
    apiKey: process.env.OPENROUTER_API_KEY || '',
    cwd: process.cwd(),
  });

  const userResearchData = `
User Interview Findings:
- 70% of users abandon checkout due to complex forms
- Users want social proof before purchasing
- Mobile users struggle with product comparison
- Price sensitivity is high for first-time buyers

Survey Results:
- 85% want guest checkout option
- 60% would pay for premium recommendations
- 45% use mobile exclusively for shopping

Analytics Data:
- Cart abandonment rate: 68%
- Mobile conversion: 2.1% vs Desktop: 4.3%
- Average session time: 3.2 minutes
- Top exit pages: Product comparison, checkout
`;

  const prompt = `
Analyze this user research data and generate product insights.
Provide:
- Key patterns and themes
- Prioritized recommendations
- Quick wins vs major initiatives
- Success metrics to track
- Follow-up research questions

Research data: ${userResearchData}
`;

  const result = await client.run({ agent: 'base', prompt });
  console.log('=== Product Insights from User Research ===');
  console.log(result.output);
}

run().catch(console.error);
