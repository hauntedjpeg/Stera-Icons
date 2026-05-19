import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContactBookFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContactBookFillDuotone = memo(
  forwardRef<SVGSVGElement, ContactBookFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 9.38a1.63 1.63 0 1 1 0 3.25 1.63 1.63 0 0 1 0-3.26" opacity={0.4} />
        <path fillRule="evenodd" d="M15.2 3.13q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v6.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05h-4.4q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.36-1.37H3a.88.88 0 0 1 0-1.75h2.13v-2.75H3a.88.88 0 0 1 0-1.76h2.13V8.38H3a.87.87 0 1 1 0-1.74h2.18q.06-.75.37-1.39.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04zM13 7.63a3.38 3.38 0 0 0-2.53 5.6 4.8 4.8 0 0 0-2.28 2.44.88.88 0 0 0 1.62.66c.44-1.1 1.66-1.95 3.19-1.95s2.75.86 3.19 1.95a.88.88 0 0 0 1.62-.66 4.8 4.8 0 0 0-2.28-2.44A3.38 3.38 0 0 0 13 7.63" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M13 7.63a3.37 3.37 0 0 1 2.53 5.6 4.8 4.8 0 0 1 2.28 2.44.88.88 0 0 1-1.62.66c-.44-1.1-1.66-1.95-3.19-1.95s-2.75.86-3.19 1.95a.88.88 0 0 1-1.62-.66 4.8 4.8 0 0 1 2.28-2.44A3.38 3.38 0 0 1 13 7.63m0 1.75a1.63 1.63 0 1 0 0 3.25 1.63 1.63 0 0 0 0-3.26" clipRule="evenodd" />
    </IconBase>
  ))
);

ContactBookFillDuotone.displayName = 'ContactBookFillDuotone';

// Triple export pattern (lucide-react style)
export { ContactBookFillDuotone, ContactBookFillDuotone as ContactBookFillDuotoneIcon, ContactBookFillDuotone as SiContactBookFillDuotone };
export default ContactBookFillDuotone;
export type { ContactBookFillDuotoneProps };
