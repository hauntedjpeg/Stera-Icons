import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleNotchFillProps = Omit<IconBaseProps, 'children'>;

const CircleNotchFill = memo(
  forwardRef<SVGSVGElement, CircleNotchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.48 4.75c.49-.49 1.28-.49 1.77 0 1.43 1.44 2.4 3.26 2.8 5.25s.2 4.05-.58 5.92-2.09 3.48-3.78 4.6c-1.68 1.13-3.66 1.73-5.69 1.73s-4-.6-5.7-1.73c-1.68-1.12-3-2.72-3.77-4.6-.78-1.87-.98-3.93-.58-5.92s1.37-3.81 2.8-5.25c.49-.49 1.28-.49 1.77 0s.49 1.28 0 1.77C5.44 7.6 4.7 8.99 4.4 10.49s-.15 3.06.44 4.48c.59 1.41 1.58 2.62 2.85 3.47 1.28.86 2.78 1.31 4.31 1.31s3.03-.45 4.3-1.3c1.28-.86 2.27-2.07 2.86-3.48s.74-2.98.44-4.48-1.04-2.89-2.12-3.97c-.49-.49-.49-1.28 0-1.77" />
    </IconBase>
  ))
);

CircleNotchFill.displayName = 'CircleNotchFill';

// Triple export pattern
export { CircleNotchFill, CircleNotchFill as CircleNotchFillIcon, CircleNotchFill as SiCircleNotchFill };
export default CircleNotchFill;
export type { CircleNotchFillProps };
