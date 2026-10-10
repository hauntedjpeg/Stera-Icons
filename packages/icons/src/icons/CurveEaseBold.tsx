import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurveEaseBoldProps = Omit<IconBaseProps, 'children'>;

const CurveEaseBold = memo(
  forwardRef<SVGSVGElement, CurveEaseBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 15c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M20 5c.55 0 1 .45 1 1s-.45 1-1 1c-3.54 0-5.6 2.53-7.65 5.56-.98 1.45-1.98 3.05-3.09 4.24C8.13 18.03 6.73 19 4.9 19H4.8h.05H4c-.55 0-1-.44-1-1 0-.55.44-1 1-1h.9c1.04 0 1.95-.53 2.9-1.55.97-1.06 1.84-2.46 2.9-4.01C12.7 8.47 15.3 5 20 5M4.76 19h.02l-.03-.01zm-.22-1.94h-.01z" clipRule="evenodd" />
        <path d="M11.03 17c.55 0 1 .45 1 1s-.45 1-1 1H11c-.55 0-1-.45-1-1s.45-1 1-1zM14 17c.55 0 1 .45 1 1s-.45 1-1 1h-.03c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M5 3c1.66 0 3 1.34 3 3S6.66 9 5 9 2 7.66 2 6s1.34-3 3-3m0 2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1" clipRule="evenodd" />
        <path d="M10.03 5c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM13 5c.55 0 1 .45 1 1s-.45 1-1 1h-.03c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

CurveEaseBold.displayName = 'CurveEaseBold';

// Triple export pattern
export { CurveEaseBold, CurveEaseBold as CurveEaseBoldIcon, CurveEaseBold as SiCurveEaseBold };
export default CurveEaseBold;
export type { CurveEaseBoldProps };
