import React, { useState } from 'react';
import { textFieldClasses } from '@mui/material/TextField';
import { useWhitelistAddress } from './useWhitelistAddress';
import { TextField, useFormStyles } from 'modules/common';
import { Control, FieldValues, Path } from 'react-hook-form';
import { ReactComponent as PlusIcon } from '../../vaults/assets/plus.svg';
import { AddressList } from './AddressList';
import { Button } from '@mui/material';
import { t } from 'modules/i18n';

interface WhiteListProps<T extends FieldValues> {
  control: Control<T>;
  error?: boolean;
  helperText?: React.ReactNode;
  name: Path<T>;
  whiteAddress: string;
}

export function WhitelistAddress<T extends FieldValues>({
  control,
  error,
  helperText,
  name,
  whiteAddress,
}: WhiteListProps<T>): JSX.Element {
  const { classes } = useWhitelistAddress();
  const { classes: formClasses } = useFormStyles();
  const [whiteAddressList, setWhiteAddressList] = useState<string[]>();

  const handleAddAddress = () => {
    setWhiteAddressList(prevState => [...(prevState ?? []), whiteAddress]);
  };

  const handleRemoveAddress = (item: string) => {
    setWhiteAddressList(prevState => prevState?.filter(i => i !== item));
  };

  return (
    <div className={classes.root}>
      <div className={classes.textFieldWrapper}>
        <TextField
          name={name}
          control={control}
          variant="filled"
          placeholder={t('common.add-and-search')}
          error={error}
          helperText={helperText}
          sx={{
            [`&.${textFieldClasses.root}`]: {
              border: '2px solid #5E5E5E',
              borderRadius: '16px',
            },
          }}
          InputProps={{
            endAdornment: (
              <Button
                className={formClasses.endAdornment}
                variant="text"
                size="small"
                onClick={handleAddAddress}
              >
                <PlusIcon />
              </Button>
            ),
          }}
        />
      </div>
      {whiteAddressList && (
        <AddressList
          whitelistAddress={whiteAddressList}
          handleRemoveAddress={handleRemoveAddress}
        />
      )}
    </div>
  );
}
