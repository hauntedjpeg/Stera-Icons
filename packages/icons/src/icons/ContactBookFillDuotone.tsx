import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContactBookFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContactBookFillDuotone = memo(
  forwardRef<SVGSVGElement, ContactBookFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 9.38c.9 0 1.63.72 1.63 1.62s-.73 1.62-1.63 1.63-1.62-.73-1.62-1.63.72-1.62 1.62-1.62" opacity={0.4} />
        <path fillRule="evenodd" d="M15.2 3.13q1.24-.01 2.04.04.83.04 1.52.38 1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v6.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05h-4.4q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7c-.21-.42-.3-.87-.36-1.37H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h2.13v-2.75H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h2.13V8.37H3c-.48 0-.87-.39-.87-.87s.39-.87.87-.87h2.18q.06-.75.37-1.39.57-1.11 1.7-1.7.68-.33 1.5-.37.82-.06 2.05-.04zM13 7.63c-1.86 0-3.37 1.5-3.37 3.37 0 .86.31 1.64.84 2.23-1.04.53-1.86 1.39-2.28 2.44-.18.45.04.96.48 1.14.45.18.96-.04 1.14-.48.44-1.1 1.66-1.95 3.19-1.95s2.75.86 3.19 1.95c.18.44.69.66 1.14.48s.66-.69.48-1.14c-.42-1.05-1.24-1.9-2.28-2.44.53-.6.85-1.37.85-2.23 0-1.86-1.52-3.37-3.38-3.37" clipRule="evenodd" opacity={0.4} />
        <path fillRule="evenodd" d="M13 7.63c1.86 0 3.37 1.5 3.37 3.37 0 .86-.31 1.64-.84 2.23 1.04.53 1.86 1.39 2.28 2.44.18.45-.04.96-.49 1.14-.44.18-.95-.04-1.13-.48-.44-1.1-1.66-1.95-3.19-1.95s-2.75.86-3.19 1.95c-.18.44-.69.66-1.14.48s-.66-.69-.48-1.14c.42-1.05 1.24-1.9 2.28-2.44-.53-.6-.85-1.37-.85-2.23 0-1.86 1.52-3.37 3.38-3.37m0 1.75c-.9 0-1.63.72-1.63 1.62s.73 1.62 1.63 1.63 1.62-.73 1.62-1.63S13.9 9.38 13 9.38" clipRule="evenodd" />
    </IconBase>
  ))
);

ContactBookFillDuotone.displayName = 'ContactBookFillDuotone';

// Triple export pattern
export { ContactBookFillDuotone, ContactBookFillDuotone as ContactBookFillDuotoneIcon, ContactBookFillDuotone as SiContactBookFillDuotone };
export default ContactBookFillDuotone;
export type { ContactBookFillDuotoneProps };
