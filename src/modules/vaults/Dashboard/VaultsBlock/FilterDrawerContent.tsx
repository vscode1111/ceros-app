import { CurrencyTab, useFormStyles } from 'modules/common';
import { Filters, FiltersProps } from './Filters';
import { SortFilterTab } from './SortFilterTab';
import { useFilterDrawerContentStyles } from './useFilterDrawerContentStyles';

type FilterDrawerContentProps = FiltersProps;

export function FilterDrawerContent({
  control,
  assetOptions,
  watch,
}: FilterDrawerContentProps): JSX.Element {
  const { classes } = useFilterDrawerContentStyles();
  const { classes: formClasses } = useFormStyles();
  return (
    <div className={formClasses.traitContainer}>
      <div className={formClasses.trait} />
      <Filters control={control} assetOptions={assetOptions} watch={watch} />
      <SortFilterTab className={classes.tab} />
      <CurrencyTab className={classes.tab} />
    </div>
  );
}
