import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartFillProps = Omit<IconBaseProps, 'children'>;

const HeartFill = memo(
  forwardRef<SVGSVGElement, HeartFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.29 3.38c3.09 0 5.59 2.52 5.59 5.62 0 2.05-.96 3.7-1.51 4.5l-.2.3c-2.24 3.15-5.35 5.3-7.62 7.13-.32.26-.78.26-1.1 0-2.12-1.71-5-3.72-7.19-6.55l-.43-.58c-.45-.65-1.7-2.46-1.7-4.8 0-3.1 2.5-5.62 5.58-5.62 1.73 0 3.27.78 4.29 2.01 1.02-1.23 2.56-2.01 4.29-2.01" />
    </IconBase>
  ))
);

HeartFill.displayName = 'HeartFill';

// Triple export pattern
export { HeartFill, HeartFill as HeartFillIcon, HeartFill as SiHeartFill };
export default HeartFill;
export type { HeartFillProps };
