import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, BracketsCurlyCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M10 7c.55 0 1 .45 1 1s-.45 1-1 1h-.5v1c0 .75-.28 1.45-.74 2 .46.55.74 1.25.74 2v1h.5c.55 0 1 .45 1 1s-.45 1-1 1h-.6c-1.05 0-1.9-.85-1.9-1.9V14c0-.48-.32-.9-.78-1.04-.43-.13-.72-.52-.72-.96s.3-.83.72-.96c.46-.14.78-.56.78-1.05V8.9C7.5 7.85 8.35 7 9.4 7zM14.6 7c1.05 0 1.9.85 1.9 1.9V10c0 .48.32.9.78 1.04.43.13.72.52.72.96s-.3.83-.72.96c-.46.14-.78.56-.78 1.05v1.1c0 1.04-.85 1.89-1.9 1.89H14c-.55 0-1-.45-1-1s.45-1 1-1h.5v-1c0-.75.28-1.45.74-2-.46-.55-.74-1.25-.74-2V9H14c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

BracketsCurlyCircleBoldDuotone.displayName = 'BracketsCurlyCircleBoldDuotone';

// Triple export pattern
export { BracketsCurlyCircleBoldDuotone, BracketsCurlyCircleBoldDuotone as BracketsCurlyCircleBoldDuotoneIcon, BracketsCurlyCircleBoldDuotone as SiBracketsCurlyCircleBoldDuotone };
export default BracketsCurlyCircleBoldDuotone;
export type { BracketsCurlyCircleBoldDuotoneProps };
