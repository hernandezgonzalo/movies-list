import React from "react";
import { shallow } from "enzyme";
import MoviesList from "./MoviesList";
import { initState } from "../data";

describe("MoviesList", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<MoviesList />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const component = shallow(<MoviesList movies={initState.movies} />);

    expect(component).toMatchSnapshot();
  });
});
