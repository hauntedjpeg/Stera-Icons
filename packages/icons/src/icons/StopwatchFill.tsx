import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StopwatchFillProps = Omit<IconBaseProps, 'children'>;

const StopwatchFill = memo(
  forwardRef<SVGSVGElement, StopwatchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.63c4.63 0 8.38 3.74 8.38 8.37s-3.75 8.38-8.38 8.38S3.63 17.63 3.63 13 7.37 4.63 12 4.63m3.8 4.57c-.34-.34-.9-.34-1.24 0l-2.21 2.21q-.17-.04-.35-.04c-.9 0-1.62.73-1.62 1.63s.72 1.63 1.62 1.63 1.63-.73 1.63-1.63q0-.18-.04-.35l2.21-2.21c.34-.34.34-.9 0-1.24" clipRule="evenodd" />
        <path d="M14 1.63c.48 0 .88.39.88.87s-.4.88-.88.88h-4c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
    </IconBase>
  ))
);

StopwatchFill.displayName = 'StopwatchFill';

// Triple export pattern
export { StopwatchFill, StopwatchFill as StopwatchFillIcon, StopwatchFill as SiStopwatchFill };
export default StopwatchFill;
export type { StopwatchFillProps };
