import { CodeAlchemyClient } from '@codealchemy/sdk';

/**
 * Example: Generate competitive analysis from product requirements.
 *
 * Product managers need to understand how their product compares to competitors.
 * This script helps analyze a feature set against known competitors and
 * identify differentiation opportunities.
 */

async function run() {
  const client = new CodeAlchemyClient({
    apiKey: process.env.OPENROUTER_API_KEY || '',
    cwd: process.cwd(),
  });

  const productFeatures = `
Our e-commerce platform features:
- AI-powered product recommendations
- One-click checkout
- Mobile-first design
- Social commerce integration
- Advanced analytics dashboard
`;

  const competitors = `
Competitors: Amazon, Shopify, Etsy, eBay
`;

  const prompt = `
Perform a competitive analysis for our product features.
For each feature, analyze:
- How competitors implement similar features
- Our differentiation opportunities
- Market gaps we can fill
- Pricing implications
- Go-to-market strategy suggestions

Our features: ${productFeatures}
Competitors: ${competitors}
`;

  const result = await client.run({ agent: 'base', prompt });
  console.log('=== Competitive Analysis ===');
  console.log(result.output);
}

run().catch(console.error);
