import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VideoFillProps = Omit<IconBaseProps, 'children'>;

const VideoFill = memo(
  forwardRef<SVGSVGElement, VideoFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.2 5.5q1.24-.01 2.01.04.79.06 1.38.34c.66.34 1.2.87 1.53 1.53q.29.6.34 1.38t.04 2.01v2.4q.01 1.24-.04 2.01-.06.79-.34 1.38c-.34.66-.87 1.2-1.53 1.53q-.6.29-1.38.34t-2.01.04H6.8q-1.24.01-2.01-.04-.79-.06-1.38-.34c-.66-.34-1.2-.87-1.53-1.53q-.29-.6-.34-1.38T1.5 13.2v-2.4q-.01-1.24.04-2.01.06-.79.34-1.38c.34-.66.87-1.2 1.53-1.53q.6-.29 1.38-.34T6.8 5.5zM21.45 6.32c.27-.21.63-.25.93-.1s.5.44.5.78v10c0 .34-.2.64-.5.79-.3.14-.66.1-.93-.1l-3-2.4q.06-.87.05-2.09v-2.4q.01-1.22-.05-2.09z" />
    </IconBase>
  ))
);

VideoFill.displayName = 'VideoFill';

// Triple export pattern
export { VideoFill, VideoFill as VideoFillIcon, VideoFill as SiVideoFill };
export default VideoFill;
export type { VideoFillProps };
