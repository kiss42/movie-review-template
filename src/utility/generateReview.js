export default function generateReview(setReviewInfo, categories){
  var localReviewString = "";

  function appendCategoryTitle(title) {
    localReviewString += "** " + title + " **\n";
  }

  function appendOption(option, checked) {
    localReviewString += (checked ? "☑ " : "☐ ") + option + "\n";
  }

  appendCategoryTitle("Movie/Tv Show Name");
  localReviewString += `${sessionStorage.getItem("Movie/Tv Show Name")}\n`;
  localReviewString += "\n";
  appendCategoryTitle("Comment section");
  localReviewString += `${sessionStorage.getItem("Comment section")}\n`

  for (let i = 0; i < categories.length; i++) {
    const categoryJson = categories[i];

    appendCategoryTitle(categoryJson.title);

    // With radio, only one option is selected
    if (categoryJson.type === "radio") {
      const saved = sessionStorage.getItem(categoryJson.title) || "";
      categoryJson.options.forEach((option) => {
        appendOption(option, saved === option);
      });
    } else if (categoryJson.type === "check") {
      // With checkbox, multiple options can be selected
      const selectedOptions = JSON.parse(sessionStorage.getItem(categoryJson.title) || "[]");
      categoryJson.options.forEach((option) => {
        appendOption(option, selectedOptions.includes(option));
      });
    } else {
      localReviewString += "ERROR - bad category type. (radio | check)\n";
    }

    // newline under every category
    localReviewString += "\n";
  }

  // Credit
  localReviewString += "\nGrab this review template here!  https://kiss42.github.io/my-app//\n";

  navigator.clipboard.writeText(localReviewString).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
      setReviewInfo("The review has been copied into your clipboard!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
      setReviewInfo(
        "Copying into clipboard failed. New window with the review should appear, please, copy it manually."
      );
    }
  );
};