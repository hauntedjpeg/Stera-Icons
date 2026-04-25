import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeDots0RegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots0RegularDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots0RegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.1 15.1a1.12 1.12 0 1 1 1.58 1.58 1.12 1.12 0 0 1-1.59-1.59M6.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M17.5 10.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.26M7.31 7.32a1.13 1.13 0 1 1 1.6 1.59 1.13 1.13 0 0 1-1.6-1.6M15.1 7.32a1.13 1.13 0 1 1 1.58 1.59 1.13 1.13 0 0 1-1.59-1.6M12 5.38a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={0.4} />
        <path d="M10.76 10.76a1.75 1.75 0 1 1 2.44 2.52c-.39.33-1.67 1.24-2.8 2.03L8.86 16.4l-.5.34-.13.1-.04.03a.75.75 0 0 1-1.05-1.04l.03-.05.1-.14 1.42-2.03a61 61 0 0 1 2.07-2.84" />
    </IconBase>
  ))
);

GaugeDots0RegularDuotone.displayName = 'GaugeDots0RegularDuotone';

// Triple export pattern (lucide-react style)
export { GaugeDots0RegularDuotone, GaugeDots0RegularDuotone as GaugeDots0RegularDuotoneIcon, GaugeDots0RegularDuotone as SiGaugeDots0RegularDuotone };
export default GaugeDots0RegularDuotone;
export type { GaugeDots0RegularDuotoneProps };
