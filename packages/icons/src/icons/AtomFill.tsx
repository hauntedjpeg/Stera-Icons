import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomFillProps = Omit<IconBaseProps, 'children'>;

const AtomFill = memo(
  forwardRef<SVGSVGElement, AtomFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.9 3.32c1.42-.37 2.9-.28 3.98.8s1.17 2.56.8 3.98a13 13 0 0 1-1.95 3.9c.9 1.31 1.62 2.65 1.94 3.9.38 1.42.29 2.9-.8 3.98-1.08 1.08-2.55 1.17-3.97.8a13 13 0 0 1-3.9-1.95c-1.32.9-2.65 1.62-3.9 1.94-1.42.38-2.9.29-3.98-.8-1.08-1.08-1.17-2.55-.8-3.97A13 13 0 0 1 5.27 12v-.01c-.9-1.3-1.62-2.64-1.95-3.89-.37-1.42-.28-2.9.8-3.98s2.56-1.17 3.98-.8c1.25.33 2.58 1.04 3.9 1.95 1.31-.91 2.65-1.62 3.9-1.95M6.4 13.47a10 10 0 0 0-1.38 2.87c-.3 1.1-.13 1.83.34 2.3s1.2.63 2.3.34q1.3-.34 2.87-1.38a28 28 0 0 1-1.63-1.43q0-.03-.03-.04l-.88-.87-.09-.1-.12-.12-.15-.16q-.54-.57-1.04-1.17zm11 .24q-.5.6-1.03 1.17l-.2.2q0 .03-.04.05l-.12.13a32 32 0 0 1-2.54 2.34 10 10 0 0 0 2.87 1.38c1.1.3 1.83.13 2.3-.34s.63-1.2.34-2.3a10 10 0 0 0-1.38-2.87zM12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.66 5.02c-1.1-.3-1.83-.13-2.3.34s-.63 1.2-.34 2.3q.34 1.3 1.38 2.87l.05-.07q.66-.8 1.37-1.54l.06-.06.86-.87.09-.08.14-.14q.75-.71 1.53-1.36l.03-.01a10 10 0 0 0-2.87-1.38m10.98.34c-.47-.47-1.2-.63-2.3-.34q-1.3.35-2.87 1.37.72.59 1.41 1.24l.2.19.05.05.13.12.87.88.05.05a30 30 0 0 1 1.38 1.55l.04.06a10 10 0 0 0 1.38-2.87c.3-1.1.13-1.83-.34-2.3" clipRule="evenodd" />
    </IconBase>
  ))
);

AtomFill.displayName = 'AtomFill';

// Triple export pattern (lucide-react style)
export { AtomFill, AtomFill as AtomFillIcon, AtomFill as SiAtomFill };
export default AtomFill;
export type { AtomFillProps };
