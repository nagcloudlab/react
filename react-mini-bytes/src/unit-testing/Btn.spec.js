import { render, fireEvent } from "@testing-library/react";

import Btn from "./Btn";

it("should render with zero value", () => {
  const rendered = render(<Btn />);
  const button=rendered.queryByTitle('counter')
  expect(button).toBeTruthy()
  expect(button.innerHTML).toEqual("0")
});

it("should increment count", () => {
    const rendered = render(<Btn />);
    const button=rendered.queryByTitle('counter')
    fireEvent.click(button)
    expect(button.innerHTML).toEqual("1")
});
