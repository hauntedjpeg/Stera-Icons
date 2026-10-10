import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, PauseCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M8 9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1zM13 9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1z" />
    </IconBase>
  ))
);

PauseCircleBoldDuotone.displayName = 'PauseCircleBoldDuotone';

// Triple export pattern
export { PauseCircleBoldDuotone, PauseCircleBoldDuotone as PauseCircleBoldDuotoneIcon, PauseCircleBoldDuotone as SiPauseCircleBoldDuotone };
export default PauseCircleBoldDuotone;
export type { PauseCircleBoldDuotoneProps };
