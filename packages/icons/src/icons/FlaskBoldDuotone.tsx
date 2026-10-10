import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlaskBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlaskBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlaskBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 8.98q0 .77.37 1.44l3.9 7.14c1.08 2-.36 4.44-2.64 4.44H7.37c-2.28 0-3.73-2.44-2.64-4.44l3.9-7.14Q9 9.75 9 8.98V4h2v4.98q0 1.27-.61 2.4l-3.9 7.14c-.36.67.12 1.48.88 1.48h9.26c.76 0 1.24-.81.88-1.48l-3.9-7.15q-.6-1.11-.61-2.39V4h2z" opacity={.4} />
        <path d="M15 2c.55 0 1 .45 1 1s-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

FlaskBoldDuotone.displayName = 'FlaskBoldDuotone';

// Triple export pattern
export { FlaskBoldDuotone, FlaskBoldDuotone as FlaskBoldDuotoneIcon, FlaskBoldDuotone as SiFlaskBoldDuotone };
export default FlaskBoldDuotone;
export type { FlaskBoldDuotoneProps };
