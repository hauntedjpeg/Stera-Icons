import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotationLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.02 7.08c.26-.32.73-.37 1.05-.1.32.26.37.73.1 1.05-.75.91-1.23 2.02-1.37 3.2-.15 1.17.04 2.37.55 3.44.5 1.07 1.3 1.97 2.3 2.6s2.17.98 3.35.98h1.19l-1.72-1.72c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l3 3c.3.3.3.77 0 1.06l-3 3c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.72-1.72h-1.46c-1.38-.05-2.71-.47-3.88-1.2-1.24-.79-2.23-1.91-2.86-3.24s-.86-2.8-.68-4.27c.18-1.45.77-2.83 1.7-3.96" opacity={.4} />
        <path d="M11.47 1.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.72 1.72h1.47c1.37.05 2.7.47 3.87 1.2 1.24.8 2.24 1.92 2.86 3.25.63 1.33.86 2.81.68 4.27-.19 1.46-.78 2.84-1.72 3.97-.26.32-.74.36-1.05.1s-.37-.74-.1-1.06c.75-.91 1.23-2.02 1.38-3.2.15-1.17-.04-2.37-.54-3.44-.51-1.07-1.31-1.98-2.31-2.62-.94-.6-2.02-.93-3.13-.97h-1.41l1.72 1.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3-3c-.3-.3-.3-.77 0-1.06z" />
    </IconBase>
  ))
);

RotationLeftRegularDuotone.displayName = 'RotationLeftRegularDuotone';

// Triple export pattern
export { RotationLeftRegularDuotone, RotationLeftRegularDuotone as RotationLeftRegularDuotoneIcon, RotationLeftRegularDuotone as SiRotationLeftRegularDuotone };
export default RotationLeftRegularDuotone;
export type { RotationLeftRegularDuotoneProps };
