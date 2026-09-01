import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type NoteBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const NoteBoldDuotone = memo(
  forwardRef<SVGSVGElement, NoteBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.2 3q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.87q.02.66-.08 1.2a3 3 0 0 1-.36.87c-.2.33-.48.6-.79.9l-4.13 4.13c-.3.31-.57.59-.9.79a3 3 0 0 1-.87.36c-.37.09-.75.08-1.2.08H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 16.43 3 15.2V8.8q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q7.57 3 8.8 3zM8.8 5c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 5 8.8v6.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h3.87c.54 0 .65 0 .74-.03a1 1 0 0 0 .28-.12c.08-.04.16-.12.54-.5l4.13-4.12c.37-.38.45-.46.5-.54a1 1 0 0 0 .11-.28c.02-.1.03-.2.03-.74V8.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C16.64 5 16.06 5 15.2 5z" clipRule="evenodd" />
        <path d="M19 12.67c0 .54 0 .65-.03.74a1 1 0 0 1-.12.28c-.03.06-.08.12-.27.31H16.2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v2.38c-.19.19-.25.24-.3.27a1 1 0 0 1-.3.12c-.08.02-.19.03-.73.03H12v-2.8q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03H19z" opacity={.4} />
    </IconBase>
  ))
);

NoteBoldDuotone.displayName = 'NoteBoldDuotone';

// Triple export pattern (lucide-react style)
export { NoteBoldDuotone, NoteBoldDuotone as NoteBoldDuotoneIcon, NoteBoldDuotone as SiNoteBoldDuotone };
export default NoteBoldDuotone;
export type { NoteBoldDuotoneProps };
