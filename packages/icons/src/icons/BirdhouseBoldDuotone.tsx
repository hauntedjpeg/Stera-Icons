import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BirdhouseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BirdhouseBoldDuotone = memo(
  forwardRef<SVGSVGElement, BirdhouseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m5.8 19-1.5-7.82 1.74-1.55L7.83 19zM17.96 9.63l1.74 1.55L18.2 19h-2.03z" opacity={0.4} />
        <path d="M19 19c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M12 9c1.93 0 3.5 1.57 3.5 3.5S13.93 16 12 16s-3.5-1.57-3.5-3.5S10.07 9 12 9m0 2c-.83 0-1.5.67-1.5 1.5S11.17 14 12 14s1.5-.67 1.5-1.5S12.83 11 12 11" clipRule="evenodd" />
        <path d="M10.34 3.14c.95-.84 2.38-.84 3.32 0l8 7.11c.42.37.45 1 .09 1.41-.37.42-1 .45-1.41.09l-8-7.12c-.2-.16-.48-.16-.67 0l-8 7.12c-.42.36-1.05.33-1.42-.09-.36-.4-.33-1.04.09-1.4z" />
    </IconBase>
  ))
);

BirdhouseBoldDuotone.displayName = 'BirdhouseBoldDuotone';

// Triple export pattern
export { BirdhouseBoldDuotone, BirdhouseBoldDuotone as BirdhouseBoldDuotoneIcon, BirdhouseBoldDuotone as SiBirdhouseBoldDuotone };
export default BirdhouseBoldDuotone;
export type { BirdhouseBoldDuotoneProps };
