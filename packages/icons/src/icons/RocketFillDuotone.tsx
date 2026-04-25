import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RocketFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RocketFillDuotone = memo(
  forwardRef<SVGSVGElement, RocketFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.63 1.2c.27-.12.6-.1.86.07a12 12 0 0 1 4.58 5.27c.78 1.86.88 3.7.67 5.32a14 14 0 0 1-1.99 5.59l-.02.04a.9.9 0 0 1-.73.39H9a.9.9 0 0 1-.73-.4l-.02-.03-.25-.42a14 14 0 0 1-1.74-5.17c-.2-1.62-.1-3.46.67-5.32a12 12 0 0 1 4.58-5.27z" opacity={.4} />
        <path fillRule="evenodd" d="M13.5 19.13c.48 0 .87.39.87.87h-.87.87v.05l-.04.3q-.05.27-.23.67a4.5 4.5 0 0 1-1.6 1.7l-.5.33-.48-.32a4.6 4.6 0 0 1-1.61-1.71 3 3 0 0 1-.28-.97V20h.87-.88c0-.48.4-.87.88-.87zM12 20.9l.02-.02h-.04q.01 0 .02.02" clipRule="evenodd" />
        <path d="M6.2 9.56q-.08 1.2.06 2.3a14 14 0 0 0 1.99 5.59l.01.02v.01h.01c.16.25.44.4.73.4h.25l-3.79 2.36a.88.88 0 0 1-1.33-.6l-1-6.5a.9.9 0 0 1 .25-.76zM20.62 12.38c.2.2.29.48.25.75l-1 6.5a.88.88 0 0 1-1.33.61l-3.8-2.36H15c.3 0 .57-.15.73-.4l.02-.03.25-.42a14 14 0 0 0 1.74-5.17q.15-1.1.06-2.3zM12 7.13a1.62 1.62 0 1 1 0 3.24 1.62 1.62 0 0 1 0-3.24" />
    </IconBase>
  ))
);

RocketFillDuotone.displayName = 'RocketFillDuotone';

// Triple export pattern (lucide-react style)
export { RocketFillDuotone, RocketFillDuotone as RocketFillDuotoneIcon, RocketFillDuotone as SiRocketFillDuotone };
export default RocketFillDuotone;
export type { RocketFillDuotoneProps };
