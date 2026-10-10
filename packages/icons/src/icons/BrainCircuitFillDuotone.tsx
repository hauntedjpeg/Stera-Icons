import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrainCircuitFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrainCircuitFillDuotone = memo(
  forwardRef<SVGSVGElement, BrainCircuitFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.52 14.86q.36.05.55.36l.86 1.5q.27-.07.57-.07c1.4 0 2.55 1.14 2.55 2.55 0 1.4-1.14 2.55-2.55 2.55-1.4 0-2.55-1.14-2.55-2.55 0-.67.26-1.28.68-1.73L14 16.35h-1.24v-1.5h1.77M19.2 10.35c1.4 0 2.55 1.14 2.55 2.55 0 1.4-1.14 2.55-2.55 2.55-1.15 0-2.12-.76-2.44-1.8h-4.01v-1.5h4.01c.32-1.04 1.3-1.8 2.44-1.8M16.5 2.25c1.4 0 2.55 1.14 2.55 2.55 0 1.15-.76 2.12-1.8 2.44V9.3c0 .41-.34.75-.75.75h-3.75v-1.5h3V7.24c-1.04-.32-1.8-1.3-1.8-2.44 0-1.4 1.14-2.55 2.55-2.55" opacity={0.4} />
        <path d="M9.75 2.25q.67 0 1.26.2c1.37.48 1.74 1.94 1.74 2.97v13c0 .98-.32 2.27-1.48 2.86q-.9.46-1.97.47c-2.26 0-4.11-1.72-4.33-3.92-1.6-.64-2.72-2.2-2.72-4.03 0-1.24.52-2.35 1.35-3.14q-.44-.82-.45-1.81c0-1.79 1.2-3.3 2.85-3.76q.28-.96.96-1.67c.71-.72 1.7-1.17 2.79-1.17" />
    </IconBase>
  ))
);

BrainCircuitFillDuotone.displayName = 'BrainCircuitFillDuotone';

// Triple export pattern
export { BrainCircuitFillDuotone, BrainCircuitFillDuotone as BrainCircuitFillDuotoneIcon, BrainCircuitFillDuotone as SiBrainCircuitFillDuotone };
export default BrainCircuitFillDuotone;
export type { BrainCircuitFillDuotoneProps };
