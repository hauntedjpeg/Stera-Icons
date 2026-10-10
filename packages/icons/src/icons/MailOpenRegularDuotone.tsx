import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailOpenRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailOpenRegularDuotone = memo(
  forwardRef<SVGSVGElement, MailOpenRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.25 9.5q0 .36.3.6l1.2.93V18c0 1.24 1 2.25 2.25 2.25h12c1.24 0 2.25-1 2.25-2.25v-7.02l1.2-.87q.3-.24.3-.61V18c0 2.07-1.68 3.75-3.75 3.75H6c-2.07 0-3.75-1.68-3.75-3.75z" opacity={.4} />
        <path fillRule="evenodd" d="M9.66 2.78c1.4-1.02 3.29-1.02 4.68 0l5.8 4.26c.73.54 1.38 1.31 1.6 2.3.06.3-.06.6-.3.77l-6.7 4.91c-.65.48-1.42.73-2.22.73h-1.37c-.83 0-1.64-.27-2.3-.78l-6.3-4.88c-.24-.17-.34-.46-.28-.75.2-1 .86-1.76 1.6-2.3zM13.45 4c-.86-.63-2.04-.63-2.9 0l-5.8 4.26q-.6.43-.87.98l5.9 4.55q.6.46 1.37.47h1.37q.73 0 1.33-.44l6.26-4.59q-.27-.54-.86-.97z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailOpenRegularDuotone.displayName = 'MailOpenRegularDuotone';

// Triple export pattern
export { MailOpenRegularDuotone, MailOpenRegularDuotone as MailOpenRegularDuotoneIcon, MailOpenRegularDuotone as SiMailOpenRegularDuotone };
export default MailOpenRegularDuotone;
export type { MailOpenRegularDuotoneProps };
