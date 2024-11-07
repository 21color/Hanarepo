import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { vars } from "@hanarepo/token/vars";
import {
  TextfieldProps,
  TextfieldVariants,
  validateStyle
} from "./Textfield.types";


export const Textfield = ({
  label,
  value,
  type = "text",
  onChange,
  placeholder,
  variant = "standard",
  validate = false,
  helperText,
}: TextfieldProps<HTMLInputElement>
) => {
  return (
    <TextfieldWrapper>
      <label css={Label}>{label}</label>
      <input
        defaultValue={value}
        css={[TextfieldVariants[variant], validate && validateStyle(variant)]}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {validate && <ValidateText>{helperText}</ValidateText>}
    </TextfieldWrapper>
  );
};

const Label = css({
  fontSize: vars.fontSize.small,
  color: vars.color.gray[600],
  marginBottom: "5px",
});

const TextfieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: left;
  gap: 5px;
`;

const ValidateText = styled.span`
  color: ${vars.color.semantic.error};
  font-size: ${vars.fontSize.small};
`;
