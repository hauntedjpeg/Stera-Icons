import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotationLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.38 1.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v2.17q1.82.21 3.35 1.18c1.26.8 2.27 1.95 2.9 3.3.64 1.35.88 2.85.7 4.34-.2 1.48-.8 2.88-1.75 4.03-.31.37-.86.42-1.23.12-.38-.31-.43-.86-.12-1.24.74-.9 1.21-1.98 1.36-3.13.14-1.16-.04-2.33-.54-3.38s-1.28-1.94-2.26-2.56q-1.11-.7-2.4-.9V8c0 .35-.22.67-.55.8-.32.14-.7.07-.95-.18l-3-3c-.34-.34-.34-.9 0-1.24z" />
        <path d="M5.92 7c.3-.38.86-.43 1.23-.12.37.3.43.86.12 1.23-.74.9-1.2 1.98-1.35 3.14-.14 1.15.05 2.32.54 3.37.5 1.04 1.28 1.93 2.26 2.55q1.11.7 2.4.9V16c0-.35.22-.67.54-.8.33-.14.7-.07.96.18l3 3c.34.34.34.9 0 1.24l-3 3c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-2.18q-1.79-.2-3.34-1.17c-1.26-.8-2.26-1.94-2.9-3.29s-.88-2.85-.7-4.33S4.97 8.15 5.92 7" opacity={.4} />
    </IconBase>
  ))
);

RotationLeftFillDuotone.displayName = 'RotationLeftFillDuotone';

// Triple export pattern
export { RotationLeftFillDuotone, RotationLeftFillDuotone as RotationLeftFillDuotoneIcon, RotationLeftFillDuotone as SiRotationLeftFillDuotone };
export default RotationLeftFillDuotone;
export type { RotationLeftFillDuotoneProps };
