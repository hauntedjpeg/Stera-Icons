import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SkipForwardFillProps = Omit<IconBaseProps, 'children'>;

const SkipForwardFill = memo(
  forwardRef<SVGSVGElement, SkipForwardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.54 4c.36.01.67.15.91.29q.44.24 1.02.64l7.02 4.68q.62.4 1.02.71c.27.22.54.49.7.87.22.52.22 1.1 0 1.62-.16.38-.43.65-.7.87q-.4.31-1.02.71l-7.02 4.68q-.58.4-1.02.64c-.28.16-.64.32-1.06.3-.55-.04-1.05-.31-1.39-.75-.25-.33-.32-.73-.35-1.04q-.03-.5-.02-1.2V6.98q0-.71.02-1.2c.03-.32.1-.72.35-1.05.34-.44.84-.71 1.39-.74zM19.5 4.13c.48 0 .88.39.88.87v14c0 .48-.4.88-.88.88s-.87-.4-.87-.88V5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

SkipForwardFill.displayName = 'SkipForwardFill';

// Triple export pattern
export { SkipForwardFill, SkipForwardFill as SkipForwardFillIcon, SkipForwardFill as SiSkipForwardFill };
export default SkipForwardFill;
export type { SkipForwardFillProps };
