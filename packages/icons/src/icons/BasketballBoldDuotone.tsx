import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BasketballBoldDuotone = memo(
  forwardRef<SVGSVGElement, BasketballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M10.71 4.1c-.22 1.32-.2 2.81.04 4.39q.75-.2 1.5-.32-.08-1.53.63-2.74.4-.68.95-1.22 1.15.28 2.14.84-.91.63-1.36 1.37-.39.63-.36 1.55 2.45-.1 4.93.5.53 1.08.73 2.3c-1.66-.56-3.36-.82-5.01-.82.65 1.04 1.75 1.96 3.08 3.03q.82.66 1.66 1.4-.3 1.01-.88 1.9-.92-.87-2.03-1.74c-1.46-1.18-3.18-2.53-4-4.42q-.8.12-1.58.33c.84 3.3 2.48 6.54 4.4 8.72q-.96.48-2.04.69c-1.88-2.38-3.41-5.55-4.25-8.75q-.5.21-.97.47.16.57.2 1.18c.1 1.28-.08 2.48-.23 3.56-.13.92-.25 1.76-.25 2.61q-1.08-.6-1.91-1.53.08-.71.18-1.36c.15-1.11.3-2.1.22-3.15v-.12q-1.14.92-1.97 2.1-.46-1.2-.52-2.52.79-.83 1.72-1.51-.55-.76-1.32-1.36.31-.97.88-1.83c.82.56 1.56 1.29 2.13 2.12q.69-.36 1.4-.65-.38-2.25-.2-4.37.98-.46 2.1-.65" />
    </IconBase>
  ))
);

BasketballBoldDuotone.displayName = 'BasketballBoldDuotone';

// Triple export pattern
export { BasketballBoldDuotone, BasketballBoldDuotone as BasketballBoldDuotoneIcon, BasketballBoldDuotone as SiBasketballBoldDuotone };
export default BasketballBoldDuotone;
export type { BasketballBoldDuotoneProps };
