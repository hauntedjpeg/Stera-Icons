import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotateRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m15.19 5.25.75.75-.75.75H12c-3.73 0-6.75 3.02-6.75 6.75s3.02 6.75 6.75 6.75 6.75-3.02 6.75-6.75c0-.41.34-.75.75-.75s.75.34.75.75c0 4.56-3.7 8.25-8.25 8.25s-8.25-3.7-8.25-8.25S7.45 5.25 12 5.25z" opacity={.4} />
        <path d="M12.97 1.97c.3-.3.77-.3 1.06 0l3.5 3.5q.21.22.22.53 0 .31-.22.53l-3.5 3.5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L15.94 6l-2.97-2.97c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

RotateRightRegularDuotone.displayName = 'RotateRightRegularDuotone';

// Triple export pattern
export { RotateRightRegularDuotone, RotateRightRegularDuotone as RotateRightRegularDuotoneIcon, RotateRightRegularDuotone as SiRotateRightRegularDuotone };
export default RotateRightRegularDuotone;
export type { RotateRightRegularDuotoneProps };
