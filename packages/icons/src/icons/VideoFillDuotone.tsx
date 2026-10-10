import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VideoFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const VideoFillDuotone = memo(
  forwardRef<SVGSVGElement, VideoFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.45 6.32c.27-.21.63-.25.93-.1s.5.44.5.78v10c0 .34-.2.64-.5.79-.3.14-.66.1-.93-.1l-3.72-2.98q.02-.64.02-1.51v-2.4q0-.87-.02-1.51z" opacity={.4} />
        <path d="M12.2 5.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v2.4q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-2.4q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04z" />
    </IconBase>
  ))
);

VideoFillDuotone.displayName = 'VideoFillDuotone';

// Triple export pattern
export { VideoFillDuotone, VideoFillDuotone as VideoFillDuotoneIcon, VideoFillDuotone as SiVideoFillDuotone };
export default VideoFillDuotone;
export type { VideoFillDuotoneProps };
