import { TextfildProps, TextfildVariants } from "./Textfild.type";

import styled from "@emotion/styled";

const Textfild = ({
  label,
  value,
  type = "text",
  onChange,
  placeholder,
  variant = "standard",
  vaildate = false,
  helperText,
}: TextfildProps) => {
  return (
    <TextfildWrapper>
      <label>{label}</label>
      <input
        css={TextfildVariants[variant]}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {vaildate && <span>{helperText}</span>}
    </TextfildWrapper>
  );
};

export default Textfild;

const TextfildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
