import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailOpenRegularProps = Omit<IconBaseProps, 'children'>;

const MailOpenRegular = memo(
  forwardRef<SVGSVGElement, MailOpenRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.66 2.78c1.4-1.02 3.29-1.02 4.68 0l5.8 4.26c.95.7 1.54 1.79 1.6 2.96h.01v8c0 2.07-1.68 3.75-3.75 3.75H6c-2.07 0-3.75-1.68-3.75-3.75v-8c.07-1.17.66-2.26 1.61-2.96zm5.08 12.24c-.65.48-1.42.73-2.22.73h-1.37c-.83 0-1.64-.27-2.3-.78l-5.1-3.94V18c0 1.24 1 2.25 2.25 2.25h12c1.24 0 2.25-1 2.25-2.25v-7.02zM13.44 4c-.85-.63-2.03-.63-2.89 0l-5.8 4.26q-.55.4-.81 1.03l5.83 4.5q.62.46 1.38.47h1.37q.73 0 1.33-.44l6.2-4.55q-.26-.61-.8-1.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailOpenRegular.displayName = 'MailOpenRegular';

// Triple export pattern
export { MailOpenRegular, MailOpenRegular as MailOpenRegularIcon, MailOpenRegular as SiMailOpenRegular };
export default MailOpenRegular;
export type { MailOpenRegularProps };
