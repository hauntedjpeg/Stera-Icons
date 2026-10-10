import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PopsicleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PopsicleFillDuotone = memo(
  forwardRef<SVGSVGElement, PopsicleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.88c2.83 0 5.13 2.29 5.13 5.12v6.8c0 .18-.15.32-.33.32H7.2c-.18 0-.33-.14-.33-.32V8c0-2.83 2.3-5.12 5.13-5.12" opacity={.4} />
        <path fillRule="evenodd" d="M12 1.13c3.8 0 6.88 3.07 6.88 6.87v6.8c0 1.15-.93 2.07-2.08 2.07h-1.93V20c0 1.59-1.28 2.88-2.87 2.88S9.13 21.58 9.13 20v-3.12H7.2c-1.15 0-2.08-.93-2.08-2.08V8c0-3.8 3.08-6.87 6.88-6.87M10.88 20c0 .62.5 1.13 1.12 1.13s1.13-.5 1.13-1.13v-3.12h-2.26zM12 2.88C9.17 2.88 6.88 5.17 6.88 8v6.8c0 .18.14.32.32.32h9.6c.18 0 .32-.14.32-.32V8c0-2.83-2.29-5.12-5.12-5.12" clipRule="evenodd" />
    </IconBase>
  ))
);

PopsicleFillDuotone.displayName = 'PopsicleFillDuotone';

// Triple export pattern
export { PopsicleFillDuotone, PopsicleFillDuotone as PopsicleFillDuotoneIcon, PopsicleFillDuotone as SiPopsicleFillDuotone };
export default PopsicleFillDuotone;
export type { PopsicleFillDuotoneProps };
