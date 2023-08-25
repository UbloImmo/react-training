import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Voltorb: Story = {
  args: {
    pokemon: {
      imageUrl: "https://placehold.co/600x600?text=Voltorb",
      type: "electric",
      name: "Voltorb",
      stats: [
        { name: "hp", value: 40 },
        { name: "attack", value: 55 },
        { name: "defense", value: 30 },
      ],
    },
  },
};

export const Evoli: Story = {
  args: {
    pokemon: {
      imageUrl: "https://placehold.co/600x600?text=Evoli",
      type: "normal",
      name: "Evoli",
      stats: [
        { name: "hp", value: 30 },
        { name: "special-attack", value: 80 },
        { name: "attack", value: 50 },
        { name: "defense", value: 20 },
      ],
    },
  },
};
