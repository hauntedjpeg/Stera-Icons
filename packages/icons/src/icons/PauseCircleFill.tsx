import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PauseCircleFillProps = Omit<IconBaseProps, 'children'>;

const PauseCircleFill = memo(
  forwardRef<SVGSVGElement, PauseCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13M9 8c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm5 0c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

PauseCircleFill.displayName = 'PauseCircleFill';

// Triple export pattern
export { PauseCircleFill, PauseCircleFill as PauseCircleFillIcon, PauseCircleFill as SiPauseCircleFill };
export default PauseCircleFill;
export type { PauseCircleFillProps };
