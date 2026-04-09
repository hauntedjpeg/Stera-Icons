import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsDownFillProps = Omit<IconBaseProps, 'children'>;

const ThumbsDownFill = memo(
  forwardRef<SVGSVGElement, ThumbsDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="thumbs-down-fill" {...props}>
      <path d="M15.7 2.13a3.9 3.9 0 0 1 3.74 2.83l.01.04.04.11.53 1.81c.3 1.06.65 2.35.8 3.12.1.5.2 1.08.27 1.63a2.82 2.82 0 0 1-2.81 3.2h-2c.35 1.1.55 2.38.42 3.56-.1.85-.37 1.72-1 2.38a3.6 3.6 0 0 1-2.7 1.07.9.9 0 0 1-.7-.35l-.06-.1-3-5.26q-.3-.49-.74-.81V4a2 2 0 0 1 1.31-1.87zM6.97 2.13c-.3.55-.47 1.2-.47 1.87v10.84A3.9 3.9 0 0 1 3.13 11V5A2.87 2.87 0 0 1 6 2.13z" />
    </IconBase>
  ))
);

ThumbsDownFill.displayName = 'ThumbsDownFill';

// Triple export pattern (lucide-react style)
export { ThumbsDownFill, ThumbsDownFill as ThumbsDownFillIcon, ThumbsDownFill as SiThumbsDownFill };
export default ThumbsDownFill;
export type { ThumbsDownFillProps };
