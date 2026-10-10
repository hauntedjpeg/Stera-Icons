import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyEuroRegularProps = Omit<IconBaseProps, 'children'>;

const CurrencyEuroRegular = memo(
  forwardRef<SVGSVGElement, CurrencyEuroRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 3.25c.41 0 .75.34.75.75s-.34.75-.75.75h-2.25c-1.96 0-3.4.47-4.38 1.51-.63.67-1.11 1.63-1.38 2.99H15c.41 0 .75.34.75.75s-.34.75-.75.75H8.8q-.05.59-.05 1.25t.04 1.25H15c.41 0 .75.34.75.75s-.34.75-.75.75H8.99c.27 1.36.75 2.32 1.38 2.99.97 1.04 2.42 1.51 4.38 1.51H17c.41 0 .75.34.75.75s-.34.75-.75.75h-2.25c-2.18 0-4.1-.53-5.48-1.99q-1.35-1.45-1.8-4.01H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.3q-.05-.6-.05-1.25t.04-1.25H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.47q.45-2.55 1.8-4.01c1.37-1.46 3.3-1.99 5.48-1.99z" />
    </IconBase>
  ))
);

CurrencyEuroRegular.displayName = 'CurrencyEuroRegular';

// Triple export pattern
export { CurrencyEuroRegular, CurrencyEuroRegular as CurrencyEuroRegularIcon, CurrencyEuroRegular as SiCurrencyEuroRegular };
export default CurrencyEuroRegular;
export type { CurrencyEuroRegularProps };
