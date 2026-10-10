import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailOpenFillProps = Omit<IconBaseProps, 'children'>;

const MailOpenFill = memo(
  forwardRef<SVGSVGElement, MailOpenFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22 18c0 2.21-1.8 4-4 4H6c-2.2 0-4-1.79-4-4v-7.99l.39.28 6.31 4.88c.7.54 1.56.83 2.45.83h1.37c.85 0 1.68-.27 2.36-.77l6.71-4.92.41-.3z" />
        <path d="M9.52 2.58c1.47-1.08 3.49-1.08 4.96 0l5.8 4.26q.66.49 1.09 1.17l-.95.68h-.01l-6.71 4.92c-.34.26-.76.4-1.18.4h-1.37q-.68-.01-1.22-.43L3.6 8.71 3.6 8.7l-.02-.01L2.63 8q.43-.68 1.09-1.17z" />
    </IconBase>
  ))
);

MailOpenFill.displayName = 'MailOpenFill';

// Triple export pattern
export { MailOpenFill, MailOpenFill as MailOpenFillIcon, MailOpenFill as SiMailOpenFill };
export default MailOpenFill;
export type { MailOpenFillProps };
