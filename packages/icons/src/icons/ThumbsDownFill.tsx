import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsDownFillProps = Omit<IconBaseProps, 'children'>;

const ThumbsDownFill = memo(
  forwardRef<SVGSVGElement, ThumbsDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.7 2.13c1.75 0 3.27 1.15 3.74 2.83l.01.04.04.11.12.43.4 1.38c.31 1.06.66 2.35.82 3.12.1.5.18 1.08.26 1.63.25 1.72-1.11 3.2-2.81 3.2h-2c.35 1.1.55 2.38.42 3.56-.1.85-.37 1.72-1 2.38q-.97 1.06-2.7 1.07-.43-.01-.7-.35l-.06-.1-3-5.26q-.3-.49-.74-.81V4c0-.86.55-1.6 1.31-1.87zM6.97 2.13c-.3.55-.47 1.2-.47 1.87v10.84C4.6 14.6 3.13 12.97 3.13 11V5C3.13 3.4 4.4 2.13 6 2.13z" />
    </IconBase>
  ))
);

ThumbsDownFill.displayName = 'ThumbsDownFill';

// Triple export pattern
export { ThumbsDownFill, ThumbsDownFill as ThumbsDownFillIcon, ThumbsDownFill as SiThumbsDownFill };
export default ThumbsDownFill;
export type { ThumbsDownFillProps };
