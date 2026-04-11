import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarBillFillProps = Omit<IconBaseProps, 'children'>;

const DollarBillFill = memo(
  forwardRef<SVGSVGElement, DollarBillFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 5.13A2.9 2.9 0 0 1 22.88 8v8A2.9 2.9 0 0 1 20 18.88H4A2.9 2.9 0 0 1 1.13 16V8A2.9 2.9 0 0 1 4 5.13zm1.13 8.9c-2.06.18-2.92 1.04-3.1 3.1H20c.62 0 1.13-.5 1.13-1.13zM2.88 16c0 .62.5 1.12 1.12 1.13h1.96c-.17-2.06-1.03-2.92-3.08-3.1zM12 8.25c-1.92 0-3.25 1.81-3.25 3.75s1.33 3.75 3.25 3.75 3.25-1.81 3.25-3.75S13.92 8.25 12 8.25M4 6.88c-.62 0-1.12.5-1.12 1.12v1.96c2.05-.17 2.9-1.03 3.08-3.09zm14.04 0c.17 2.05 1.03 2.9 3.09 3.08V8c0-.62-.5-1.12-1.13-1.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

DollarBillFill.displayName = 'DollarBillFill';

// Triple export pattern (lucide-react style)
export { DollarBillFill, DollarBillFill as DollarBillFillIcon, DollarBillFill as SiDollarBillFill };
export default DollarBillFill;
export type { DollarBillFillProps };
