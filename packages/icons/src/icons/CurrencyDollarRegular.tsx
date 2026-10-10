import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyDollarRegularProps = Omit<IconBaseProps, 'children'>;

const CurrencyDollarRegular = memo(
  forwardRef<SVGSVGElement, CurrencyDollarRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c.41 0 .75.34.75.75v2.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75h-3.5v4h1.75c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5h-1.75V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4v-4h-1.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5h1.5V3c0-.41.34-.75.75-.75m.75 14.5h1.75c1.1 0 2-.9 2-2s-.9-2-2-2h-1.75zm-3-9.5c-1.1 0-2 .9-2 2s.9 2 2 2h1.5v-4z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyDollarRegular.displayName = 'CurrencyDollarRegular';

// Triple export pattern
export { CurrencyDollarRegular, CurrencyDollarRegular as CurrencyDollarRegularIcon, CurrencyDollarRegular as SiCurrencyDollarRegular };
export default CurrencyDollarRegular;
export type { CurrencyDollarRegularProps };
