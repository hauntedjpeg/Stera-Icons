import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BirdhouseBoldProps = Omit<IconBaseProps, 'children'>;

const BirdhouseBold = memo(
  forwardRef<SVGSVGElement, BirdhouseBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 9c1.93 0 3.5 1.57 3.5 3.5S13.93 16 12 16s-3.5-1.57-3.5-3.5S10.07 9 12 9m0 2c-.83 0-1.5.67-1.5 1.5S11.17 14 12 14s1.5-.67 1.5-1.5S12.83 11 12 11" clipRule="evenodd" />
        <path fillRule="evenodd" d="M10.34 3.14c.95-.84 2.38-.84 3.32 0l8 7.11c.42.37.45 1 .09 1.41-.37.42-1 .45-1.41.09l-.64-.57L18.2 19h.8c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h.8l-1.5-7.82-.64.57c-.4.36-1.04.33-1.4-.09-.37-.4-.34-1.04.08-1.4zm2 1.5c-.2-.17-.48-.17-.67 0l-5.63 5L7.83 19h8.34l1.79-9.37z" clipRule="evenodd" />
    </IconBase>
  ))
);

BirdhouseBold.displayName = 'BirdhouseBold';

// Triple export pattern
export { BirdhouseBold, BirdhouseBold as BirdhouseBoldIcon, BirdhouseBold as SiBirdhouseBold };
export default BirdhouseBold;
export type { BirdhouseBoldProps };
