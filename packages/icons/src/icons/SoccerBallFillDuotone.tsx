import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerBallFillDuotone = memo(
  forwardRef<SVGSVGElement, SoccerBallFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball-fill-duotone" {...props}>
      <path d="m13.66 16 1.62 2.24-1.4 3.45a10 10 0 0 1-3.76 0l-1.4-3.45L10.34 16zM7.66 12.15l1.23 2.87L7.3 17.2l-3.85-.27a10 10 0 0 1-1.2-3.35L5 11.29zM21.75 13.59a10 10 0 0 1-1.2 3.35l-3.85.27-1.6-2.2 1.24-2.86 2.66-.87zM11.13 5.08v2.8l-3.01 2.58-2.58-.84-1.02-4.07a10 10 0 0 1 3.33-2.51zM16.15 3.04a10 10 0 0 1 3.33 2.51l-1.02 4.07-2.58.84-3-2.58v-2.8z" opacity={0.4} />
        <path d="M12 2.13q2.23.01 4.15.9l-3.27 2.05v2.8l3 2.58 2.58-.84 1.02-4.07a9.8 9.8 0 0 1 2.27 8.04L19 11.29l-2.66.86-1.23 2.87 1.59 2.19 3.85-.27a9.9 9.9 0 0 1-6.67 4.75l1.4-3.45L13.66 16h-3.32l-1.62 2.23 1.4 3.45a9.9 9.9 0 0 1-6.67-4.75l3.85.27L8.9 15l-1.24-2.86L5 11.28l-2.75 2.3a10 10 0 0 1 2.27-8.03l1.02 4.07 2.58.84 3-2.58v-2.8L7.86 3.04A10 10 0 0 1 12 2.13" />
    </IconBase>
  ))
);

SoccerBallFillDuotone.displayName = 'SoccerBallFillDuotone';

// Triple export pattern (lucide-react style)
export { SoccerBallFillDuotone, SoccerBallFillDuotone as SoccerBallFillDuotoneIcon, SoccerBallFillDuotone as SiSoccerBallFillDuotone };
export default SoccerBallFillDuotone;
export type { SoccerBallFillDuotoneProps };
