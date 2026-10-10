import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownFill = memo(
  forwardRef<SVGSVGElement, ChevronFullDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 8.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-7 7q-.27.24-.62.25-.36 0-.62-.25l-7-7c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

ChevronFullDownFill.displayName = 'ChevronFullDownFill';

// Triple export pattern
export { ChevronFullDownFill, ChevronFullDownFill as ChevronFullDownFillIcon, ChevronFullDownFill as SiChevronFullDownFill };
export default ChevronFullDownFill;
export type { ChevronFullDownFillProps };
