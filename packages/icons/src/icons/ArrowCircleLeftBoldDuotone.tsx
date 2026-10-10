import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M11.3 7.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L10.42 11H16c.55 0 1 .45 1 1s-.45 1-1 1h-5.59l2.3 2.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-4-4q-.28-.28-.29-.7t.3-.7z" />
    </IconBase>
  ))
);

ArrowCircleLeftBoldDuotone.displayName = 'ArrowCircleLeftBoldDuotone';

// Triple export pattern
export { ArrowCircleLeftBoldDuotone, ArrowCircleLeftBoldDuotone as ArrowCircleLeftBoldDuotoneIcon, ArrowCircleLeftBoldDuotone as SiArrowCircleLeftBoldDuotone };
export default ArrowCircleLeftBoldDuotone;
export type { ArrowCircleLeftBoldDuotoneProps };
