import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M12.48 8.02c.82-.63 2.02-.05 2.02 1v5.97c0 1.04-1.2 1.62-2.02.99l-3.84-3c-.64-.5-.64-1.47 0-1.97z" />
    </IconBase>
  ))
);

ChevronFullCircleLeftBoldDuotone.displayName = 'ChevronFullCircleLeftBoldDuotone';

// Triple export pattern
export { ChevronFullCircleLeftBoldDuotone, ChevronFullCircleLeftBoldDuotone as ChevronFullCircleLeftBoldDuotoneIcon, ChevronFullCircleLeftBoldDuotone as SiChevronFullCircleLeftBoldDuotone };
export default ChevronFullCircleLeftBoldDuotone;
export type { ChevronFullCircleLeftBoldDuotoneProps };
