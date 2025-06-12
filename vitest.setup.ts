import { beforeAll, afterEach, afterAll } from 'vitest';
import "@testing-library/jest-dom/vitest";
import { server } from './src/__tests__/mocks/mock';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
