import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VideoRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const VideoRegularDuotone = memo(
  forwardRef<SVGSVGElement, VideoRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.53 6.41c.23-.18.54-.21.8-.09.22.11.38.33.41.57l.01.11v10c0 .29-.17.55-.42.68-.26.12-.57.09-.8-.1l-3.8-3.03q.02-.6.02-1.35v-.56l3.5 2.8V8.56l-3.5 2.8v-.56l-.01-1.35z" opacity={.4} />
        <path fillRule="evenodd" d="M12.2 5.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v2.4q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-2.4q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-5.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v2.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.34.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h5.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-2.4c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.35-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

VideoRegularDuotone.displayName = 'VideoRegularDuotone';

// Triple export pattern
export { VideoRegularDuotone, VideoRegularDuotone as VideoRegularDuotoneIcon, VideoRegularDuotone as SiVideoRegularDuotone };
export default VideoRegularDuotone;
export type { VideoRegularDuotoneProps };
