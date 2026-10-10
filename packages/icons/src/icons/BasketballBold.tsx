import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BasketballBoldProps = Omit<IconBaseProps, 'children'>;

const BasketballBold = memo(
  forwardRef<SVGSVGElement, BasketballBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c1.56 0 3.04.36 4.36 1 2.7 1.3 4.72 3.8 5.4 6.8Q22 10.85 22 12c0 1.65-.4 3.21-1.11 4.59-1.11 2.14-2.97 3.83-5.23 4.72q-1.72.68-3.66.69c-2.04 0-3.94-.61-5.53-1.66-1.87-1.25-3.3-3.11-4-5.3Q2 13.58 2 12q.02-2.41 1.04-4.44c1.29-2.6 3.7-4.58 6.6-5.28Q10.78 2 12 2m-2.74 9.1q-.5.22-.97.48.16.57.21 1.18c.08 1.28-.09 2.48-.24 3.56-.13.92-.25 1.76-.25 2.62C9.18 19.6 10.55 20 12 20q.78 0 1.5-.14c-1.87-2.37-3.4-5.55-4.24-8.75m3.47-.98q-.8.12-1.58.33c.84 3.3 2.48 6.54 4.4 8.72 1.31-.65 2.42-1.65 3.2-2.89-.6-.59-1.3-1.15-2.02-1.74-1.46-1.18-3.18-2.53-4-4.42M6.5 12.77q-1.13.92-1.96 2.1.55 1.42 1.57 2.53.08-.71.18-1.36c.15-1.11.3-2.1.22-3.15zm8.41-2.82c.65 1.04 1.75 1.96 3.08 3.03q.82.66 1.66 1.4Q20 13.23 20 12q0-.63-.1-1.23c-1.65-.56-3.35-.82-5-.82M4.4 9.48Q4 10.68 4 12v.35q.79-.83 1.73-1.51-.55-.76-1.32-1.36m4.22-4.73C7.25 5.4 6.1 6.4 5.28 7.65c.83.56 1.57 1.29 2.14 2.12q.69-.36 1.4-.65-.38-2.25-.2-4.37M12 4q-.66 0-1.28.1c-.23 1.32-.2 2.81.03 4.39q.75-.2 1.5-.32-.08-1.53.63-2.74.4-.68.95-1.22Q12.95 4 12 4m3.97 1.05q-.91.63-1.36 1.37-.39.63-.36 1.55 2.44-.1 4.93.5c-.7-1.43-1.83-2.62-3.21-3.42" clipRule="evenodd" />
    </IconBase>
  ))
);

BasketballBold.displayName = 'BasketballBold';

// Triple export pattern
export { BasketballBold, BasketballBold as BasketballBoldIcon, BasketballBold as SiBasketballBold };
export default BasketballBold;
export type { BasketballBoldProps };
