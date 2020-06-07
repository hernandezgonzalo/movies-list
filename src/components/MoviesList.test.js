import React from "react";
import { shallow } from "enzyme";

import { initState } from "../data";
import MoviesList from "./MoviesList";
import ListItem from "./ListItem";

describe("MoviesList", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<MoviesList />);
    expect(component).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const component = shallow(<MoviesList movies={initState.movies} />);
    expect(component).toMatchSnapshot();
    expect(component.find(ListItem)).toHaveLength(3);
  });
});
