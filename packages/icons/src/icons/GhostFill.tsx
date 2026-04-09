import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GhostFillProps = Omit<IconBaseProps, 'children'>;

const GhostFill = memo(
  forwardRef<SVGSVGElement, GhostFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="ghost-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13c4.9 0 8.88 3.97 8.88 8.87v10a.88.88 0 0 1-1.37.73l-2.46-1.65-2 1.6a.9.9 0 0 1-1.1 0L12 20.12l-1.95 1.56a.9.9 0 0 1-1.1 0l-2-1.6-2.46 1.65A.88.88 0 0 1 3.12 21V11c0-4.9 3.98-8.87 8.88-8.87M9 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4m6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

GhostFill.displayName = 'GhostFill';

// Triple export pattern (lucide-react style)
export { GhostFill, GhostFill as GhostFillIcon, GhostFill as SiGhostFill };
export default GhostFill;
export type { GhostFillProps };
