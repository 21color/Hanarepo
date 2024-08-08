import { css } from "@emotion/react";

export type TextfildVariantType = {
  outlined: ReturnType<typeof css>;
  filled: ReturnType<typeof css>;
  standard: ReturnType<typeof css>;
};

export interface TextfildProps {
  label?: string;
  variant: "outlined" | "filled" | "standard";
  type?: string;
  placeholder: string;
  value: string;
  vaildate?: boolean;
  helperText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextfildVariants: TextfildVariantType = {
  outlined: css`
    border: 1px solid black;
    padding: 5px;
  `,
  filled: css`
    background-color: black;
    color: white;
    padding: 5px;
  `,
  standard: css`
    padding: 5px;
  `,
};
