import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RocketFillProps = Omit<IconBaseProps, 'children'>;

const RocketFill = memo(
  forwardRef<SVGSVGElement, RocketFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.5 19.13c.48 0 .87.39.87.87v.05l-.04.3q-.05.27-.23.67a4.6 4.6 0 0 1-1.6 1.7l-.5.33-.48-.32a4.6 4.6 0 0 1-1.61-1.71 3 3 0 0 1-.28-.97V20c0-.48.39-.87.87-.87z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M11.63 1.2c.27-.12.6-.1.85.07a12 12 0 0 1 4.6 5.27q.61 1.54.72 3.02l2.82 2.82c.2.2.29.48.24.75l-1 6.5a.88.88 0 0 1-1.32.61l-3.8-2.36H9.26l-3.79 2.36a.88.88 0 0 1-1.33-.6l-1-6.5a.9.9 0 0 1 .25-.76L6.2 9.56q.1-1.48.73-3.02a12 12 0 0 1 4.58-5.27zm-6.7 12.1.73 4.75 2.16-1.35a14 14 0 0 1-1.55-4.73zm12.8-1.33a14 14 0 0 1-1.55 4.73l2.16 1.35.73-4.75zM12 7a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 12 7" clipRule="evenodd" />
    </IconBase>
  ))
);

RocketFill.displayName = 'RocketFill';

// Triple export pattern (lucide-react style)
export { RocketFill, RocketFill as RocketFillIcon, RocketFill as SiRocketFill };
export default RocketFill;
export type { RocketFillProps };
