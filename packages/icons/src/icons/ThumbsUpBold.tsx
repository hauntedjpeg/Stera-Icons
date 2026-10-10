import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThumbsUpBoldProps = Omit<IconBaseProps, 'children'>;

const ThumbsUpBold = memo(
  forwardRef<SVGSVGElement, ThumbsUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.7 22c1.8 0 3.37-1.2 3.86-2.92v-.01l.01-.03.04-.12.12-.42.4-1.39c.31-1.06.67-2.35.82-3.13.1-.5.19-1.08.27-1.63.25-1.8-1.17-3.35-2.94-3.35h-1.82c.31-1.07.5-2.3.37-3.44-.1-.86-.39-1.77-1.04-2.46Q14.77 2.01 13 2q-.48.01-.8.4l-.07.1-3 5.27C8.68 8.53 7.87 9 7 9c-2.2 0-4 1.8-4 4v4c0 2.76 2.24 5 5 5zm-4.2-2c-1.66 0-3-1.34-3-3v-6.26c.98-.35 1.83-1.05 2.36-1.98l2.69-4.7q.55.13.78.4.4.41.51 1.32c.14 1.24-.25 2.8-.73 3.77-.16.31-.14.68.04.98s.5.47.85.47h3.28c.6 0 1.03.51.96 1.07l-.25 1.53c-.14.68-.47 1.9-.77 2.96l-.4 1.37-.13.42-.03.1-.01.04-.01.04C17.4 19.4 16.6 20 15.7 20zm-4.04-.05C6.06 19.7 5 18.47 5 17v-4c0-.93.64-1.71 1.5-1.93V17c0 1.1.36 2.12.96 2.95" clipRule="evenodd" />
    </IconBase>
  ))
);

ThumbsUpBold.displayName = 'ThumbsUpBold';

// Triple export pattern
export { ThumbsUpBold, ThumbsUpBold as ThumbsUpBoldIcon, ThumbsUpBold as SiThumbsUpBold };
export default ThumbsUpBold;
export type { ThumbsUpBoldProps };
