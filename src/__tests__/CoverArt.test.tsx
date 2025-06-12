import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import CoverArt from "@/components/CoverArt";

test("CoverArt renders correctly", () => {
  const { container } = render(<CoverArt coverArtURL="/placeholder.svg" />);
  expect(container).toMatchSnapshot();
});
