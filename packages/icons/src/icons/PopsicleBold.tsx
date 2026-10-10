import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopsicleBoldProps = Omit<IconBaseProps, 'children'>;

const PopsicleBold = memo(
  forwardRef<SVGSVGElement, PopsicleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1c3.87 0 7 3.13 7 7v6.8c0 1.21-.99 2.2-2.2 2.2H15v3c0 1.66-1.34 3-3 3s-3-1.34-3-3v-3H7.2C5.99 17 5 16.01 5 14.8V8c0-3.87 3.13-7 7-7m-1 19c0 .55.45 1 1 1s1-.45 1-1v-3h-2zm1-17C9.24 3 7 5.24 7 8v6.8q.02.18.2.2h9.6q.18-.02.2-.2V8c0-2.76-2.24-5-5-5" clipRule="evenodd" />
    </IconBase>
  ))
);

PopsicleBold.displayName = 'PopsicleBold';

// Triple export pattern
export { PopsicleBold, PopsicleBold as PopsicleBoldIcon, PopsicleBold as SiPopsicleBold };
export default PopsicleBold;
export type { PopsicleBoldProps };
