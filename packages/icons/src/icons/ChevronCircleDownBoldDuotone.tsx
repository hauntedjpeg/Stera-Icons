import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M15.3 9.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-4 4q-.28.3-.7.3t-.7-.3l-4-4c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l3.3 3.29z" />
    </IconBase>
  ))
);

ChevronCircleDownBoldDuotone.displayName = 'ChevronCircleDownBoldDuotone';

// Triple export pattern
export { ChevronCircleDownBoldDuotone, ChevronCircleDownBoldDuotone as ChevronCircleDownBoldDuotoneIcon, ChevronCircleDownBoldDuotone as SiChevronCircleDownBoldDuotone };
export default ChevronCircleDownBoldDuotone;
export type { ChevronCircleDownBoldDuotoneProps };
