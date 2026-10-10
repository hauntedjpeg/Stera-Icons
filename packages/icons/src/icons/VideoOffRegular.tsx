import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VideoOffRegularProps = Omit<IconBaseProps, 'children'>;

const VideoOffRegular = memo(
  forwardRef<SVGSVGElement, VideoOffRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M.42 4.52c.26-.32.74-.36 1.06-.1l17 14c.32.26.36.74.1 1.06s-.74.36-1.06.1l-1.65-1.36q-.07.07-.17.12c-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-2.4q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47q.15-.27.32-.52L.52 5.58C.2 5.32.16 4.84.42 4.52m2.72 3.21L3 7.98c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v2.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h5.4c.85 0 1.45 0 1.9-.04q.29-.02.47-.06zM12.2 5.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47l.03.68 3.8-3.04c.22-.18.53-.21.79-.09.25.13.42.4.42.68v10c0 .29-.17.55-.42.68-.26.12-.57.09-.8-.1l-5-4q-.27-.22-.28-.58v-2.2c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04H6.93c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zm5.55 6.11v1.28l3.5 2.8V8.56z" clipRule="evenodd" />
    </IconBase>
  ))
);

VideoOffRegular.displayName = 'VideoOffRegular';

// Triple export pattern
export { VideoOffRegular, VideoOffRegular as VideoOffRegularIcon, VideoOffRegular as SiVideoOffRegular };
export default VideoOffRegular;
export type { VideoOffRegularProps };
