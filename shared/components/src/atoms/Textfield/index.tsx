import { vars } from "@hanarepo/token/vars";
import { TextfieldProps, TextfieldVariants } from "./Textfield.type";

import styled from "@emotion/styled";

const Textfield = ({
  label,
  value,
  type = "text",
  onChange,
  placeholder,
  variant = "standard",
  validate = false,
  helperText,
}: TextfieldProps) => {
  return (
    <TextfieldWrapper>
      <label>{label}</label>
      <input
        css={TextfieldVariants[variant]}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {validate && <ValidateText>{helperText}</ValidateText>}
    </TextfieldWrapper>
  );
};

export default Textfield;

const TextfieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: left;
  gap: 5px;
`;

const ValidateText = styled.span`
  color: ${vars.color.error};
  font-size: ${vars.fontSize.small};
`;
