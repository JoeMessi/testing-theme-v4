import { ButtonProps, ThemeProvider } from "@mui/material";
import React from "react";
import * as S from "./button.styles";
import { SvgIconNames } from "../../iconography/icons";
import { Icon } from "../icon/icon";
import { defaultTheme } from "../../theme/theme";

export interface BtnProps extends ButtonProps {
  label?: string;
  leftIcon?: SvgIconNames;
}

export const Button = ({
  label,
  type,
  color = "primary",
  variant = "contained",
  size = "medium",
  href,
  leftIcon,
  disabled,
  onClick,
}: BtnProps) => (
  <ThemeProvider theme={defaultTheme}>
    <S.Btn
      color={color}
      variant={variant}
      type={type}
      size={size}
      href={href}
      disabled={disabled}
      startIcon={leftIcon && <Icon iconName={leftIcon} />}
      onClick={onClick}
      data-testid="btn"
    >
      {label}
    </S.Btn>
  </ThemeProvider>
);
