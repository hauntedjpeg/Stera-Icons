import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VideoOffFillProps = Omit<IconBaseProps, 'children'>;

const VideoOffFill = memo(
  forwardRef<SVGSVGElement, VideoOffFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="video-off-fill" {...props}>
      <path d="M.32 4.44a.9.9 0 0 1 1.24-.12l17 14a.88.88 0 0 1-1.12 1.36l-17-14a.9.9 0 0 1-.12-1.24M14.2 18.46q-.78.05-2 .04H6.8q-1.24.01-2.01-.04a4 4 0 0 1-1.38-.34 3.5 3.5 0 0 1-1.53-1.53q-.29-.6-.34-1.38T1.5 13.2v-2.4q-.01-1.24.04-2.01.03-.36.1-.67zM21.37 6.22A1 1 0 0 1 23 7v10a1 1 0 0 1-1.63.78l-2.7-2.16.03-.3q.06-.9.05-2.12v-2.4q.01-1.23-.05-2.11l-.03-.3zM12.2 5.5q1.24-.01 2.01.04.79.06 1.38.34c.66.34 1.2.87 1.53 1.53q.29.6.34 1.38t.04 2.01v2.4q.01 1.24-.04 2.01-.03.36-.1.67L4.8 5.54q.78-.05 2-.04z" />
    </IconBase>
  ))
);

VideoOffFill.displayName = 'VideoOffFill';

// Triple export pattern (lucide-react style)
export { VideoOffFill, VideoOffFill as VideoOffFillIcon, VideoOffFill as SiVideoOffFill };
export default VideoOffFill;
export type { VideoOffFillProps };
