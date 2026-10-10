import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarBoldProps = Omit<IconBaseProps, 'children'>;

const DollarBold = memo(
  forwardRef<SVGSVGElement, DollarBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c.55 0 1 .45 1 1v2.5h3.25c.55 0 1 .45 1 1s-.45 1-1 1H13V11h1.5c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75H13V21c0 .55-.45 1-1 1s-1-.45-1-1v-2.5H7.25c-.55 0-1-.45-1-1s.45-1 1-1H11V13H9.75C7.68 13 6 11.32 6 9.25S7.68 5.5 9.75 5.5H11V3c0-.55.45-1 1-1m1 14.5h1.5c.97 0 1.75-.78 1.75-1.75S15.47 13 14.5 13H13zm-3.25-9C8.78 7.5 8 8.28 8 9.25S8.78 11 9.75 11H11V7.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

DollarBold.displayName = 'DollarBold';

// Triple export pattern
export { DollarBold, DollarBold as DollarBoldIcon, DollarBold as SiDollarBold };
export default DollarBold;
export type { DollarBoldProps };
