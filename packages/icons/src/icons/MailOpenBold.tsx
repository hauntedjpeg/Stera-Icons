import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MailOpenBoldProps = Omit<IconBaseProps, 'children'>;

const MailOpenBold = memo(
  forwardRef<SVGSVGElement, MailOpenBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.52 2.58c1.47-1.08 3.49-1.08 4.96 0l5.8 4.25C21.3 7.58 21.93 8.75 22 10H22v8c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4v-8c.07-1.25.7-2.42 1.72-3.17zm5.36 12.65c-.68.5-1.51.77-2.36.77h-1.37c-.89 0-1.75-.3-2.45-.83L4 11.53V18c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-6.53zM13.3 4.19c-.77-.56-1.83-.56-2.6 0L4.9 8.45q-.42.3-.65.75l5.68 4.38q.54.41 1.22.42h1.37c.42 0 .84-.14 1.18-.39l6.04-4.43q-.24-.43-.64-.73z" clipRule="evenodd" />
    </IconBase>
  ))
);

MailOpenBold.displayName = 'MailOpenBold';

// Triple export pattern
export { MailOpenBold, MailOpenBold as MailOpenBoldIcon, MailOpenBold as SiMailOpenBold };
export default MailOpenBold;
export type { MailOpenBoldProps };
