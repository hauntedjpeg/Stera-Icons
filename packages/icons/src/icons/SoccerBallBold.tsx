import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallBoldProps = Omit<IconBaseProps, 'children'>;

const SoccerBallBold = memo(
  forwardRef<SVGSVGElement, SoccerBallBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2q1.96.01 3.68.7c1.7.67 3.17 1.8 4.27 3.23C21.23 7.61 22 9.72 22 12q0 .53-.05 1.03c-.17 1.66-.74 3.2-1.62 4.5-1.35 2.03-3.4 3.53-5.83 4.15Q13.3 22 12 22t-2.5-.32c-2.42-.62-4.48-2.12-5.83-4.14-.88-1.32-1.45-2.86-1.62-4.5Q2 12.5 2 12c0-2.28.77-4.39 2.05-6.07C5.15 4.5 6.62 3.37 8.32 2.7Q10.04 2 12 2M9.48 17.39l1 2.47q.74.14 1.52.14t1.52-.14l1-2.47-1.23-1.69h-2.58zm-2.6.76q.5.4 1.05.74l-.28-.69zm9.46.05-.27.69q.56-.33 1.04-.74zM4.11 13.34q.25 1.45.97 2.68l2.78.2 1.2-1.65-.95-2.21-1.66-.54-.38-.12zm13.44-1.52-1.66.54-.95 2.21 1.2 1.64 2.78-.2q.71-1.2.97-2.67l-1.96-1.64zm-7.5.01.8 1.87h2.3l.79-1.87L12 10.17zM4.5 9.23q-.26.74-.4 1.51l.64-.53zm14.78.98.63.53q-.12-.78-.4-1.5zM8.6 4.75q-1.55.75-2.66 2.03l.75 3.01 1.94.63L11 8.4V6.25zm4.4 1.5V8.4l2.37 2.03 1.94-.63.75-3.01Q16.95 5.5 15.4 4.75zM12 4q-.4 0-.77.04l.77.48.77-.48Q12.4 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallBold.displayName = 'SoccerBallBold';

// Triple export pattern
export { SoccerBallBold, SoccerBallBold as SoccerBallBoldIcon, SoccerBallBold as SiSoccerBallBold };
export default SoccerBallBold;
export type { SoccerBallBoldProps };
