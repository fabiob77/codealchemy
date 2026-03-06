import { useState } from 'react';
import { CodeAlchemyClient } from '@codealchemy/sdk';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState('base');

  const handleRun = async () => {
    setLoading(true);
    const client = new CodeAlchemyClient({
      apiKey: process.env.NEXT_PUBLIC_CODECRAFT_API_KEY || '',
      cwd: '/',
    });

    try {
      const res = await client.run({ agent: selectedAgent, prompt });
      setResult(res.result);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container as any}>
      {/* Header */}
      <div style={styles.header as any}>
        <div style={styles.headerContent as any}>
          <h1 style={styles.title as any}>⚡ CodeCraft</h1>
          <p style={styles.subtitle as any}>AI-Powered Code Assistant</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.main as any}>
        <div style={styles.grid as any}>
          {/* Input Section */}
          <div style={styles.card as any}>
            <h2 style={styles.cardTitle as any}>Enter Your Task</h2>
            
            <div style={styles.formGroup as any}>
              <label style={styles.label as any}>Select Agent:</label>
              <select 
                value={selectedAgent} 
                onChange={(e) => setSelectedAgent(e.target.value)}
                style={styles.select as any}
              >
                <option value="base">Base Agent (GPT-4)</option>
                <option value="reviewer">Code Reviewer (Claude)</option>
                <option value="planner">Planner</option>
                <option value="editor">Editor</option>
              </select>
            </div>

            <div style={styles.formGroup as any}>
              <label style={styles.label as any}>Describe what you need:</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Add authentication to my API, Fix SQL injection, Refactor database code..."
                style={styles.textarea as any}
                disabled={loading}
              />
            </div>

            <button 
              onClick={handleRun}
              disabled={loading || !prompt.trim()}
              style={{
                ...styles.button,
                ...(loading || !prompt.trim() ? styles.buttonDisabled : {})
              }}
            >
              {loading ? '⏳ Processing...' : '▶ Run Task'}
            </button>
          </div>

          {/* Results Section */}
          <div style={styles.card as any}>
            <h2 style={styles.cardTitle as any}>Results</h2>
            {result ? (
              <div style={styles.resultBox as any}>
                <pre style={styles.resultText as any}>{result}</pre>
              </div>
            ) : (
              <div style={styles.emptyState as any}>
                <p style={styles.emptyText as any}>Results will appear here...</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer as any}>
        <p>&copy; 2026 CodeCraft. Powered by Multi-Agent AI System.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '40px 20px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.5em',
    margin: '0 0 8px 0',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.1em',
    margin: '0',
    opacity: 0.9,
  },
  main: {
    flex: 1,
    padding: '40px 20px',
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '8px',
    padding: '24px',
    border: '1px solid #334155',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  cardTitle: {
    fontSize: '1.3em',
    margin: '0 0 20px 0',
    color: '#60a5fa',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '0.9em',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#cbd5e1',
  },
  select: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #475569',
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
    fontSize: '0.95em',
    fontFamily: 'inherit',
  },
  textarea: {
    width: '100%',
    height: '200px',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #475569',
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
    fontSize: '0.95em',
    fontFamily: 'monospace',
    resize: 'vertical',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '12px 24px',
    fontSize: '1em',
    fontWeight: 'bold',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#667eea',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px',
  },
  buttonDisabled: {
    backgroundColor: '#475569',
    cursor: 'not-allowed',
    opacity: 0.6,
  },
  resultBox: {
    backgroundColor: '#0f172a',
    borderRadius: '6px',
    padding: '16px',
    border: '1px solid #475569',
    maxHeight: '400px',
    overflowY: 'auto',
  },
  resultText: {
    margin: '0',
    fontSize: '0.85em',
    lineHeight: '1.6',
    color: '#4ade80',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  },
  emptyState: {
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: '#64748b',
    fontSize: '0.95em',
  },
  footer: {
    backgroundColor: '#1e293b',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #334155',
    color: '#64748b',
    fontSize: '0.9em',
  },
};