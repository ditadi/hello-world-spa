
import { describe, expect, it } from 'bun:test';
import { getHelloWorld } from '../handlers/get_hello_world';

describe('getHelloWorld', () => {
  it('should return hello world message', async () => {
    const result = await getHelloWorld();
    
    expect(result.message).toEqual('Hello World');
    expect(typeof result.message).toBe('string');
  });

  it('should return consistent message', async () => {
    const result1 = await getHelloWorld();
    const result2 = await getHelloWorld();
    
    expect(result1.message).toEqual(result2.message);
  });
});
