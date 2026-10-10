import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerBallRegularProps = Omit<IconBaseProps, 'children'>;

const SoccerBallRegular = memo(
  forwardRef<SVGSVGElement, SoccerBallRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25q1.91.01 3.59.68c1.66.66 3.1 1.76 4.16 3.15 1.25 1.64 2 3.7 2 5.92q0 .51-.05 1-.27 2.45-1.58 4.4c-1.31 1.97-3.32 3.43-5.68 4.04q-1.17.3-2.44.31-1.26 0-2.44-.3c-2.36-.62-4.37-2.08-5.68-4.05Q2.58 15.45 2.3 13q-.05-.49-.05-1c0-2.22.75-4.28 2-5.92 1.07-1.4 2.5-2.5 4.16-3.15q1.68-.67 3.59-.68m-2.8 15.1 1.1 2.72q.83.18 1.7.18t1.7-.18l1.1-2.72-1.38-1.9h-2.84zm-3.01.5q.97.97 2.23 1.58l-.6-1.47zm9.98.11-.6 1.47q1.27-.61 2.24-1.58zM3.84 13.24q.27 1.65 1.1 3.02l3.05.21 1.35-1.87-1.05-2.44-2.27-.74zm11.87-1.08-1.05 2.44L16 16.47l3.05-.21q.84-1.37 1.1-3.02l-2.18-1.82zm-5.95-.4.94 2.19h2.6l.94-2.19L12 9.84zm-5.2-3.31q-.65 1.34-.78 2.89L5 10.3zm14.43 1.85 1.23 1.04q-.13-1.55-.77-2.9zM8.62 4.47C7.47 5 6.46 5.77 5.67 6.72l.81 3.27 2.2.72 2.57-2.2V6.1zm4.13 1.65V8.5l2.57 2.2 2.2-.71.81-3.27q-1.21-1.45-2.95-2.25zM12 3.75q-.75 0-1.49.13l1.49.94 1.49-.94q-.72-.12-1.49-.13" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerBallRegular.displayName = 'SoccerBallRegular';

// Triple export pattern
export { SoccerBallRegular, SoccerBallRegular as SoccerBallRegularIcon, SoccerBallRegular as SiSoccerBallRegular };
export default SoccerBallRegular;
export type { SoccerBallRegularProps };
