import "./Categories.css";
import React, { useState } from "react";
import CheckboxOption from "./components/CheckboxOption";
import RadioOption from "./components/RadioOption";
import TextInput from "./components/TextInput";
import { Button } from "@material-ui/core";
import CommentField from "./components/CommentSection";
import generateReview from "./utility/generateReview";

export default function ReviewForm({categories}) {
  const [reviewInfo, setReviewInfo] = useState("");

  const create_categories = () => {
    var array = [];
    for (let i = 0; i < categories.length; i++) {
      const element = categories[i];
      if (element.type === "radio") {
        array.push(<RadioOption props={element} />);
      } else if (element.type === "check") {
        array.push(<CheckboxOption props={element} />);
      }
    }
    return array;
  };

  const categoryComponents = create_categories();

  return (
    <div className="categories-container">
      <div className="centered">
        <div>
          <TextInput title="Movie/Tv Show Name" />
          {categoryComponents}
          <CommentField title="Comment Section" />
        </div>
      </div>
      <div className="button-centered">
        <Button variant="contained" color="primary" onClick={() => generateReview(setReviewInfo, categories)}>
          Generate Review
        </Button>
        {reviewInfo !== "" && <p className="review">{reviewInfo}</p>}
      </div>
    </div>
  );
}
