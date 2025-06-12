import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import SongTitle from "@/components/SongTitle";

test("SongTitle renders correctly", () => {
  const { container } = render(
    <SongTitle
      songName="Testing Once Again"
      artistName="The Testers"
    />
  );
  expect(container).toMatchSnapshot();
});
