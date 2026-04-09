import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XFillProps = Omit<IconBaseProps, 'children'>;

const XFill = memo(
  forwardRef<SVGSVGElement, XFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-fill" {...props}>
      <path d="M17.12 5.12a1.25 1.25 0 1 1 1.76 1.76L13.77 12l5.11 5.12a1.25 1.25 0 0 1-1.76 1.76L12 13.77l-5.12 5.11a1.25 1.25 0 0 1-1.76-1.76L10.23 12 5.12 6.88a1.25 1.25 0 1 1 1.76-1.76L12 10.23z" />
    </IconBase>
  ))
);

XFill.displayName = 'XFill';

// Triple export pattern (lucide-react style)
export { XFill, XFill as XFillIcon, XFill as SiXFill };
export default XFill;
export type { XFillProps };
