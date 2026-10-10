import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtSignBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtSignBoldDuotone = memo(
  forwardRef<SVGSVGElement, AtSignBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2c5.52 0 10 4.48 10 10q0 .5-.05 1c-.16 1.66-.87 2.93-1.9 3.64-1.03.7-2.3.82-3.39.26.48.23 1.06.04 1.31-.43.26-.49.08-1.1-.4-1.35.39.2.88.2 1.33-.12s.94-1 1.06-2.2q.04-.4.04-.8c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c1.46 0 2.82-.39 4-1.07.48-.28 1.09-.11 1.37.36.27.48.1 1.1-.37 1.37-1.47.85-3.18 1.34-5 1.34-5.52 0-10-4.48-10-10S6.48 2 12 2" opacity={.4} />
        <path fillRule="evenodd" d="M15.6 7.4c.55 0 1 .45 1 1v4.5c0 1.35.53 1.99.96 2.22.49.26.67.86.41 1.35s-.86.67-1.35.41q-.95-.5-1.47-1.52c-.83.77-1.93 1.24-3.15 1.24-2.54 0-4.6-2.06-4.6-4.6S9.46 7.4 12 7.4c.97 0 1.87.3 2.62.82.08-.47.49-.82.98-.82m-3.6 2c-1.44 0-2.6 1.16-2.6 2.6s1.16 2.6 2.6 2.6c1.35 0 2.45-1.02 2.59-2.33l.01-.27-.01-.27c-.14-1.3-1.24-2.33-2.59-2.33" clipRule="evenodd" />
    </IconBase>
  ))
);

AtSignBoldDuotone.displayName = 'AtSignBoldDuotone';

// Triple export pattern
export { AtSignBoldDuotone, AtSignBoldDuotone as AtSignBoldDuotoneIcon, AtSignBoldDuotone as SiAtSignBoldDuotone };
export default AtSignBoldDuotone;
export type { AtSignBoldDuotoneProps };
