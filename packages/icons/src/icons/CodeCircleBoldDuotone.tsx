import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CodeCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CodeCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M12.03 7.76c.13-.54.68-.86 1.21-.73.54.13.86.68.73 1.21l-2 8c-.13.54-.68.86-1.21.73-.54-.13-.86-.68-.73-1.21zM7.8 9.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L7.92 12l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-2-2c-.39-.38-.39-1.02 0-1.4zM14.8 9.3c.38-.4 1.02-.4 1.4 0l2 2q.3.29.3.7 0 .42-.3.7l-2 2c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l1.29-1.3-1.3-1.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

CodeCircleBoldDuotone.displayName = 'CodeCircleBoldDuotone';

// Triple export pattern
export { CodeCircleBoldDuotone, CodeCircleBoldDuotone as CodeCircleBoldDuotoneIcon, CodeCircleBoldDuotone as SiCodeCircleBoldDuotone };
export default CodeCircleBoldDuotone;
export type { CodeCircleBoldDuotoneProps };
