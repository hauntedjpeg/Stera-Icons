import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopsicleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PopsicleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PopsicleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 20a3 3 0 1 1-6 0v-3h2v3a1 1 0 1 0 2 0v-3h2z" opacity={.4} />
        <path fillRule="evenodd" d="M12 1a7 7 0 0 1 7 7v6.8a2.2 2.2 0 0 1-2.2 2.2H7.2A2.2 2.2 0 0 1 5 14.8V8a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5v6.8q.02.18.2.2h9.6a.2.2 0 0 0 .2-.2V8a5 5 0 0 0-5-5" clipRule="evenodd" />
    </IconBase>
  ))
);

PopsicleBoldDuotone.displayName = 'PopsicleBoldDuotone';

// Triple export pattern (lucide-react style)
export { PopsicleBoldDuotone, PopsicleBoldDuotone as PopsicleBoldDuotoneIcon, PopsicleBoldDuotone as SiPopsicleBoldDuotone };
export default PopsicleBoldDuotone;
export type { PopsicleBoldDuotoneProps };
