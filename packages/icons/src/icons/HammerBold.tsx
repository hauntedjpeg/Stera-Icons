import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HammerBoldProps = Omit<IconBaseProps, 'children'>;

const HammerBold = memo(
  forwardRef<SVGSVGElement, HammerBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.5 2q.42 0 .7.3l1 .98 1.35-.67.1-.05q.17-.06.35-.06h2c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1h-2q-.23 0-.45-.1l-1.35-.68-1 .99q-.07.08-.16.13l.36 8.62C15.48 20.4 13.93 22 12 22s-3.48-1.6-3.4-3.54L9 9c0-.11-.05-.24-.24-.37-.2-.15-.57-.28-1.06-.3-.97-.06-2.15.34-2.92 1.3-.29.37-.78.48-1.2.29-.42-.2-.65-.65-.56-1.1C4.1 3.38 7.47 2 9 2zm-3.9 16.54c-.03.8.6 1.46 1.4 1.46s1.43-.66 1.4-1.46L13.04 10h-2.08zM9 4c-.36 0-1.98.36-3.13 2.57q.99-.3 1.93-.26c.76.04 1.52.25 2.12.68q.56.4.86 1.01h3.3l1.21-1.2.12-.11c.3-.22.7-.25 1.04-.08l1.79.89H19v-3h-.76l-1.8.9c-.38.19-.84.11-1.15-.2L14.1 4z" clipRule="evenodd" />
    </IconBase>
  ))
);

HammerBold.displayName = 'HammerBold';

// Triple export pattern
export { HammerBold, HammerBold as HammerBoldIcon, HammerBold as SiHammerBold };
export default HammerBold;
export type { HammerBoldProps };
