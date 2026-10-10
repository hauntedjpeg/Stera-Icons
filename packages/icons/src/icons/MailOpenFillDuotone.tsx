import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailOpenFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailOpenFillDuotone = memo(
  forwardRef<SVGSVGElement, MailOpenFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 18c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-6.46l4.7 3.63c.7.54 1.56.83 2.45.83h1.37c.85 0 1.68-.27 2.36-.77L20 11.47z" opacity={0.4} />
        <path d="M10.7 4.2c.77-.57 1.83-.57 2.6 0l5.8 4.25q.4.3.64.73l-6.04 4.43c-.34.25-.76.39-1.18.39h-1.37q-.68 0-1.22-.42L4.25 9.2q.23-.45.65-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M9.52 2.58c1.47-1.08 3.49-1.08 4.96 0l5.8 4.25C21.3 7.58 21.93 8.75 22 10H22v8c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4v-8c.07-1.25.7-2.42 1.72-3.17zm5.36 12.65c-.68.5-1.51.77-2.36.77h-1.37c-.89 0-1.75-.3-2.45-.83L4 11.53V18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-6.53zM13.3 4.19c-.77-.56-1.83-.56-2.6 0L4.9 8.45q-.42.3-.65.75l5.68 4.38q.54.41 1.22.42h1.37c.42 0 .84-.14 1.18-.39l6.04-4.43q-.24-.43-.64-.73z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailOpenFillDuotone.displayName = 'MailOpenFillDuotone';

// Triple export pattern
export { MailOpenFillDuotone, MailOpenFillDuotone as MailOpenFillDuotoneIcon, MailOpenFillDuotone as SiMailOpenFillDuotone };
export default MailOpenFillDuotone;
export type { MailOpenFillDuotoneProps };
