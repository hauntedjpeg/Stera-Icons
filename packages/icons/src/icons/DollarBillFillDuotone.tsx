import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarBillFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const DollarBillFillDuotone = memo(
  forwardRef<SVGSVGElement, DollarBillFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="dollar-bill-fill-duotone" {...props}>
      <path d="M2.88 14.91c.87.09 1.34.3 1.63.58.28.29.5.76.58 1.63H4c-.62 0-1.12-.5-1.12-1.12zM12 9.88c.75 0 1.63.79 1.63 2.12s-.88 2.13-1.63 2.13-1.62-.8-1.62-2.13.87-2.12 1.62-2.12" opacity={0.4} />
        <path fillRule="evenodd" d="M17.16 6.88c.09 1.16.38 2.15 1.1 2.86.7.72 1.7 1.01 2.86 1.1v2.32c-1.16.08-2.15.38-2.86 1.1-.72.7-1.01 1.7-1.1 2.87H6.84c-.09-1.17-.38-2.16-1.1-2.87-.7-.72-1.7-1.02-2.86-1.1v-2.32c1.16-.09 2.15-.38 2.86-1.1.72-.7 1.01-1.7 1.1-2.86zM12 8.13c-2 0-3.37 1.89-3.37 3.87s1.36 3.88 3.37 3.88 3.38-1.9 3.38-3.88S14 8.13 12 8.13" clipRule="evenodd" opacity={0.4} />
        <path d="M21.13 16c0 .62-.5 1.13-1.13 1.13h-1.09c.09-.88.3-1.35.58-1.64.29-.28.76-.5 1.64-.58zM5.09 6.88c-.09.87-.3 1.34-.58 1.63-.29.28-.76.5-1.63.57V8c0-.62.5-1.12 1.12-1.12zM20 6.88c.62 0 1.13.5 1.13 1.12v1.08c-.88-.08-1.35-.3-1.64-.57-.28-.29-.5-.76-.58-1.63z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 8.13c2 0 3.38 1.89 3.38 3.87S14 15.88 12 15.88 8.63 13.98 8.63 12 9.99 8.13 12 8.13m0 1.74c-.75 0-1.62.8-1.62 2.13s.87 2.13 1.62 2.13 1.63-.8 1.63-2.13-.88-2.12-1.63-2.12" clipRule="evenodd" />
        <path fillRule="evenodd" d="M20 5.13A2.9 2.9 0 0 1 22.88 8v8A2.9 2.9 0 0 1 20 18.88H4A2.9 2.9 0 0 1 1.13 16V8A2.9 2.9 0 0 1 4 5.13zM2.88 16c0 .62.5 1.12 1.12 1.13h1.09c-.09-.88-.3-1.35-.58-1.64-.29-.28-.76-.5-1.63-.58zm18.25-1.09c-.88.09-1.35.3-1.64.58-.28.29-.5.76-.58 1.63H20c.62 0 1.13-.5 1.13-1.12zM6.84 6.88c-.09 1.16-.38 2.15-1.1 2.86-.7.72-1.7 1.01-2.86 1.1v2.32c1.16.08 2.15.38 2.86 1.1.72.7 1.01 1.7 1.1 2.87h10.32c.09-1.17.38-2.16 1.1-2.87.7-.72 1.7-1.02 2.86-1.1v-2.32c-1.16-.09-2.15-.38-2.86-1.1-.72-.7-1.01-1.7-1.1-2.86zM4 6.88c-.62 0-1.12.5-1.12 1.12v1.08c.87-.08 1.34-.3 1.63-.57.28-.29.5-.76.58-1.63zm14.91 0c.09.87.3 1.34.58 1.63.29.28.76.5 1.64.57V8c0-.62-.5-1.12-1.13-1.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

DollarBillFillDuotone.displayName = 'DollarBillFillDuotone';

// Triple export pattern (lucide-react style)
export { DollarBillFillDuotone, DollarBillFillDuotone as DollarBillFillDuotoneIcon, DollarBillFillDuotone as SiDollarBillFillDuotone };
export default DollarBillFillDuotone;
export type { DollarBillFillDuotoneProps };
