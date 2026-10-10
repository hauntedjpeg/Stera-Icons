import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AwardStarBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AwardStarBoldDuotone = memo(
  forwardRef<SVGSVGElement, AwardStarBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 18c-1.1 0-2 .9-2 2H7c0-2.2 1.8-4 4-4v-3.01l1-.6 1 .6V16c2.2 0 4 1.8 4 4h-2c0-1.1-.9-2-2-2z" opacity={.4} />
        <path d="M17.5 20c.55 0 1 .45 1 1s-.45 1-1 1h-11c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M10.85 2.69c.5-.95 1.9-.92 2.34.1l1.1 2.55 2.8.26c1.12.1 1.6 1.51.73 2.27l-2.1 1.83.62 2.72c.25 1.12-.96 1.97-1.93 1.4L12 12.4l-2.4 1.42c-.98.57-2.19-.28-1.93-1.4l.6-2.72-2.09-1.83c-.86-.76-.4-2.17.74-2.27l2.78-.26 1.1-2.56zm.52 3.83c-.19.43-.6.73-1.07.77l-1.57.15L9.9 8.47c.36.32.52.8.41 1.27l-.34 1.53 1.36-.8.16-.09q.5-.2 1 0l.16.08 1.36.8-.34-1.52c-.1-.47.05-.95.4-1.27l1.2-1.03-1.58-.15c-.47-.04-.88-.34-1.07-.77L12 5.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

AwardStarBoldDuotone.displayName = 'AwardStarBoldDuotone';

// Triple export pattern
export { AwardStarBoldDuotone, AwardStarBoldDuotone as AwardStarBoldDuotoneIcon, AwardStarBoldDuotone as SiAwardStarBoldDuotone };
export default AwardStarBoldDuotone;
export type { AwardStarBoldDuotoneProps };
