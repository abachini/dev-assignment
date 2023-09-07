import { FreeSearch } from "./FreeSearch";

export default {
  title: "Components/FreeTextSearch",
  component: FreeSearch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    id: "storybook-text-search",
    label: "Search..",
    helperText: "Select option",
    variant: "standard",
    size: "small",
    width: 250,
  },
};
