import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VolleyballBoldProps = Omit<IconBaseProps, 'children'>;

const VolleyballBold = memo(
  forwardRef<SVGSVGElement, VolleyballBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c1.76 0 3.4.45 4.84 1.25 1.64.9 3 2.27 3.91 3.9C21.55 8.6 22 10.26 22 12c0 3.73-2.05 6.99-5.08 8.7-1.45.83-3.13 1.3-4.92 1.3q-.39 0-.77-.03C6.18 21.6 2.17 17.44 2 12.33V12c0-1.78.46-3.45 1.28-4.9C4.99 4.06 8.25 2 12 2M7.22 12.11c.55 3.79 2.3 6.15 4.46 7.88L12 20q1.03 0 1.98-.25c-.76-.58-1.33-1.3-1.77-2.06-.6-1.04-.94-2.18-1.13-3.13l-.05.04-.1-.9-.07-.5c-1.5-.62-2.69-.95-3.64-1.09m-2.02.03q-.72.19-1.17.57c.23 2.55 1.65 4.76 3.7 6.06-1.24-1.72-2.16-3.87-2.53-6.63m14.8-.49c-.97 2.12-2.74 4.15-5.48 5.86q.68.84 1.77 1.24C18.52 17.33 20 14.84 20 12zm-2.52-5.48c-.2 1.09-.75 2.15-1.42 3.13q-.36.5-.77 1-1.1 1.35-2.45 2.62c.08.7.25 1.8.67 2.86 3.83-2.4 5.27-5.32 5.36-7.88q-.57-.96-1.39-1.73m-7.12 1.14c-1.78-.4-3.72-.27-5.44.96q-.52.98-.75 2.1.82-.3 1.9-.33c1.46-.03 3.26.37 5.52 1.3q1.3-1.24 2.28-2.46c-.84-.61-2.1-1.25-3.51-1.57M12 4c-1.5 0-2.92.42-4.12 1.14 1-.08 2 .01 2.91.22 1.65.36 3.12 1.1 4.2 1.86q.75-1.43.53-2.4-1.6-.8-3.52-.82" clipRule="evenodd" />
    </IconBase>
  ))
);

VolleyballBold.displayName = 'VolleyballBold';

// Triple export pattern
export { VolleyballBold, VolleyballBold as VolleyballBoldIcon, VolleyballBold as SiVolleyballBold };
export default VolleyballBold;
export type { VolleyballBoldProps };
