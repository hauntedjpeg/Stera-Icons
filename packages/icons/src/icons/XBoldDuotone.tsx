import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const XBoldDuotone = memo(
  forwardRef<SVGSVGElement, XBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12 13.41-5.3 5.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42L10.58 12zM17.3 5.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L13.42 12 12 10.59z" opacity={0.4} />
        <path d="M5.3 5.3c.38-.4 1.02-.4 1.4 0l12 12c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-12-12c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

XBoldDuotone.displayName = 'XBoldDuotone';

// Triple export pattern
export { XBoldDuotone, XBoldDuotone as XBoldDuotoneIcon, XBoldDuotone as SiXBoldDuotone };
export default XBoldDuotone;
export type { XBoldDuotoneProps };
