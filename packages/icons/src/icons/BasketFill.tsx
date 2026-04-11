import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketFillProps = Omit<IconBaseProps, 'children'>;

const BasketFill = memo(
  forwardRef<SVGSVGElement, BasketFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.47 2.8a.9.9 0 0 1 1.12.06l5.75 5.27h.35q.7 0 1.18.02c.33.03.7.1 1.02.31.46.3.8.76.92 1.29.1.38.04.74-.04 1.06q-.13.48-.36 1.13l-1.77 5.11c-.37 1.1-.63 1.87-1.13 2.46q-.63.74-1.54 1.1c-.72.28-1.53.27-2.69.27H9.72c-1.16 0-1.97 0-2.69-.27a4 4 0 0 1-1.55-1.1c-.5-.59-.75-1.36-1.12-2.46l-1.77-5.11q-.23-.65-.36-1.13a2 2 0 0 1-.04-1.06c.13-.53.46-1 .91-1.29.33-.21.7-.28 1.02-.3q.5-.04 1.19-.03h.35l5.75-5.27zm-3.13 9.46a.88.88 0 0 0-1.68.48l1 3.5a.88.88 0 0 0 1.68-.48zm3.66-.63c-.48 0-.88.39-.88.87V16a.88.88 0 0 0 1.75 0v-3.5c0-.48-.39-.87-.87-.87m4.74.03a.9.9 0 0 0-1.08.6l-1 3.5a.88.88 0 0 0 1.68.48l1-3.5a.9.9 0 0 0-.6-1.08m-8.5-3.53h7.51L12 4.69z" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketFill.displayName = 'BasketFill';

// Triple export pattern (lucide-react style)
export { BasketFill, BasketFill as BasketFillIcon, BasketFill as SiBasketFill };
export default BasketFill;
export type { BasketFillProps };
