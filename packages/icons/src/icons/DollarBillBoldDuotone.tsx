import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarBillBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const DollarBillBoldDuotone = memo(
  forwardRef<SVGSVGElement, DollarBillBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20.15 5C21.74 5.08 23 6.4 23 8v8c0 1.66-1.34 3-3 3H4c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3h16.15M4 7c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V8c0-.52-.4-.94-.9-1H4" clipRule="evenodd" opacity={.4} />
        <path d="M3 13.04c1.13.1 2.11.41 2.83 1.13s1.03 1.7 1.13 2.83H4.95c-.1-.77-.3-1.18-.53-1.42s-.65-.44-1.42-.53zM21 15.05c-.77.1-1.18.3-1.42.53s-.44.65-.53 1.42h-2c.1-1.13.4-2.11 1.12-2.83s1.7-1.03 2.83-1.13z" />
        <path fillRule="evenodd" d="M12 8c2.1 0 3.5 1.97 3.5 4s-1.4 4-3.5 4-3.5-1.97-3.5-4S9.9 8 12 8m0 2c-.67 0-1.5.72-1.5 2s.83 2 1.5 2 1.5-.72 1.5-2-.83-2-1.5-2" clipRule="evenodd" />
        <path d="M6.96 7c-.1 1.13-.41 2.11-1.13 2.83S4.13 10.86 3 10.96V8.95c.77-.1 1.18-.3 1.42-.53s.44-.65.53-1.42zM19.05 7c.1.77.3 1.18.53 1.42s.65.44 1.42.53v2c-1.13-.1-2.11-.4-2.83-1.12S17.14 8.13 17.04 7z" />
    </IconBase>
  ))
);

DollarBillBoldDuotone.displayName = 'DollarBillBoldDuotone';

// Triple export pattern
export { DollarBillBoldDuotone, DollarBillBoldDuotone as DollarBillBoldDuotoneIcon, DollarBillBoldDuotone as SiDollarBillBoldDuotone };
export default DollarBillBoldDuotone;
export type { DollarBillBoldDuotoneProps };
