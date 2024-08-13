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
  helperText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextfieldVariants: TextfieldVariantType = {
  outlined: css`
    border: 1px solid ${vars.color.primary};
    padding: 5px;
  `,
  filled: css`
    background-color: ${vars.color.primary};
    color: white;
    padding: 5px;

    &:focus {
      background-color: ${vars.color.gray["800"]};
    }
  `,
  standard: css`
    border: none;
    background-color: ${vars.color.gray["200"]};
    border-radius: ${vars.border.large};
    padding: ${vars.spacing.medium};

    &:focus {
      background-color: ${vars.color.white};
    }

    &::placeholder {
      color: ${vars.color.gray["400"]};
    }
  `,
};
