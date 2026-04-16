import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MaximizeBoldProps = Omit<IconBaseProps, 'children'>;

const MaximizeBold = memo(
  forwardRef<SVGSVGElement, MaximizeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15a1 1 0 0 1 1 1v1.75c0 .97.78 1.75 1.75 1.75H8a1 1 0 1 1 0 2H6.25a3.75 3.75 0 0 1-3.75-3.75V16a1 1 0 0 1 1-1M20.5 15a1 1 0 0 1 1 1v1.75a3.75 3.75 0 0 1-3.75 3.75H16a1 1 0 1 1 0-2h1.75c.97 0 1.75-.78 1.75-1.75V16a1 1 0 0 1 1-1M8 2.5a1 1 0 0 1 0 2H6.25c-.97 0-1.75.78-1.75 1.75V8a1 1 0 0 1-2 0V6.25A3.75 3.75 0 0 1 6.25 2.5zM17.75 2.5a3.75 3.75 0 0 1 3.75 3.75V8a1 1 0 1 1-2 0V6.25c0-.97-.78-1.75-1.75-1.75H16a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MaximizeBold.displayName = 'MaximizeBold';

// Triple export pattern (lucide-react style)
export { MaximizeBold, MaximizeBold as MaximizeBoldIcon, MaximizeBold as SiMaximizeBold };
export default MaximizeBold;
export type { MaximizeBoldProps };
