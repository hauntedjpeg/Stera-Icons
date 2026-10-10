import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilterRegularProps = Omit<IconBaseProps, 'children'>;

const FilterRegular = memo(
  forwardRef<SVGSVGElement, FilterRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14 16.25c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM18 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM22 6.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

FilterRegular.displayName = 'FilterRegular';

// Triple export pattern
export { FilterRegular, FilterRegular as FilterRegularIcon, FilterRegular as SiFilterRegular };
export default FilterRegular;
export type { FilterRegularProps };
