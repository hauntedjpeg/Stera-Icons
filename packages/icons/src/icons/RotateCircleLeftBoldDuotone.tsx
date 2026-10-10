import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M9.8 6.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-.79.8h1.84c2.62 0 4.75 2.13 4.75 4.75S14.87 18 12.25 18c-1.6 0-3.02-.8-3.88-2-.32-.46-.21-1.08.24-1.4s1.07-.21 1.4.24c.5.7 1.31 1.16 2.24 1.16 1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75h-1.84l.8.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-2.43-2.42c-.43-.43-.43-1.13 0-1.56z" />
    </IconBase>
  ))
);

RotateCircleLeftBoldDuotone.displayName = 'RotateCircleLeftBoldDuotone';

// Triple export pattern
export { RotateCircleLeftBoldDuotone, RotateCircleLeftBoldDuotone as RotateCircleLeftBoldDuotoneIcon, RotateCircleLeftBoldDuotone as SiRotateCircleLeftBoldDuotone };
export default RotateCircleLeftBoldDuotone;
export type { RotateCircleLeftBoldDuotoneProps };
