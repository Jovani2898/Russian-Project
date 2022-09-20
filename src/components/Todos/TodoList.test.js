import React from "react";
import { render } from "@testing-library/react";
import TodoList from "TodoList";

describe("<TodoList />", () => {
  it("should be render TodoList", () => {
    const { getByText } = render(<TodoList />);
    expect(getByText()).toBeInTheDocument();
  });
});
