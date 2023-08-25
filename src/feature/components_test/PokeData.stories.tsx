import type { Meta, StoryObj } from "@storybook/react";

import { PokeData } from "./PokeData";

const meta: Meta<typeof PokeData> = {
  component: PokeData,
  args: {
    pokemonId: 1,
  },
};

export default meta;
type Story = StoryObj<typeof PokeData>;

export const Primary: Story = {};
