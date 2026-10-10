import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const XFillDuotone = memo(
  forwardRef<SVGSVGElement, XFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12 13.77-5.12 5.11c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76L10.23 12zM17.12 5.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76L13.77 12 12 10.23z" opacity={0.4} />
        <path d="M5.12 5.12c.48-.5 1.28-.5 1.76 0l12 12c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-12-12c-.5-.48-.5-1.28 0-1.76" />
    </IconBase>
  ))
);

XFillDuotone.displayName = 'XFillDuotone';

// Triple export pattern
export { XFillDuotone, XFillDuotone as XFillDuotoneIcon, XFillDuotone as SiXFillDuotone };
export default XFillDuotone;
export type { XFillDuotoneProps };
