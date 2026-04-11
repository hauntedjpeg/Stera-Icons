import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeartFillProps = Omit<IconBaseProps, 'children'>;

const HeartFill = memo(
  forwardRef<SVGSVGElement, HeartFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.29 3.38A5.6 5.6 0 0 1 21.88 9c0 2.05-.96 3.7-1.51 4.5l-.2.3c-2.24 3.15-5.35 5.3-7.62 7.13a.9.9 0 0 1-1.1 0c-2.12-1.71-5-3.72-7.19-6.55l-.43-.58A8.5 8.5 0 0 1 2.13 9 5.6 5.6 0 0 1 7.7 3.38c1.73 0 3.27.78 4.29 2.01a5.6 5.6 0 0 1 4.29-2.01" />
    </IconBase>
  ))
);

HeartFill.displayName = 'HeartFill';

// Triple export pattern (lucide-react style)
export { HeartFill, HeartFill as HeartFillIcon, HeartFill as SiHeartFill };
export default HeartFill;
export type { HeartFillProps };
