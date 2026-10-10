import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XFillProps = Omit<IconBaseProps, 'children'>;

const XFill = memo(
  forwardRef<SVGSVGElement, XFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.12 5.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76L13.77 12l5.11 5.12c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0L12 13.77l-5.12 5.11c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76L10.23 12 5.12 6.88c-.5-.48-.5-1.28 0-1.76.48-.5 1.28-.5 1.76 0L12 10.23z" />
    </IconBase>
  ))
);

XFill.displayName = 'XFill';

// Triple export pattern
export { XFill, XFill as XFillIcon, XFill as SiXFill };
export default XFill;
export type { XFillProps };
