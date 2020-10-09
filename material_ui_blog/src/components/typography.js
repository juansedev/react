import React from "react";
import Typography from "@material-ui/core/Typography";

function Typogra({ typeCmp, nameCmp, content, variant, compoCmp }) {
  const type = {typeCmp} ? {typeCmp} : '';
  const component = {compoCmp} ? {compoCmp} : '';

  let component = "";
  if (compoCmp) {
    component = compoCmp;
  }
  return (
    <Typography {type} className={nameCmp} variant={variant} component>
      {content}
    </Typography>
  );
}

export default Typogra;
