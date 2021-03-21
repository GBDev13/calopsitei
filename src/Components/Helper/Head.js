import { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    document.title = props.title + " | Calopsitei";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description || "");
  }, []);

  return <></>;
};

export default Head;
