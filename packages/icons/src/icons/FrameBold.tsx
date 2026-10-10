import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FrameBoldProps = Omit<IconBaseProps, 'children'>;

const FrameBold = memo(
  forwardRef<SVGSVGElement, FrameBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.5 2c.55 0 1 .45 1 1v2.5H21c.55 0 1 .45 1 1s-.45 1-1 1h-2.5v9H21c.55 0 1 .45 1 1s-.45 1-1 1h-2.5V21c0 .55-.45 1-1 1s-1-.45-1-1v-2.5h-9V21c0 .55-.45 1-1 1s-1-.45-1-1v-2.5H3c-.55 0-1-.45-1-1s.45-1 1-1h2.5v-9H3c-.55 0-1-.45-1-1s.45-1 1-1h2.5V3c0-.55.45-1 1-1s1 .45 1 1v2.5h9V3c0-.55.45-1 1-1m-10 14.5h9v-9h-9z" clipRule="evenodd" />
    </IconBase>
  ))
);

FrameBold.displayName = 'FrameBold';

// Triple export pattern
export { FrameBold, FrameBold as FrameBoldIcon, FrameBold as SiFrameBold };
export default FrameBold;
export type { FrameBoldProps };
