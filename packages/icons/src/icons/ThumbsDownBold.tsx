import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsDownBoldProps = Omit<IconBaseProps, 'children'>;

const ThumbsDownBold = memo(
  forwardRef<SVGSVGElement, ThumbsDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.7 2c1.8 0 3.37 1.2 3.86 2.92v.01l.01.03.04.12.12.42.4 1.39c.31 1.06.67 2.35.82 3.13.1.5.19 1.08.27 1.63.25 1.8-1.17 3.35-2.94 3.35h-1.82c.31 1.07.5 2.3.37 3.44-.1.86-.39 1.77-1.04 2.46Q14.77 21.99 13 22q-.48-.01-.8-.4l-.07-.1-3-5.27C8.68 15.47 7.87 15 7 15c-2.2 0-4-1.8-4-4V7c0-2.76 2.24-5 5-5zm-4.2 2c-1.66 0-3 1.34-3 3v6.26c.98.35 1.83 1.05 2.36 1.98l2.69 4.7c.38-.07.62-.23.78-.4q.4-.41.51-1.32c.14-1.24-.25-2.8-.73-3.77-.16-.31-.14-.68.04-.98s.5-.47.85-.47h3.28c.6 0 1.03-.51.96-1.07l-.25-1.53c-.14-.68-.47-1.9-.77-2.96l-.4-1.37-.13-.42-.03-.1-.01-.04-.01-.04C17.4 4.6 16.6 4 15.7 4zm-4.04.05C6.06 4.3 5 5.53 5 7v4c0 .93.64 1.71 1.5 1.93V7c0-1.1.36-2.12.96-2.95" clipRule="evenodd" />
    </IconBase>
  ))
);

ThumbsDownBold.displayName = 'ThumbsDownBold';

// Triple export pattern
export { ThumbsDownBold, ThumbsDownBold as ThumbsDownBoldIcon, ThumbsDownBold as SiThumbsDownBold };
export default ThumbsDownBold;
export type { ThumbsDownBoldProps };
