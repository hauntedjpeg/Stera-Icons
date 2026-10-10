import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsUpFillProps = Omit<IconBaseProps, 'children'>;

const ThumbsUpFill = memo(
  forwardRef<SVGSVGElement, ThumbsUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.7 21.88c1.75 0 3.27-1.16 3.74-2.84l.01-.04.04-.11.12-.43.4-1.38c.31-1.06.66-2.35.82-3.12.1-.5.18-1.08.26-1.63.25-1.72-1.11-3.2-2.81-3.2h-2c.35-1.1.55-2.38.42-3.56-.1-.85-.37-1.72-1-2.38q-.97-1.06-2.7-1.06-.43 0-.7.34l-.06.1-3 5.26q-.3.49-.74.81V20c0 .86.55 1.6 1.31 1.88zM6.97 21.88Q6.5 21.03 6.5 20V9.16C4.6 9.4 3.13 11.03 3.13 13v6c0 1.59 1.28 2.88 2.87 2.88z" />
    </IconBase>
  ))
);

ThumbsUpFill.displayName = 'ThumbsUpFill';

// Triple export pattern
export { ThumbsUpFill, ThumbsUpFill as ThumbsUpFillIcon, ThumbsUpFill as SiThumbsUpFill };
export default ThumbsUpFill;
export type { ThumbsUpFillProps };
