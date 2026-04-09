import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallFillProps = Omit<IconBaseProps, 'children'>;

const SoccerBallFill = memo(
  forwardRef<SVGSVGElement, SoccerBallFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="soccer-ball-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.85 9.85 0 0 1 9.82 10.89 9.8 9.8 0 0 1-7.35 8.54A9.9 9.9 0 0 1 4.15 6.01 9.9 9.9 0 0 1 12 2.13M9.34 17.37l1.05 2.6a8 8 0 0 0 3.22 0l1.05-2.6-1.3-1.8h-2.71zM3.98 13.3A8 8 0 0 0 5 16.14l2.92.2L9.2 14.6l-1-2.33-2.16-.7zm11.82-1.03-1 2.33 1.27 1.75 2.92-.2q.78-1.3 1.03-2.85l-2.06-1.73zM8.6 4.6a8 8 0 0 0-2.8 2.14l.77 3.14 2.07.67 2.47-2.11V6.18zm4.27 1.57v2.27l2.46 2.11 2.07-.67.79-3.14a8 8 0 0 0-2.81-2.14z" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallFill.displayName = 'SoccerBallFill';

// Triple export pattern (lucide-react style)
export { SoccerBallFill, SoccerBallFill as SoccerBallFillIcon, SoccerBallFill as SiSoccerBallFill };
export default SoccerBallFill;
export type { SoccerBallFillProps };
