import React from "react";
import { shallow } from "enzyme";
import HeadeImg from "./HeadeImg";

describe("HeadeImg", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HeadeImg />);
    expect(wrapper).toMatchSnapshot();
  });
});
