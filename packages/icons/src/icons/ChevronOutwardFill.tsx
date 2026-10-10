import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronOutwardFillProps = Omit<IconBaseProps, 'children'>;

const ChevronOutwardFill = memo(
  forwardRef<SVGSVGElement, ChevronOutwardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 15.12c.35 0 .67.22.8.54.14.33.07.7-.18.96l-6 6c-.34.34-.9.34-1.24 0l-6-6c-.25-.25-.32-.63-.19-.96.14-.32.46-.54.81-.54zM11.38 1.38c.34-.34.9-.34 1.24 0l6 6c.25.25.32.63.19.95-.14.33-.46.54-.81.54H6c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95z" />
    </IconBase>
  ))
);

ChevronOutwardFill.displayName = 'ChevronOutwardFill';

// Triple export pattern
export { ChevronOutwardFill, ChevronOutwardFill as ChevronOutwardFillIcon, ChevronOutwardFill as SiChevronOutwardFill };
export default ChevronOutwardFill;
export type { ChevronOutwardFillProps };
