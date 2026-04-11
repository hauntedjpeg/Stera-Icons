import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderFillProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderFill = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.5 21.86a9.84 9.84 0 0 1-9.36-9.36zM16.5 20.79q-1.28.65-2.68.92L2.29 10.18q.27-1.4.92-2.69zM19.82 18.02a10 10 0 0 1-1.8 1.8L4.17 5.98a10 10 0 0 1 1.8-1.8zM21.7 13.82a10 10 0 0 1-.91 2.69L7.49 3.2a10 10 0 0 1 2.69-.92zM12.5 2.14a9.84 9.84 0 0 1 9.36 9.36z" />
    </IconBase>
  ))
);

CirclePlaceholderFill.displayName = 'CirclePlaceholderFill';

// Triple export pattern (lucide-react style)
export { CirclePlaceholderFill, CirclePlaceholderFill as CirclePlaceholderFillIcon, CirclePlaceholderFill as SiCirclePlaceholderFill };
export default CirclePlaceholderFill;
export type { CirclePlaceholderFillProps };
