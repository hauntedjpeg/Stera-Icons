import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarFillProps = Omit<IconBaseProps, 'children'>;

const DollarFill = memo(
  forwardRef<SVGSVGElement, DollarFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c.69 0 1.25.56 1.25 1.25v2.25h3c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-3v3h1.25c2.2 0 4 1.8 4 4s-1.8 4-4 4h-1.25V21c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-2.25h-3.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h3.5v-3h-1c-2.2 0-4-1.8-4-4s1.8-4 4-4h1V3c0-.69.56-1.25 1.25-1.25m1.25 14.5h1.25c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-1.25zm-3.5-8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1v-3z" clipRule="evenodd" />
    </IconBase>
  ))
);

DollarFill.displayName = 'DollarFill';

// Triple export pattern
export { DollarFill, DollarFill as DollarFillIcon, DollarFill as SiDollarFill };
export default DollarFill;
export type { DollarFillProps };
