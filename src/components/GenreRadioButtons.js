import React from "react";
import RadioButton from "../components/ui/RadioButton";
import Button from "../components/ui/Button";

const GenreRadioButtons = ({ handleRadioButton, genreToShow, history }) => {
  return (
    <>
      <RadioButton
        changed={() => handleRadioButton("horror")}
        id="1"
        isSelected={genreToShow === "horror"}
        label="Horror"
        value="horror"
      />
      <RadioButton
        changed={() => handleRadioButton("romance")}
        id="2"
        isSelected={genreToShow === "romance"}
        label="Romance"
        value="romance"
      />
      <RadioButton
        changed={() => handleRadioButton("comedy")}
        id="3"
        isSelected={genreToShow === "comedy"}
        label="Comedy"
        value="comedy"
      />
      <Button
        type="button"
        value="Reset"
        small
        click={() => history.push("/")}
      />
    </>
  );
};

export default GenreRadioButtons;
