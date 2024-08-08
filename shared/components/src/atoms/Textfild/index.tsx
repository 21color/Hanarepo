import { vars } from "@hanarepo/token/vars";
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
      {vaildate && <VaildateText>{helperText}</VaildateText>}
    </TextfildWrapper>
  );
};

export default Textfild;

const TextfildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: left;
  gap: 5px;
`;

const VaildateText = styled.span`
  color: ${vars.color.error};
  font-size: ${vars.fontSize.small};
`;
