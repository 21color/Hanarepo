import { TextfildProps } from "./Textfild.type";
import { css } from "@emotion/react";

type TextfildVariantType = {
  outlined: ReturnType<typeof css>;
  filled: ReturnType<typeof css>;
  standard: ReturnType<typeof css>;
};

const TextfildVariants: TextfildVariantType = {
  
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



export const Textfild = ({
  label,
  value,
  onChange,
  placeholder,
  variant,
  vaildate,
  helperText,
}: TextfildProps) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
      `}
    >
      <label>{label}</label>
      <input
        css={TextfildVariants[variant]}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {vaildate && <span>{helperText}</span>}
    </div>
  );
};
