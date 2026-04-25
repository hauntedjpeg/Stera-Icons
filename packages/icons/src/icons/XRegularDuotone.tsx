import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const XRegularDuotone = memo(
  forwardRef<SVGSVGElement, XRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12 13.06-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12zM17.47 5.47a.75.75 0 1 1 1.06 1.06L13.06 12 12 10.94z" opacity={0.4} />
        <path d="M5.47 5.47c.3-.3.77-.3 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

XRegularDuotone.displayName = 'XRegularDuotone';

// Triple export pattern (lucide-react style)
export { XRegularDuotone, XRegularDuotone as XRegularDuotoneIcon, XRegularDuotone as SiXRegularDuotone };
export default XRegularDuotone;
export type { XRegularDuotoneProps };
