import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ThumbsDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ThumbsDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.56 4.92C19.07 3.19 17.5 2 15.7 2H9.5c-1.1 0-2 .9-2 2v11.05c.68.14 1.27.57 1.62 1.18l3.01 5.27.08.1c.18.25.48.4.79.4q1.77-.01 2.8-1.1c.64-.7.93-1.6 1.03-2.46.12-1.13-.06-2.37-.37-3.44h1.82c1.77 0 3.2-1.54 2.94-3.35-.08-.55-.17-1.13-.27-1.63-.15-.78-.5-2.07-.81-3.13l-.4-1.39-.12-.37-.01-.05-.04-.12v-.03z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M3 11c0 1.68 1.03 3.12 2.5 3.7q.7.3 1.5.3.26 0 .5.05V4c0-1.1.9-2 2-2H6C4.34 2 3 3.34 3 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ThumbsDownFillDuotone.displayName = 'ThumbsDownFillDuotone';

// Triple export pattern
export { ThumbsDownFillDuotone, ThumbsDownFillDuotone as ThumbsDownFillDuotoneIcon, ThumbsDownFillDuotone as SiThumbsDownFillDuotone };
export default ThumbsDownFillDuotone;
export type { ThumbsDownFillDuotoneProps };
