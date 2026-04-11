import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsUpFillProps = Omit<IconBaseProps, 'children'>;

const ThumbsUpFill = memo(
  forwardRef<SVGSVGElement, ThumbsUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.7 21.88a3.9 3.9 0 0 0 3.74-2.84l.01-.04.04-.11.53-1.81c.3-1.06.65-2.35.8-3.12.1-.5.2-1.08.27-1.63a2.82 2.82 0 0 0-2.81-3.2h-2c.35-1.1.55-2.38.42-3.56a4 4 0 0 0-1-2.38A3.6 3.6 0 0 0 13 2.13a.9.9 0 0 0-.7.34l-.06.1-3 5.26q-.3.49-.74.81V20a2 2 0 0 0 1.31 1.88zM6.97 21.88Q6.5 21.03 6.5 20V9.16A3.9 3.9 0 0 0 3.13 13v6A2.87 2.87 0 0 0 6 21.88z" />
    </IconBase>
  ))
);

ThumbsUpFill.displayName = 'ThumbsUpFill';

// Triple export pattern (lucide-react style)
export { ThumbsUpFill, ThumbsUpFill as ThumbsUpFillIcon, ThumbsUpFill as SiThumbsUpFill };
export default ThumbsUpFill;
export type { ThumbsUpFillProps };
