import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VideoOffFillProps = Omit<IconBaseProps, 'children'>;

const VideoOffFill = memo(
  forwardRef<SVGSVGElement, VideoOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M.32 4.44c.31-.37.86-.42 1.24-.12l17 14c.37.31.42.86.12 1.24-.31.37-.86.42-1.24.12l-17-14C.07 5.37.02 4.82.32 4.44M14.2 18.46q-.78.05-2 .04H6.8q-1.24.01-2.01-.04-.79-.06-1.38-.34c-.66-.34-1.2-.87-1.53-1.53q-.29-.6-.34-1.38T1.5 13.2v-2.4q-.01-1.24.04-2.01.03-.36.1-.67zM21.37 6.22c.3-.24.72-.29 1.06-.12s.57.52.57.9v10c0 .38-.22.73-.57.9s-.76.12-1.06-.12l-2.7-2.16.03-.3q.06-.9.05-2.12v-2.4q.01-1.23-.05-2.11l-.03-.3zM12.2 5.5q1.24-.01 2.01.04.79.06 1.38.34c.66.34 1.2.87 1.53 1.53q.29.6.34 1.38t.04 2.01v2.4q.01 1.24-.04 2.01-.03.36-.1.67L4.8 5.54q.78-.05 2-.04z" />
    </IconBase>
  ))
);

VideoOffFill.displayName = 'VideoOffFill';

// Triple export pattern
export { VideoOffFill, VideoOffFill as VideoOffFillIcon, VideoOffFill as SiVideoOffFill };
export default VideoOffFill;
export type { VideoOffFillProps };
