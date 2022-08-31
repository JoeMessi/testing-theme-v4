import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  SelectProps,
} from '@mui/material';
import React, { useState } from 'react';
import * as S from './select.styles';

export interface SelectInputProps extends SelectProps {
  options: string[];
}

export const SelectInput = ({
  label,
  labelId = 'select-input',
  options,
}: SelectInputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={labelId}>{label}</InputLabel>
        <S.SelectInput
          labelId={labelId}
          value={value}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option, i) => (
            <MenuItem value={option} key={i}>
              {option}
            </MenuItem>
          ))}
        </S.SelectInput>
      </FormControl>
    </Box>
  );
};
