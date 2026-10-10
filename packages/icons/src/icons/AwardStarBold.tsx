import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AwardStarBoldProps = Omit<IconBaseProps, 'children'>;

const AwardStarBold = memo(
  forwardRef<SVGSVGElement, AwardStarBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.85 2.69c.5-.95 1.9-.92 2.34.1l1.1 2.55 2.8.26c1.12.1 1.6 1.51.73 2.27l-2.1 1.83.62 2.72c.25 1.12-.96 1.97-1.93 1.4L13 12.99V16h.2c2.12.11 3.8 1.86 3.8 4h.5c.55 0 1 .45 1 1s-.45 1-1 1h-11c-.55 0-1-.45-1-1s.45-1 1-1H7c0-2.14 1.68-3.89 3.8-4h.2v-3.01l-1.4.83c-.98.57-2.19-.28-1.93-1.4l.6-2.72-2.09-1.83c-.86-.76-.4-2.17.74-2.27l2.78-.26 1.1-2.56zM11 18c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2zm.37-11.48c-.19.43-.6.73-1.07.77l-1.57.15L9.9 8.47c.36.32.52.8.41 1.27l-.34 1.53 1.36-.8.16-.09q.5-.2 1 0l.16.08 1.36.8-.34-1.52c-.1-.47.05-.95.4-1.27l1.2-1.03-1.58-.15c-.47-.04-.88-.34-1.07-.77L12 5.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

AwardStarBold.displayName = 'AwardStarBold';

// Triple export pattern
export { AwardStarBold, AwardStarBold as AwardStarBoldIcon, AwardStarBold as SiAwardStarBold };
export default AwardStarBold;
export type { AwardStarBoldProps };
