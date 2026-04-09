import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const XFillDuotone = memo(
  forwardRef<SVGSVGElement, XFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-fill-duotone" {...props}>
      <path d="m12 13.77-5.12 5.11a1.25 1.25 0 0 1-1.76-1.76L10.23 12zM17.12 5.12a1.25 1.25 0 1 1 1.76 1.76L13.77 12 12 10.23z" opacity={0.4} />
        <path d="M5.12 5.12a1.25 1.25 0 0 1 1.76 0l12 12a1.25 1.25 0 0 1-1.76 1.76l-12-12a1.25 1.25 0 0 1 0-1.76" />
    </IconBase>
  ))
);

XFillDuotone.displayName = 'XFillDuotone';

// Triple export pattern (lucide-react style)
export { XFillDuotone, XFillDuotone as XFillDuotoneIcon, XFillDuotone as SiXFillDuotone };
export default XFillDuotone;
export type { XFillDuotoneProps };
