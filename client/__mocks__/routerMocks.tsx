import * as ReactTesting from "@testing-library/react";
const useServerInsertedHTML = jest.fn();

jest.mock("next/router", () => ({
  push: jest.fn(),
  back: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  beforePopState: jest.fn(() => null),
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// Mock useRouter:
jest.mock("next/navigation", () => {
  return {
    __esModule: true,
    usePathname: () => ({
      pathname: "",
    }),
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }),
    useSearchParams: () => ({
      get: () => {},
    }),
    useServerInsertedHTML,
  };
});

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useQueryClient: () => ({
    // setQueryData: jest.fn(() => ({ data: [{ label: 'Blue', id: 34 }] })),
    // cancelQueries: jest.fn(),
    // invalidateQueries: jest.fn(),
    ...jest.requireActual("@tanstack/react-query").useQueryClient(),
    getQueryData: jest
      .fn()
      .mockReturnValueOnce({ data: [{ id: 1, quantity: 1 }] })
      .mockReturnValueOnce({ data: [{ id: 1, quantity: 2 }] }),
  }),
}));
