import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SelectFieldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SelectFieldFillDuotone = memo(
  forwardRef<SVGSVGElement, SelectFieldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.2 5.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v2.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H6.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05v-2.4q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04zm1.96 5.55c-.31-.37-.86-.4-1.23-.1l-1.18 1.02-1.18-1.01c-.37-.32-.92-.28-1.23.1-.32.36-.28.91.1 1.22l1.74 1.5.13.1c.32.18.72.15 1-.1l1.76-1.5c.37-.31.4-.86.1-1.23m-13.66.45c-.48 0-.87.39-.87.87s.39.88.87.88H11c.48 0 .87-.4.88-.88 0-.48-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M17.93 10.59c.37-.32.92-.28 1.23.1.32.36.28.91-.1 1.22l-1.74 1.5c-.29.25-.7.28-1 .1l-.14-.1-1.75-1.5c-.37-.31-.4-.86-.1-1.23.32-.37.87-.4 1.24-.1l1.18 1.02zM11 11.13c.48 0 .88.39.88.87s-.4.88-.88.88H5.5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

SelectFieldFillDuotone.displayName = 'SelectFieldFillDuotone';

// Triple export pattern
export { SelectFieldFillDuotone, SelectFieldFillDuotone as SelectFieldFillDuotoneIcon, SelectFieldFillDuotone as SiSelectFieldFillDuotone };
export default SelectFieldFillDuotone;
export type { SelectFieldFillDuotoneProps };
