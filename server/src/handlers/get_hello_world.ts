
import { type HelloWorld } from '../schema';

export async function getHelloWorld(): Promise<HelloWorld> {
  // This handler returns a simple "Hello World" message
  // Purpose: Provide a basic greeting response for the frontend
  return {
    message: "Hello World"
  };
}
