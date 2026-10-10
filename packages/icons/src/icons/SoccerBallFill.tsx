import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallFillProps = Omit<IconBaseProps, 'children'>;

const SoccerBallFill = memo(
  forwardRef<SVGSVGElement, SoccerBallFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13q1.93 0 3.63.69c1.68.66 3.14 1.77 4.22 3.19 1.27 1.66 2.02 3.74 2.02 5.99q0 .51-.05 1.02c-.16 1.63-.73 3.15-1.6 4.45-1.32 2-3.36 3.48-5.75 4.1q-1.19.3-2.47.3t-2.47-.3c-2.39-.62-4.43-2.1-5.76-4.1-.86-1.3-1.43-2.82-1.6-4.45q-.04-.51-.04-1.02c0-2.25.75-4.33 2.02-6C5.23 4.6 6.7 3.49 8.37 2.83q1.7-.69 3.63-.7M9.34 17.37l1.05 2.6q.78.16 1.61.16t1.61-.17l1.05-2.59-1.3-1.8h-2.71zM3.98 13.3q.25 1.55 1.03 2.85l2.92.2L9.2 14.6l-1-2.33-2.16-.7zm11.82-1.03-1 2.33 1.27 1.75 2.92-.2q.78-1.3 1.03-2.85l-2.06-1.73zM8.6 4.6c-1.09.5-2.04 1.24-2.8 2.14l.77 3.14 2.07.67 2.47-2.11V6.18zm4.27 1.57v2.27l2.46 2.11 2.07-.67.79-3.14q-1.17-1.37-2.81-2.14z" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallFill.displayName = 'SoccerBallFill';

// Triple export pattern
export { SoccerBallFill, SoccerBallFill as SoccerBallFillIcon, SoccerBallFill as SiSoccerBallFill };
export default SoccerBallFill;
export type { SoccerBallFillProps };
