import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopsicleFillProps = Omit<IconBaseProps, 'children'>;

const PopsicleFill = memo(
  forwardRef<SVGSVGElement, PopsicleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.13c3.8 0 6.88 3.07 6.88 6.87v6.8c0 1.15-.93 2.07-2.08 2.07h-1.93V20c0 1.59-1.28 2.88-2.87 2.88S9.13 21.58 9.13 20v-3.12H7.2c-1.15 0-2.08-.93-2.08-2.08V8c0-3.8 3.08-6.87 6.88-6.87M10.88 20c0 .62.5 1.13 1.12 1.13s1.13-.5 1.13-1.13v-3.12h-2.26z" clipRule="evenodd" />
    </IconBase>
  ))
);

PopsicleFill.displayName = 'PopsicleFill';

// Triple export pattern
export { PopsicleFill, PopsicleFill as PopsicleFillIcon, PopsicleFill as SiPopsicleFill };
export default PopsicleFill;
export type { PopsicleFillProps };
