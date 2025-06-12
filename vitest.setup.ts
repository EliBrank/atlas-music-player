import { beforeAll, afterEach, afterAll } from 'vitest';
import "@testing-library/jest-dom/vitest";
import { server } from './src/__tests__/mocks/mock';
import { vi } from "vitest";

HTMLMediaElement.prototype.load = vi.fn(() => {});
HTMLMediaElement.prototype.play = vi.fn(() => Promise.resolve());
HTMLMediaElement.prototype.pause = vi.fn(() => {});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
