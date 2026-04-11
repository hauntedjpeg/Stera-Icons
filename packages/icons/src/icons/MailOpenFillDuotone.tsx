import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailOpenFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MailOpenFillDuotone = memo(
  forwardRef<SVGSVGElement, MailOpenFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6.46l4.7 3.63a4 4 0 0 0 2.45.83h1.37a4 4 0 0 0 2.36-.77L20 11.47z" opacity={0.4} />
        <path d="M10.7 4.2a2.2 2.2 0 0 1 2.6 0l5.8 4.25q.4.3.64.73l-6.04 4.43a2 2 0 0 1-1.18.39h-1.37a2 2 0 0 1-1.22-.42L4.25 9.2q.23-.45.65-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M9.52 2.58a4.2 4.2 0 0 1 4.96 0l5.8 4.25A4.2 4.2 0 0 1 22 10H22v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-8a4.2 4.2 0 0 1 1.72-3.17zm5.36 12.65a4 4 0 0 1-2.36.77h-1.37a4 4 0 0 1-2.45-.83L4 11.53V18c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-6.53zM13.3 4.19a2.2 2.2 0 0 0-2.6 0L4.9 8.45q-.42.3-.65.75l5.68 4.38a2 2 0 0 0 1.22.42h1.37a2 2 0 0 0 1.18-.39l6.04-4.43a2 2 0 0 0-.64-.73z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailOpenFillDuotone.displayName = 'MailOpenFillDuotone';

// Triple export pattern (lucide-react style)
export { MailOpenFillDuotone, MailOpenFillDuotone as MailOpenFillDuotoneIcon, MailOpenFillDuotone as SiMailOpenFillDuotone };
export default MailOpenFillDuotone;
export type { MailOpenFillDuotoneProps };
