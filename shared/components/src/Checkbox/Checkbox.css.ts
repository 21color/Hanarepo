import { css } from "@emotion/react";
import { vars } from '@hanarepo/token/vars';
import type { CheckboxLabelProps } from './Checkbox.types';

export const checkboxLabelCSS = ({ iconPosition }: Pick<CheckboxLabelProps, "iconPosition">) => 
  css({
    display: "inline-flex",
    alignItems: "center",
    flexDirection: iconPosition === "right" ? "row-reverse" : "row",
    justifyContent: iconPosition === "right" ? "space-between" : "flex-start",

    gap: vars.spacing.medium,

    padding: `${vars.spacing.small} ${vars.spacing.medium}`,
    width: iconPosition === "right" ? "100%" : "fit-content",
    cursor: "pointer",

    "&:has(input:disabled) [data-checkbox-label]": {
      color: vars.color.semantic.textDisabled,
    },
    "input:disabled + .checkbox-wrapper": {
      opacity: 0.3,
    },
    ":has(input:disabled)": {
      cursor: "not-allowed",
    },

    "&:hover": {
      "input:checkbox:not(:disabled) + .checkbox-wrapper": {
        outlineColor: "transparent",
        backgroundColor: vars.color.semantic.primaryHover,
      },

      "input:not(:checked, :disabled) + .checkbox-wrapper": {
        outlineColor: vars.color.semantic.primaryHover,

      },
    },
  });


export const checkboxIconCSS = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  width: "16px",
  height: "16px",

  backgroundColor: vars.color.semantic.secondary,
  borderRadius: `${vars.rounded.small}px`,
  color: vars.color.gray[700],
  outline: `1px solid ${vars.color.gray[300]}`,
  outlineOffset: "-1px",

  transition: "all ease-in-out 0.1s",
  cursor: "pointer",

  "checkbox-icon" : {
    display: "none",
  },

  "&:where(input:checkbox + &)": {

    backgroundColor: vars.color.semantic.primary,
    outlineColor: "transparent",
      
    "checkbox-icon": {
      display: 'block',
    },
  },

  "&:where(input:disabled + &)": {
    opacity: 0.3,
    cursor: "not-allowed",
    color: vars.color.semantic.textDisabled,
  },

  "&:where(input:disabled:not(:checked) + &)": {
    backgroundColor: vars.color.semantic.tint5,
  },

  "&:where(input:checked:not(:disabled) + &):hover": {
    outlineColor: "transparent",
    backgroundColor: vars.color.semantic.primaryHover,
  },

  "&:where(input:not(:checked, :disabled) + &):hover": {
    outlineColor: vars.color.gray[300],
    backgroundColor: vars.color.semantic.tint5,
  },
});


