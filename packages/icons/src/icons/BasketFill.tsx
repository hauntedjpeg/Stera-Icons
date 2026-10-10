import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketFillProps = Omit<IconBaseProps, 'children'>;

const BasketFill = memo(
  forwardRef<SVGSVGElement, BasketFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.47 2.8c.34-.25.8-.23 1.12.06l5.75 5.27h.35q.7 0 1.18.02c.33.03.7.1 1.02.31.46.3.8.76.92 1.29.1.38.04.74-.04 1.06q-.13.48-.36 1.13l-1.77 5.11c-.37 1.1-.63 1.87-1.12 2.46q-.64.74-1.55 1.1c-.72.28-1.53.27-2.69.27H9.72c-1.16 0-1.97 0-2.69-.27q-.91-.36-1.55-1.1c-.5-.59-.75-1.36-1.12-2.46l-1.77-5.11q-.23-.65-.36-1.13c-.08-.32-.13-.68-.04-1.06.13-.53.46-1 .92-1.29.32-.21.69-.28 1.01-.3q.5-.04 1.19-.03h.35l5.75-5.27zm-3.13 9.46c-.13-.46-.62-.73-1.08-.6s-.73.62-.6 1.08l1 3.5c.13.46.62.73 1.08.6s.73-.62.6-1.08zm3.66-.63c-.48 0-.88.39-.88.87V16c0 .48.4.87.88.88.48 0 .87-.4.87-.88v-3.5c0-.48-.39-.87-.87-.87m4.74.03c-.46-.13-.95.14-1.08.6l-1 3.5c-.13.46.14.95.6 1.08s.95-.14 1.08-.6l1-3.5c.13-.46-.14-.95-.6-1.08m-8.5-3.53h7.51L12 4.69z" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketFill.displayName = 'BasketFill';

// Triple export pattern
export { BasketFill, BasketFill as BasketFillIcon, BasketFill as SiBasketFill };
export default BasketFill;
export type { BasketFillProps };
