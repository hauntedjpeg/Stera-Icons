import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContactBookFillProps = Omit<IconBaseProps, 'children'>;

const ContactBookFill = memo(
  forwardRef<SVGSVGElement, ContactBookFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 9.38a1.62 1.62 0 1 1 0 3.24 1.62 1.62 0 0 1 0-3.24" />
        <path fillRule="evenodd" d="M15.2 3.13q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v6.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05h-4.4q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.36-1.37H3a.88.88 0 0 1 0-1.75h2.13v-2.75H3a.88.88 0 0 1 0-1.76h2.13V8.38H3a.87.87 0 1 1 0-1.74h2.18q.06-.75.37-1.39.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04zM13 7.63a3.37 3.37 0 0 0-2.53 5.6 4.8 4.8 0 0 0-2.28 2.44.88.88 0 0 0 1.62.66c.44-1.1 1.66-1.95 3.19-1.95s2.75.86 3.19 1.95a.88.88 0 0 0 1.62-.66 4.8 4.8 0 0 0-2.28-2.44A3.37 3.37 0 0 0 13 7.63" clipRule="evenodd" />
    </IconBase>
  ))
);

ContactBookFill.displayName = 'ContactBookFill';

// Triple export pattern (lucide-react style)
export { ContactBookFill, ContactBookFill as ContactBookFillIcon, ContactBookFill as SiContactBookFill };
export default ContactBookFill;
export type { ContactBookFillProps };
