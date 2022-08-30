import React from 'react';

import { SvgIconsMap, SvgIconNames } from '../../iconography/icons';

export interface IconProps {
  iconName: SvgIconNames;
}

export const Icon = ({ iconName }: IconProps) => {
  const SvgIcon = SvgIconsMap[iconName];

  return SvgIcon && <SvgIcon />;
};
