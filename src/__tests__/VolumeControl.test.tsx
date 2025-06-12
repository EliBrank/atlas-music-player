import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import VolumeControls from "@/components/VolumeControls";

test("VolumeControl renders correctly", () => {
  const onVolumeChangeTest = () => {return};

  const { container } = render(
    <VolumeControls
      volume={75}
      onVolumeChange={onVolumeChangeTest}
    />
  );
  expect(container).toMatchSnapshot();
});
