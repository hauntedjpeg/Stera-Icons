import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonStarFillProps = Omit<IconBaseProps, 'children'>;

const MoonStarFill = memo(
  forwardRef<SVGSVGElement, MoonStarFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.6 2.42a.88.88 0 0 1 1 1.21 8.13 8.13 0 0 0 9.37 11.25A.88.88 0 0 1 21 16.1 9.87 9.87 0 1 1 9.59 2.42m-1.2 2.3a8.12 8.12 0 1 0 10.1 12.14l-.5.02A9.88 9.88 0 0 1 8.4 4.72" clipRule="evenodd" />
        <path d="M17.02 3.57a.5.5 0 0 1 .96 0l.26.86a2 2 0 0 0 1.33 1.33l.86.26a.5.5 0 0 1 0 .96l-.86.26a2 2 0 0 0-1.33 1.33l-.26.86a.5.5 0 0 1-.96 0l-.26-.86a2 2 0 0 0-1.33-1.33l-.86-.26a.5.5 0 0 1 0-.96l.86-.26a2 2 0 0 0 1.33-1.33z" />
    </IconBase>
  ))
);

MoonStarFill.displayName = 'MoonStarFill';

// Triple export pattern (lucide-react style)
export { MoonStarFill, MoonStarFill as MoonStarFillIcon, MoonStarFill as SiMoonStarFill };
export default MoonStarFill;
export type { MoonStarFillProps };
