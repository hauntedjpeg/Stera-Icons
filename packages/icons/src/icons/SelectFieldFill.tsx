import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SelectFieldFillProps = Omit<IconBaseProps, 'children'>;

const SelectFieldFill = memo(
  forwardRef<SVGSVGElement, SelectFieldFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="select-field-fill" {...props}>
      <path fillRule="evenodd" d="M17.2 5.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v2.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H6.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05v-2.4q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04zm1.96 5.55a.87.87 0 0 0-1.23-.1l-1.18 1.02-1.18-1.01a.87.87 0 1 0-1.14 1.32l1.75 1.5.13.1c.32.18.72.15 1-.1l1.76-1.5c.37-.31.4-.86.1-1.23m-13.66.45a.88.88 0 0 0 0 1.74H11a.88.88 0 0 0 0-1.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

SelectFieldFill.displayName = 'SelectFieldFill';

// Triple export pattern (lucide-react style)
export { SelectFieldFill, SelectFieldFill as SelectFieldFillIcon, SelectFieldFill as SiSelectFieldFill };
export default SelectFieldFill;
export type { SelectFieldFillProps };
