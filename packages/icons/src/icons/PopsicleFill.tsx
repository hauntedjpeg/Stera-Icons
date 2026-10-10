import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopsicleFillProps = Omit<IconBaseProps, 'children'>;

const PopsicleFill = memo(
  forwardRef<SVGSVGElement, PopsicleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.13c3.8 0 6.88 3.07 6.88 6.87v6.8c0 1.15-.93 2.07-2.08 2.07h-1.93V20a2.88 2.88 0 0 1-5.74 0v-3.12H7.2a2.1 2.1 0 0 1-2.08-2.08V8c0-3.8 3.08-6.87 6.88-6.87M10.88 20a1.13 1.13 0 0 0 2.24 0v-3.12h-2.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

PopsicleFill.displayName = 'PopsicleFill';

// Triple export pattern
export { PopsicleFill, PopsicleFill as PopsicleFillIcon, PopsicleFill as SiPopsicleFill };
export default PopsicleFill;
export type { PopsicleFillProps };
