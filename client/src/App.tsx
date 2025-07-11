
import { useState, useEffect } from 'react';
import { trpc } from '@/utils/trpc';
import type { HelloWorld } from '../../server/src/schema';

function App() {
  const [greeting, setGreeting] = useState<HelloWorld | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadGreeting = async () => {
      try {
        setIsLoading(true);
        const result = await trpc.getHelloWorld.query();
        setGreeting(result);
      } catch (error) {
        console.error('Failed to load greeting:', error);
        // Provide fallback data to ensure the app still works
        setGreeting({ message: 'Hello World' });
      } finally {
        setIsLoading(false);
      }
    };

    loadGreeting();
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <h1 className="text-4xl font-bold text-center">
        {isLoading ? 'Loading...' : greeting?.message || 'Hello World'}
      </h1>
    </div>
  );
}

export default App;
