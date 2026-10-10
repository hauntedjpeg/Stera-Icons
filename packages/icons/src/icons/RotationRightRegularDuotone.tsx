import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotationRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.93 6.97c.32-.26.8-.21 1.06.1.93 1.14 1.52 2.52 1.7 3.97s-.05 2.94-.68 4.27-1.62 2.45-2.86 3.24c-1.16.73-2.5 1.15-3.87 1.2H10.8l1.72 1.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3-3c-.3-.3-.3-.77 0-1.06l3-3c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.72 1.72H12c1.18 0 2.35-.34 3.35-.97 1-.64 1.8-1.54 2.3-2.61s.7-2.27.55-3.44c-.14-1.18-.62-2.29-1.37-3.2-.27-.32-.22-.8.1-1.06" opacity={.4} />
        <path d="M11.47 1.47c.3-.3.77-.3 1.06 0l3 3c.3.3.3.77 0 1.06l-3 3c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.72-1.72h-1.41c-1.11.04-2.19.38-3.13.97-1 .64-1.8 1.55-2.3 2.62-.51 1.07-.7 2.27-.55 3.44.15 1.18.63 2.29 1.38 3.2.27.32.22.8-.1 1.06-.31.26-.79.22-1.05-.1-.94-1.13-1.53-2.51-1.72-3.97s.05-2.94.68-4.27C5.6 7.37 6.6 6.24 7.85 5.46c1.24-.8 2.68-1.21 4.15-1.21h1.19l-1.72-1.72c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

RotationRightRegularDuotone.displayName = 'RotationRightRegularDuotone';

// Triple export pattern
export { RotationRightRegularDuotone, RotationRightRegularDuotone as RotationRightRegularDuotoneIcon, RotationRightRegularDuotone as SiRotationRightRegularDuotone };
export default RotationRightRegularDuotone;
export type { RotationRightRegularDuotoneProps };
