import { css } from "@emotion/react";
import { vars } from "@hanarepo/token/vars";

export type TextfieldVariantType = {
  outlined: ReturnType<typeof css>;
  filled: ReturnType<typeof css>;
  standard: ReturnType<typeof css>;
};

export interface TextfieldProps {
  label?: string;
  variant: "outlined" | "filled" | "standard";
  type?: string;
  placeholder: string;
  value: string;
  validate?: boolean;
  defaultValue?: string;
  helperText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const baseStyle = css`
  padding: 5px 10px;
  font-size: ${vars.fontSize.medium};
`;

export const validateStyle = (variant: "outlined" | "filled" | "standard") =>
  css({
    borderColor: vars.color.error,
    backgroundColor:
      variant === "filled" ? vars.color.errorLight : "transparent",
  });

export const TextfieldVariants: TextfieldVariantType = {
  outlined: css`
    border: 1px solid ${vars.color.gray["400"]};
    border-radius: ${vars.rounded.small}px;
    ${baseStyle}
  `,
  filled: css`
    background-color: ${vars.color.sky["200"]};
    border: none;
    color: ${vars.color.gray["800"]};
    border-radius: ${vars.rounded.small}px;
    ${baseStyle}
    &:focus {
      background-color: ${vars.color.sky["100"]};
    }
  `,
  standard: css`
    border: none;
    border-bottom: 1px solid ${vars.color.gray["400"]};
    ${baseStyle}

    &:focus {
      background-color: ${vars.color.white};
    }

    &::placeholder {
      color: ${vars.color.gray["400"]};
    }
  `,
};
