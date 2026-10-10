import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopsicleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PopsicleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PopsicleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 20c0 1.66-1.34 3-3 3s-3-1.34-3-3v-3h2v3c0 .55.45 1 1 1s1-.45 1-1v-3h2z" opacity={.4} />
        <path fillRule="evenodd" d="M12 1c3.87 0 7 3.13 7 7v6.8c0 1.21-.99 2.2-2.2 2.2H7.2C5.99 17 5 16.01 5 14.8V8c0-3.87 3.13-7 7-7m0 2C9.24 3 7 5.24 7 8v6.8q.02.18.2.2h9.6q.18-.02.2-.2V8c0-2.76-2.24-5-5-5" clipRule="evenodd" />
    </IconBase>
  ))
);

PopsicleBoldDuotone.displayName = 'PopsicleBoldDuotone';

// Triple export pattern
export { PopsicleBoldDuotone, PopsicleBoldDuotone as PopsicleBoldDuotoneIcon, PopsicleBoldDuotone as SiPopsicleBoldDuotone };
export default PopsicleBoldDuotone;
export type { PopsicleBoldDuotoneProps };
