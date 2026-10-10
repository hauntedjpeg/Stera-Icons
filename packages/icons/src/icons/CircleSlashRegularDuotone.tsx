import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.34 17.28q-.24.29-.5.55-.27.27-.56.5L5.66 6.74q.24-.3.5-.56.28-.27.56-.5z" opacity={.4} />
        <path fillRule="evenodd" d="M5.1 5.1c3.81-3.8 9.99-3.8 13.8 0 3.8 3.81 3.8 9.99 0 13.8-3.81 3.8-9.99 3.8-13.8 0-3.8-3.81-3.8-9.99 0-13.8m12.73 1.07c-3.22-3.23-8.44-3.23-11.66 0s-3.22 8.44 0 11.66 8.44 3.23 11.66 0 3.23-8.44 0-11.66" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashRegularDuotone.displayName = 'CircleSlashRegularDuotone';

// Triple export pattern
export { CircleSlashRegularDuotone, CircleSlashRegularDuotone as CircleSlashRegularDuotoneIcon, CircleSlashRegularDuotone as SiCircleSlashRegularDuotone };
export default CircleSlashRegularDuotone;
export type { CircleSlashRegularDuotoneProps };
