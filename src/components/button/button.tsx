import { ButtonProps } from '@mui/material';
import React from 'react';
import * as S from './button.styles';
import { SvgIconNames } from '../../iconography/icons';
import { Icon } from '../icon/icon';

export interface BtnProps extends ButtonProps {
  label?: string;
  leftIcon?: SvgIconNames;
}

export const Button = ({
  label,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  href,
  leftIcon,
  disabled,
  onClick,
}: BtnProps) => (
  <S.Btn
    color={color}
    variant={variant}
    size={size}
    href={href}
    disabled={disabled}
    startIcon={leftIcon && <Icon iconName={leftIcon} />}
    onClick={onClick}
    data-testid="btn"
  >
    {label}
  </S.Btn>
);
