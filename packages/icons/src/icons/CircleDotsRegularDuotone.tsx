import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDotsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDotsRegularDuotone = memo(
  forwardRef<SVGSVGElement, CircleDotsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.57 17.3c.59-.59 1.54-.59 2.12 0 .6.6.6 1.54.01 2.13-.58.58-1.53.58-2.12 0-.6-.6-.6-1.55 0-2.13M17.3 17.3c.6-.59 1.54-.59 2.13 0 .58.58.58 1.53 0 2.12-.6.6-1.55.6-2.13 0-.59-.58-.59-1.53 0-2.11M4.58 4.57C5.17 4 6.12 4 6.7 4.57c.59.59.59 1.54 0 2.12-.6.6-1.54.6-2.13.01-.58-.58-.58-1.53 0-2.12M17.3 4.57c.58-.58 1.53-.58 2.12 0 .6.6.6 1.55 0 2.13-.58.59-1.53.59-2.11 0-.6-.6-.6-1.54-.01-2.13" opacity={0.4} />
        <path d="M12 19.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M3 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M21 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

CircleDotsRegularDuotone.displayName = 'CircleDotsRegularDuotone';

// Triple export pattern
export { CircleDotsRegularDuotone, CircleDotsRegularDuotone as CircleDotsRegularDuotoneIcon, CircleDotsRegularDuotone as SiCircleDotsRegularDuotone };
export default CircleDotsRegularDuotone;
export type { CircleDotsRegularDuotoneProps };
