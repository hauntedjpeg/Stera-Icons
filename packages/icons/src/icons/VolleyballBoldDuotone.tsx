import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const VolleyballBoldDuotone = memo(
  forwardRef<SVGSVGElement, VolleyballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.1 12.04q.5-.02 1.12.07c.55 3.79 2.3 6.15 4.46 7.88l-.3-.01c-1.33-.1-2.57-.53-3.64-1.2-1.25-1.73-2.17-3.88-2.54-6.63q.4-.1.9-.11M19 8.13c.58 1.05.94 2.24 1 3.52-.97 2.12-2.74 4.15-5.49 5.87q-.31-.39-.56-.82-.25-.45-.44-.92c3.83-2.4 5.27-5.32 5.36-7.88zM7.88 5.14q1.52-.1 2.92.22c1.64.36 3.11 1.1 4.18 1.86q-.22.45-.57.94l-.54.73c-.84-.62-2.1-1.26-3.51-1.58-1.78-.4-3.71-.27-5.44.96l.1-.18C5.7 6.87 6.7 5.86 7.88 5.14" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2c1.76 0 3.4.45 4.84 1.25 1.64.9 3 2.27 3.91 3.9C21.55 8.6 22 10.26 22 12c0 3.73-2.05 6.99-5.08 8.7-1.45.83-3.13 1.3-4.92 1.3q-.39 0-.77-.03C6.18 21.6 2.17 17.44 2 12.33V12c0-1.78.46-3.45 1.28-4.9C4.99 4.06 8.25 2 12 2M6.1 12.04c-.95.02-1.6.29-2.07.67.34 3.88 3.46 6.97 7.35 7.27L12 20q1.03 0 1.98-.25c-.76-.58-1.33-1.3-1.77-2.06-.6-1.04-.94-2.18-1.13-3.13l-.05.04-.1-.9-.07-.5c-2.13-.88-3.66-1.19-4.75-1.16m11.38-5.87c-.2 1.09-.75 2.15-1.42 3.13q-.36.5-.77 1-1.1 1.35-2.45 2.62c.1.92.36 2.47 1.1 3.78.53.92 1.27 1.67 2.35 2.05C18.52 17.33 20 14.84 20 12c0-1.4-.36-2.73-1-3.87q-.61-1.1-1.52-1.96M12 4C9 4 6.4 5.64 5.02 8.08q-.6 1.06-.85 2.29.82-.3 1.9-.33c1.46-.03 3.26.37 5.52 1.3 1.12-1.07 2.1-2.14 2.82-3.18.95-1.38 1.29-2.48 1.11-3.34Q13.92 4.02 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballBoldDuotone.displayName = 'VolleyballBoldDuotone';

// Triple export pattern
export { VolleyballBoldDuotone, VolleyballBoldDuotone as VolleyballBoldDuotoneIcon, VolleyballBoldDuotone as SiVolleyballBoldDuotone };
export default VolleyballBoldDuotone;
export type { VolleyballBoldDuotoneProps };
