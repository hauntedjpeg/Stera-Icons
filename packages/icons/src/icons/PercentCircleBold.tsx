import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentCircleBoldProps = Omit<IconBaseProps, 'children'>;

const PercentCircleBold = memo(
  forwardRef<SVGSVGElement, PercentCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.8 7.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4zM14.75 13.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M9.25 7.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentCircleBold.displayName = 'PercentCircleBold';

// Triple export pattern
export { PercentCircleBold, PercentCircleBold as PercentCircleBoldIcon, PercentCircleBold as SiPercentCircleBold };
export default PercentCircleBold;
export type { PercentCircleBoldProps };
