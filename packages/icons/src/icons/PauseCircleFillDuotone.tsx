import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PauseCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PauseCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13M9 8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm5 0c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z" clipRule="evenodd" opacity={.4} />
        <path d="M8 9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1zM13 9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1z" />
    </IconBase>
  ))
);

PauseCircleFillDuotone.displayName = 'PauseCircleFillDuotone';

// Triple export pattern
export { PauseCircleFillDuotone, PauseCircleFillDuotone as PauseCircleFillDuotoneIcon, PauseCircleFillDuotone as SiPauseCircleFillDuotone };
export default PauseCircleFillDuotone;
export type { PauseCircleFillDuotoneProps };
