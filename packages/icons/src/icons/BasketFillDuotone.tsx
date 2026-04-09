import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BasketFillDuotone = memo(
  forwardRef<SVGSVGElement, BasketFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="basket-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M18.7 8.13q.68 0 1.18.02c.32.03.69.1 1.01.31.46.3.8.76.92 1.29.1.38.04.74-.04 1.06q-.13.48-.36 1.13l-1.77 5.11c-.37 1.1-.63 1.87-1.12 2.46q-.64.74-1.55 1.1c-.72.28-1.53.27-2.69.27H9.72c-1.16 0-1.97 0-2.69-.27a4 4 0 0 1-1.55-1.1c-.5-.59-.75-1.36-1.12-2.46l-1.77-5.11q-.23-.65-.36-1.13a2 2 0 0 1-.04-1.06c.13-.53.46-1 .92-1.29.33-.21.69-.28 1.02-.3q.48-.05 1.18-.04zM8.33 12.26a.88.88 0 0 0-1.68.48l1 3.5a.88.88 0 0 0 1.68-.48zm8.4-.6a.9.9 0 0 0-1.08.6l-1 3.5a.88.88 0 0 0 1.68.48l1-3.5a.9.9 0 0 0-.6-1.08M12 11.62c-.48 0-.87.4-.87.88V16a.88.88 0 0 0 1.75 0v-3.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M7.26 11.66a.9.9 0 0 1 1.08.6l1 3.5a.88.88 0 0 1-1.68.48l-1-3.5a.9.9 0 0 1 .6-1.08M12 11.63c.48 0 .88.39.88.87V16a.88.88 0 0 1-1.75 0v-3.5c0-.48.39-.87.87-.87M15.66 12.26a.88.88 0 0 1 1.68.48l-1 3.5a.88.88 0 0 1-1.68-.48zM11.47 2.8a.9.9 0 0 1 1.12.06l5.75 5.27h-2.59L12 4.69 8.25 8.13H5.66l5.75-5.27z" />
    </IconBase>
  ))
);

BasketFillDuotone.displayName = 'BasketFillDuotone';

// Triple export pattern (lucide-react style)
export { BasketFillDuotone, BasketFillDuotone as BasketFillDuotoneIcon, BasketFillDuotone as SiBasketFillDuotone };
export default BasketFillDuotone;
export type { BasketFillDuotoneProps };
