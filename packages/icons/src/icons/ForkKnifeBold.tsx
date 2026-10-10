import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForkKnifeBoldProps = Omit<IconBaseProps, 'children'>;

const ForkKnifeBold = memo(
  forwardRef<SVGSVGElement, ForkKnifeBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10 2c.55 0 1 .45 1 1v6.1q-.02.15-.08.3l-1.18 2.74q-.24.57-.24 1.18v6.18C9.5 20.88 8.38 22 7 22s-2.5-1.12-2.5-2.5v-6.18q0-.6-.24-1.18L3.09 9.4q-.07-.17-.09-.37V3c0-.55.45-1 1-1s1 .45 1 1v5h1V3.5c0-.55.45-1 1-1s1 .45 1 1V8h1V3c0-.55.45-1 1-1m-3.9 9.35q.4.95.4 1.97v6.18c0 .28.22.5.5.5s.5-.22.5-.5v-6.18q0-1.03.4-1.97L8.48 10H5.52zM19.77 2.03q.47-.1.85.19.37.3.38.78v16.5c0 1.38-1.12 2.5-2.5 2.5S16 20.88 16 19.5V16h-2c-.55 0-1-.45-1-1 0-4.3.35-7.25 1.4-9.29 1.13-2.15 2.95-3.12 5.37-3.68M18 19.5c0 .28.22.5.5.5s.5-.22.5-.5V16h-1zm1-15.17c-1.37.49-2.23 1.18-2.82 2.31-.74 1.43-1.12 3.67-1.17 7.36H19z" clipRule="evenodd" />
    </IconBase>
  ))
);

ForkKnifeBold.displayName = 'ForkKnifeBold';

// Triple export pattern
export { ForkKnifeBold, ForkKnifeBold as ForkKnifeBoldIcon, ForkKnifeBold as SiForkKnifeBold };
export default ForkKnifeBold;
export type { ForkKnifeBoldProps };
