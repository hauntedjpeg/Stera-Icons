import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SoccerBallRegularDuotone = memo(
  forwardRef<SVGSVGElement, SoccerBallRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M13.49 3.89q1 .19 1.89.58l-2.63 1.65V8.5l2.57 2.2 2.2-.71.82-3.27q.66.78 1.1 1.73L19 10.3l1.23 1.04.03.66q0 .63-.1 1.24l-2.17-1.82-2.27.74-1.05 2.44L16 16.47l3.06-.21q-.54.87-1.25 1.59l-1.65.11-.6 1.48q-.88.43-1.87.63l1.1-2.72-1.38-1.9h-2.84l-1.38 1.9 1.1 2.72q-1-.21-1.88-.63l-.6-1.48-1.64-.11q-.72-.72-1.25-1.59l3.06.21 1.35-1.87-1.05-2.44-2.27-.74-2.18 1.82q-.09-.6-.09-1.24 0-.34.03-.66L5 10.3l-.46-1.85Q5 7.5 5.66 6.72l.82 3.27 2.2.72 2.57-2.2V6.1L8.62 4.48q.9-.4 1.9-.58l1.48.93zm-3.73 7.87.93 2.19h2.62l.93-2.19L12 9.84z" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallRegularDuotone.displayName = 'SoccerBallRegularDuotone';

// Triple export pattern
export { SoccerBallRegularDuotone, SoccerBallRegularDuotone as SoccerBallRegularDuotoneIcon, SoccerBallRegularDuotone as SiSoccerBallRegularDuotone };
export default SoccerBallRegularDuotone;
export type { SoccerBallRegularDuotoneProps };
