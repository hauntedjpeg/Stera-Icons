import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VideoOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const VideoOffFillDuotone = memo(
  forwardRef<SVGSVGElement, VideoOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.57 18.13c-.4.2-.84.28-1.36.33q-.77.05-2.01.04H6.8q-1.24.01-2.01-.04-.79-.06-1.38-.34c-.66-.34-1.2-.87-1.53-1.53q-.29-.6-.34-1.38T1.5 13.2v-2.4q-.01-1.24.04-2.01.06-.79.34-1.38l.22-.37zM21.38 6.22c.3-.24.7-.29 1.05-.12s.57.52.57.9v10c0 .38-.22.73-.57.9s-.75.12-1.05-.12l-2.71-2.16.03-.3q.06-.9.05-2.12v-2.4q.01-1.22-.05-2.11l-.03-.3zM12.2 5.5q1.24-.01 2.01.04.79.06 1.38.34c.66.34 1.2.87 1.53 1.53q.29.6.34 1.38t.04 2.01v2.4q.01 1.24-.04 2.01-.06.79-.34 1.38l-.22.37L3.43 5.87c.4-.2.84-.28 1.36-.33q.77-.05 2.01-.04z" opacity={0.4} />
        <path d="M.32 4.44c.31-.37.86-.42 1.24-.12l17 14c.37.31.42.86.12 1.24-.31.37-.86.42-1.24.12l-17-14C.07 5.37.02 4.82.32 4.44" />
    </IconBase>
  ))
);

VideoOffFillDuotone.displayName = 'VideoOffFillDuotone';

// Triple export pattern
export { VideoOffFillDuotone, VideoOffFillDuotone as VideoOffFillDuotoneIcon, VideoOffFillDuotone as SiVideoOffFillDuotone };
export default VideoOffFillDuotone;
export type { VideoOffFillDuotoneProps };
