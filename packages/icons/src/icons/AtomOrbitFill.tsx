import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomOrbitFillProps = Omit<IconBaseProps, 'children'>;

const AtomOrbitFill = memo(
  forwardRef<SVGSVGElement, AtomOrbitFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-orbit-fill" {...props}>
      <path d="M6.18 18.94a1 1 0 0 1 1.39-.28 8 8 0 0 0 8.43.27 1 1 0 0 1 .46-.14l.04-.02a.87.87 0 1 1 .97 1.46l-.1.06a1 1 0 0 1-.37.37 10 10 0 0 1-10.54-.33 1 1 0 0 1-.28-1.39M3.46 15.2a1.5 1.5 0 1 1 1.5 2.6 1.5 1.5 0 0 1-1.5-2.6M18.5 15.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 0 1-2.6-1.5M12 7.63a4.38 4.38 0 1 1 0 8.75 4.38 4.38 0 0 1 0-8.75M7.61 3.15a.88.88 0 0 1 .78 1.57l-.05.02a1 1 0 0 1-.34.33 8 8 0 0 0-3.99 7.44 1 1 0 1 1-2 .12A10 10 0 0 1 7 3.34a1 1 0 0 1 .5-.13zM15.22 3.55a.87.87 0 0 1 1.17-.4 10 10 0 0 1 3.94 3.54q0 .03.03.05l.13.21.05.1.08.14a10 10 0 0 1 1.15 3.38l.05.36q.09.84.04 1.7a.88.88 0 0 1-1.75-.12l.02-.5V12a8.2 8.2 0 0 0-3.33-6.56 8 8 0 0 0-.74-.48l-.02-.01-.43-.23a.87.87 0 0 1-.4-1.17M12 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

AtomOrbitFill.displayName = 'AtomOrbitFill';

// Triple export pattern (lucide-react style)
export { AtomOrbitFill, AtomOrbitFill as AtomOrbitFillIcon, AtomOrbitFill as SiAtomOrbitFill };
export default AtomOrbitFill;
export type { AtomOrbitFillProps };
