import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopsicleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PopsicleFillDuotone = memo(
  forwardRef<SVGSVGElement, PopsicleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.88c2.83 0 5.13 2.29 5.13 5.12v6.8c0 .18-.15.32-.33.32H7.2a.33.33 0 0 1-.33-.32V8c0-2.83 2.3-5.12 5.13-5.12" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.13c3.8 0 6.88 3.07 6.88 6.87v6.8c0 1.15-.93 2.07-2.08 2.07h-1.93V20a2.88 2.88 0 0 1-5.74 0v-3.12H7.2a2.1 2.1 0 0 1-2.08-2.08V8c0-3.8 3.08-6.87 6.88-6.87M10.88 20a1.13 1.13 0 0 0 2.24 0v-3.12h-2.24zM12 2.88A5.1 5.1 0 0 0 6.88 8v6.8c0 .18.14.32.32.32h9.6c.18 0 .32-.14.32-.32V8c0-2.83-2.29-5.12-5.12-5.12" clipRule="evenodd" />
    </IconBase>
  ))
);

PopsicleFillDuotone.displayName = 'PopsicleFillDuotone';

// Triple export pattern
export { PopsicleFillDuotone, PopsicleFillDuotone as PopsicleFillDuotoneIcon, PopsicleFillDuotone as SiPopsicleFillDuotone };
export default PopsicleFillDuotone;
export type { PopsicleFillDuotoneProps };
