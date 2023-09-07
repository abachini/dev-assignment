import { DropdownFilter } from "./DropdownFilter";

const optionsList = ["Option1", "Option2", "Option3", "Option4", "Option5"];

const onHandleSelectedOptionChange = (newOption) => {
  console.log(`option changed to: ${newOption}`);
};

describe("<DropdownFilter />", () => {
  it("renders", () => {
    cy.mount(
      <DropdownFilter
        optionsList={optionsList}
        label={"Options"}
        helperText={"Select an option"}
        handleSelectedOptionChange={onHandleSelectedOptionChange}
      />,
    );
  });
});
