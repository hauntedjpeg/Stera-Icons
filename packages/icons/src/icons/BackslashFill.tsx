import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BackslashFillProps = Omit<IconBaseProps, 'children'>;

const BackslashFill = memo(
  forwardRef<SVGSVGElement, BackslashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.01 2.87c.63-.54 1.57-.48 2.12.14l14 16c.54.63.48 1.57-.14 2.12-.63.54-1.57.48-2.12-.14l-14-16c-.54-.63-.48-1.57.14-2.12" />
    </IconBase>
  ))
);

BackslashFill.displayName = 'BackslashFill';

// Triple export pattern
export { BackslashFill, BackslashFill as BackslashFillIcon, BackslashFill as SiBackslashFill };
export default BackslashFill;
export type { BackslashFillProps };
