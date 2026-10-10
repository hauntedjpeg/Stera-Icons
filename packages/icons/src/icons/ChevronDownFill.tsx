import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronDownFill = memo(
  forwardRef<SVGSVGElement, ChevronDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 8.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-7 7q-.27.24-.62.25-.36 0-.62-.25l-7-7c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

ChevronDownFill.displayName = 'ChevronDownFill';

// Triple export pattern
export { ChevronDownFill, ChevronDownFill as ChevronDownFillIcon, ChevronDownFill as SiChevronDownFill };
export default ChevronDownFill;
export type { ChevronDownFillProps };
