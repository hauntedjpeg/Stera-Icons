import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrophyFillProps = Omit<IconBaseProps, 'children'>;

const TrophyFill = memo(
  forwardRef<SVGSVGElement, TrophyFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.15 2.25c1.3 0 2.39.98 2.54 2.25h1.98c1.16 0 2.04 1.04 1.85 2.18l-.4 2.45c-.22 1.26-.97 2.36-2.06 3.02l-2.5 1.5q-.56 1.56-1.54 3.22c1.3.5 2.23 1.75 2.23 3.23v.9c0 .41-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75v-.9c0-1.48.93-2.74 2.23-3.23Q8 15.22 7.45 13.65l-2.51-1.5c-1.1-.66-1.84-1.76-2.05-3.02l-.41-2.45c-.2-1.14.69-2.18 1.85-2.18H6.3c.15-1.27 1.23-2.25 2.54-2.25zM4.33 6c-.23 0-.4.2-.37.44l.4 2.45c.14.82.64 1.54 1.35 1.97l1.11.67C6.38 9.6 6.3 7.77 6.3 6zm13.39 0c-.01 1.77-.1 3.6-.54 5.53l1.1-.67c.72-.43 1.22-1.15 1.35-1.97l.41-2.45c.04-.23-.14-.44-.37-.44z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrophyFill.displayName = 'TrophyFill';

// Triple export pattern
export { TrophyFill, TrophyFill as TrophyFillIcon, TrophyFill as SiTrophyFill };
export default TrophyFill;
export type { TrophyFillProps };
