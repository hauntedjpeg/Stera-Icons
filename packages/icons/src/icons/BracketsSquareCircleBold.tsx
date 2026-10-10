import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareCircleBoldProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleBold = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.5 7.5c.55 0 1 .45 1 1s-.45 1-1 1H9v5h.5c.55 0 1 .45 1 1s-.45 1-1 1h-.6c-1.05 0-1.9-.85-1.9-1.9V9.4c0-1.05.85-1.9 1.9-1.9zM15.1 7.5c1.05 0 1.9.85 1.9 1.9v5.2c0 1.05-.85 1.9-1.9 1.9h-.6c-.55 0-1-.45-1-1s.45-1 1-1h.5v-5h-.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareCircleBold.displayName = 'BracketsSquareCircleBold';

// Triple export pattern
export { BracketsSquareCircleBold, BracketsSquareCircleBold as BracketsSquareCircleBoldIcon, BracketsSquareCircleBold as SiBracketsSquareCircleBold };
export default BracketsSquareCircleBold;
export type { BracketsSquareCircleBoldProps };
