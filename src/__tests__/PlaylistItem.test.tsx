import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import PlaylistItem from "@/components/PlaylistItem";

test("PlaylistItem renders correctly", () => {
  const onClickTest = () => {return};

  const { container } = render(
    <PlaylistItem
      songTitle="Testing Time"
      artistName="The Testers"
      songLength={220}
      isSelected={true}
      onClick={onClickTest}
    />
  );
  expect(container).toMatchSnapshot();
});
