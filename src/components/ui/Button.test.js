import React from "react";
import { shallow } from "enzyme";

import Button from "./Button";

describe("Button", () => {
  it("simulates click events", () => {
    const mockCallBack = jest.fn();
    const component = shallow(<Button type="button" click={mockCallBack} />);
    component.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
