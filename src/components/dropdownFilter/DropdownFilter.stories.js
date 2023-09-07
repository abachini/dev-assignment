import { DropdownFilter } from "./DropdownFilter";

const optionsList = ["Option1", "Option2", "Option3", "Option4", "Option5"];

export default {
  title: "Components/DropdownFilter",
  component: DropdownFilter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    id: "storybook-dropdown-filter",
    label: "Options",
    helperText: "Select an option",
    variant: "standard",
    defaultValue: "",
    optionsList,
  },
};
