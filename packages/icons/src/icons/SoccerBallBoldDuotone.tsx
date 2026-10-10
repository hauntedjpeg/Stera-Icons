import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerBallBoldDuotone = memo(
  forwardRef<SVGSVGElement, SoccerBallBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12.77 4.04q1.4.14 2.63.72L13 6.26v2.13l2.37 2.03 1.94-.63.75-3q.94 1.07 1.45 2.45l-.24.97.63.53q.1.62.1 1.26 0 .69-.11 1.34l-1.96-1.64-2.04.66-.95 2.21 1.2 1.64 2.78-.2q-.73 1.23-1.8 2.14l-.78.05-.27.69q-1.18.7-2.55.96l1-2.46-1.23-1.69h-2.58l-1.23 1.69 1 2.46q-1.37-.26-2.55-.96l-.27-.69-.78-.05q-1.07-.9-1.8-2.13l2.79.2 1.19-1.65-.95-2.21-2.04-.66-1.96 1.64Q4.01 12.68 4 12q0-.64.1-1.26l.63-.53-.24-.97q.5-1.37 1.45-2.46l.75 3.01 1.94.63L11 8.4V6.25l-2.4-1.5q1.23-.57 2.63-.71l.77.48zm-2.71 7.8.8 1.86h2.28l.8-1.87L12 10.17z" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallBoldDuotone.displayName = 'SoccerBallBoldDuotone';

// Triple export pattern
export { SoccerBallBoldDuotone, SoccerBallBoldDuotone as SoccerBallBoldDuotoneIcon, SoccerBallBoldDuotone as SiSoccerBallBoldDuotone };
export default SoccerBallBoldDuotone;
export type { SoccerBallBoldDuotoneProps };
