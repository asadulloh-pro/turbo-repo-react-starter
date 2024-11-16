import type { Meta, StoryObj } from "@storybook/react";
import AntButton from "@repo/ui/button";

const meta = {
  title: "UI/AntButton",
  component: AntButton,
  tags: ["autodocs"]
} satisfies Meta<typeof AntButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Primary Button",
    type: "default"
  }
};

export const Primary: Story = {
  args: {
    children: "Default Button",
    type: "primary"
  }
};

export const Dashed: Story = {
  args: {
    children: "Dashed Button",
    type: "dashed"
  }
};
