import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateLeftFillProps = Omit<IconBaseProps, 'children'>;

const RotateLeftFill = memo(
  forwardRef<SVGSVGElement, RotateLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.88 1.88c.25-.25.63-.32.96-.19.32.14.53.46.54.81v2.62H12c4.63 0 8.37 3.75 8.38 8.38 0 4.63-3.75 8.37-8.38 8.37s-8.37-3.74-8.37-8.37c0-.48.39-.88.87-.88s.87.4.88.88c0 3.66 2.96 6.62 6.62 6.62s6.63-2.96 6.63-6.62S15.66 6.87 12 6.87h-.62V9.5c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18l-3.5-3.5q-.25-.26-.25-.62t.25-.62z" />
    </IconBase>
  ))
);

RotateLeftFill.displayName = 'RotateLeftFill';

// Triple export pattern
export { RotateLeftFill, RotateLeftFill as RotateLeftFillIcon, RotateLeftFill as SiRotateLeftFill };
export default RotateLeftFill;
export type { RotateLeftFillProps };
