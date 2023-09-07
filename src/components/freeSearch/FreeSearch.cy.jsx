import { FreeSearch } from "./FreeSearch";

describe("<FreeSearch />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FreeSearch id={"cy-free-text"} label={"Search..."} width={200} />);
  });
});
