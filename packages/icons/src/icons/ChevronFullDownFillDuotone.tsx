import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.89 9.88 12 14.76 7.11 9.88z" opacity={.4} />
        <path fillRule="evenodd" d="M19 8.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-7 7q-.27.24-.62.25-.36 0-.62-.25l-7-7c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54zm-7 6.63 4.89-4.88H7.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullDownFillDuotone.displayName = 'ChevronFullDownFillDuotone';

// Triple export pattern
export { ChevronFullDownFillDuotone, ChevronFullDownFillDuotone as ChevronFullDownFillDuotoneIcon, ChevronFullDownFillDuotone as SiChevronFullDownFillDuotone };
export default ChevronFullDownFillDuotone;
export type { ChevronFullDownFillDuotoneProps };
