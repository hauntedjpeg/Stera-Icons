import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type VideoOffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const VideoOffBoldDuotone = memo(
  forwardRef<SVGSVGElement, VideoOffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.2 8.11c-.07.16-.13.38-.16.8C3 9.36 3 9.94 3 10.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h5.4c.78 0 1.33 0 1.76-.03l1.9 1.57-.04.02c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q1 14.43 1 13.2v-2.4q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57l.2-.36z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.2 5q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57v.2l3.41-2.73c.3-.24.72-.29 1.06-.12s.57.52.57.9v10c0 .38-.22.73-.57.9s-.75.12-1.05-.12l-5-4c-.24-.19-.38-.48-.38-.78v-2.2c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C13.64 7 13.06 7 12.2 7H6.93c-.55 0-1-.45-1-1s.45-1 1-1zm5.8 6.48v1.04l3 2.4V9.08z" clipRule="evenodd" opacity={0.4} />
        <path d="M.23 4.36c.35-.42.98-.48 1.4-.13l17 14c.43.35.5.98.14 1.4-.35.43-.98.5-1.4.14l-17-14c-.43-.35-.5-.98-.14-1.4" />
    </IconBase>
  ))
);

VideoOffBoldDuotone.displayName = 'VideoOffBoldDuotone';

// Triple export pattern
export { VideoOffBoldDuotone, VideoOffBoldDuotone as VideoOffBoldDuotoneIcon, VideoOffBoldDuotone as SiVideoOffBoldDuotone };
export default VideoOffBoldDuotone;
export type { VideoOffBoldDuotoneProps };
