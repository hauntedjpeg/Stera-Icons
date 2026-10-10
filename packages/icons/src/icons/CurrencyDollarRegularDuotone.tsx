import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyDollarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarRegularDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyDollarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.75h1.5zM12.75 12.75v4h-1.5v-4zM12.75 11.25h-1.5v-4h1.5zM12 2.25c.41 0 .75.34.75.75v2.75h-1.5V3c0-.41.34-.75.75-.75" opacity={0.4} />
        <path d="M16.25 5.75c.41 0 .75.34.75.75s-.34.75-.75.75h-6.5c-1.1 0-2 .9-2 2s.9 2 2 2h4.75c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5H7.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.25c1.1 0 2-.9 2-2s-.9-2-2-2H9.75c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5z" />
    </IconBase>
  ))
);

CurrencyDollarRegularDuotone.displayName = 'CurrencyDollarRegularDuotone';

// Triple export pattern
export { CurrencyDollarRegularDuotone, CurrencyDollarRegularDuotone as CurrencyDollarRegularDuotoneIcon, CurrencyDollarRegularDuotone as SiCurrencyDollarRegularDuotone };
export default CurrencyDollarRegularDuotone;
export type { CurrencyDollarRegularDuotoneProps };
