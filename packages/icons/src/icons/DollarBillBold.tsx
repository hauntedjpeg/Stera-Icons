import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarBillBoldProps = Omit<IconBaseProps, 'children'>;

const DollarBillBold = memo(
  forwardRef<SVGSVGElement, DollarBillBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 8c2.1 0 3.5 1.97 3.5 4s-1.4 4-3.5 4-3.5-1.97-3.5-4S9.9 8 12 8m0 2c-.67 0-1.5.72-1.5 2s.83 2 1.5 2 1.5-.72 1.5-2-.83-2-1.5-2" clipRule="evenodd" />
        <path fillRule="evenodd" d="M20.15 5C21.74 5.08 23 6.4 23 8v8c0 1.66-1.34 3-3 3H4c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3h16.15M3 16c0 .55.45 1 1 1h.95c-.1-.77-.3-1.18-.53-1.42s-.65-.44-1.42-.53zm18-.95c-.77.1-1.18.3-1.42.53s-.44.65-.53 1.42H20c.55 0 1-.45 1-1zM6.96 7c-.1 1.13-.41 2.11-1.13 2.83S4.13 10.86 3 10.96v2.08c1.13.1 2.11.41 2.83 1.13s1.03 1.7 1.13 2.83h10.08c.1-1.13.41-2.11 1.13-2.83s1.7-1.03 2.83-1.13v-2.08c-1.13-.1-2.11-.41-2.83-1.13S17.14 8.13 17.04 7zM4 7c-.55 0-1 .45-1 1v.95c.77-.1 1.18-.3 1.42-.53s.44-.65.53-1.42zm15.05 0c.1.77.3 1.18.53 1.42s.65.44 1.42.53V8c0-.52-.4-.94-.9-1h-1.05" clipRule="evenodd" />
    </IconBase>
  ))
);

DollarBillBold.displayName = 'DollarBillBold';

// Triple export pattern
export { DollarBillBold, DollarBillBold as DollarBillBoldIcon, DollarBillBold as SiDollarBillBold };
export default DollarBillBold;
export type { DollarBillBoldProps };
