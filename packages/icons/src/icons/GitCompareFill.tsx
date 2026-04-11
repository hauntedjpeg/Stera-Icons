import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCompareFillProps = Omit<IconBaseProps, 'children'>;

const GitCompareFill = memo(
  forwardRef<SVGSVGElement, GitCompareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 1.62a3.38 3.38 0 0 1 .88 6.64V16A3.9 3.9 0 0 1 16 19.87h-2.89l1.5 1.51a.88.88 0 0 1-1.23 1.24l-3-3a.9.9 0 0 1 0-1.24l3-3a.88.88 0 0 1 1.24 1.24l-1.5 1.5H16c1.17 0 2.13-.95 2.13-2.12V8.26A3.38 3.38 0 0 1 19 1.62M9.38 1.38a.9.9 0 0 1 1.24 0l3 3c.34.34.34.9 0 1.24l-3 3a.88.88 0 0 1-1.24-1.24l1.5-1.5H8c-1.17 0-2.12.95-2.12 2.12v7.74a3.38 3.38 0 1 1-1.75 0V8A3.9 3.9 0 0 1 8 4.12h2.89l-1.5-1.5a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

GitCompareFill.displayName = 'GitCompareFill';

// Triple export pattern (lucide-react style)
export { GitCompareFill, GitCompareFill as GitCompareFillIcon, GitCompareFill as SiGitCompareFill };
export default GitCompareFill;
export type { GitCompareFillProps };
