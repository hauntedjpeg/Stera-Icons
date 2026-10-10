import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FilterRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FilterRegularDuotone = memo(
  forwardRef<SVGSVGElement, FilterRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M14 16.25c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM22 6.25c.41 0 .75.34.75.75s-.34.75-.75.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

FilterRegularDuotone.displayName = 'FilterRegularDuotone';

// Triple export pattern
export { FilterRegularDuotone, FilterRegularDuotone as FilterRegularDuotoneIcon, FilterRegularDuotone as SiFilterRegularDuotone };
export default FilterRegularDuotone;
export type { FilterRegularDuotoneProps };
