import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, PauseCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M8 9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1zM13 9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1z" />
    </IconBase>
  ))
);

PauseCircleRegularDuotone.displayName = 'PauseCircleRegularDuotone';

// Triple export pattern
export { PauseCircleRegularDuotone, PauseCircleRegularDuotone as PauseCircleRegularDuotoneIcon, PauseCircleRegularDuotone as SiPauseCircleRegularDuotone };
export default PauseCircleRegularDuotone;
export type { PauseCircleRegularDuotoneProps };
