import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { Button } from "@/components/Button";

test("Button renders correctly", () => {
  const { container } = render(<Button label="Click me" />);
  expect(container).toMatchSnapshot();
});
