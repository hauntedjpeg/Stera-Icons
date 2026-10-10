import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareRegularProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareRegular = memo(
  forwardRef<SVGSVGElement, BracketsSquareRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 3.25c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h1.5c.41 0 .75.34.75.75s-.34.75-.75.75H6c-1.52 0-2.75-1.23-2.75-2.75V6c0-1.52 1.23-2.75 2.75-2.75zM18 3.25c1.52 0 2.75 1.23 2.75 2.75v12c0 1.52-1.23 2.75-2.75 2.75h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H18c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25h-1.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

BracketsSquareRegular.displayName = 'BracketsSquareRegular';

// Triple export pattern
export { BracketsSquareRegular, BracketsSquareRegular as BracketsSquareRegularIcon, BracketsSquareRegular as SiBracketsSquareRegular };
export default BracketsSquareRegular;
export type { BracketsSquareRegularProps };
