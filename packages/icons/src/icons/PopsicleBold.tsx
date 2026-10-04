import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopsicleBoldProps = Omit<IconBaseProps, 'children'>;

const PopsicleBold = memo(
  forwardRef<SVGSVGElement, PopsicleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1a7 7 0 0 1 7 7v6.8a2.2 2.2 0 0 1-2.2 2.2H15v3a3 3 0 1 1-6 0v-3H7.2A2.2 2.2 0 0 1 5 14.8V8a7 7 0 0 1 7-7m-1 19a1 1 0 1 0 2 0v-3h-2zm1-17a5 5 0 0 0-5 5v6.8q.02.18.2.2h9.6a.2.2 0 0 0 .2-.2V8a5 5 0 0 0-5-5" clipRule="evenodd" />
    </IconBase>
  ))
);

PopsicleBold.displayName = 'PopsicleBold';

// Triple export pattern (lucide-react style)
export { PopsicleBold, PopsicleBold as PopsicleBoldIcon, PopsicleBold as SiPopsicleBold };
export default PopsicleBold;
export type { PopsicleBoldProps };
