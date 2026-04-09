import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const XBoldDuotone = memo(
  forwardRef<SVGSVGElement, XBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-bold-duotone" {...props}>
      <path d="m12 13.41-5.3 5.3a1 1 0 0 1-1.4-1.42L10.58 12zM17.3 5.3a1 1 0 1 1 1.4 1.4L13.42 12 12 10.59z" opacity={0.4} />
        <path d="M5.3 5.3a1 1 0 0 1 1.4 0l12 12a1 1 0 0 1-1.4 1.4l-12-12a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

XBoldDuotone.displayName = 'XBoldDuotone';

// Triple export pattern (lucide-react style)
export { XBoldDuotone, XBoldDuotone as XBoldDuotoneIcon, XBoldDuotone as SiXBoldDuotone };
export default XBoldDuotone;
export type { XBoldDuotoneProps };
