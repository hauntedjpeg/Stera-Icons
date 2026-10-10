import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCompareFillProps = Omit<IconBaseProps, 'children'>;

const GitCompareFill = memo(
  forwardRef<SVGSVGElement, GitCompareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 1.62c1.86 0 3.37 1.52 3.38 3.38 0 1.56-1.07 2.87-2.5 3.26V16c0 2.14-1.74 3.87-3.88 3.87h-2.89l1.5 1.51c.35.34.35.9 0 1.24-.33.34-.89.34-1.23 0l-3-3c-.34-.34-.34-.9 0-1.24l3-3c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1.5 1.5H16c1.17 0 2.13-.95 2.13-2.12V8.26c-1.44-.39-2.5-1.7-2.5-3.26 0-1.86 1.5-3.38 3.37-3.38M9.38 1.38c.34-.34.9-.34 1.24 0l3 3c.34.34.34.9 0 1.24l-3 3c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l1.5-1.5H8c-1.17 0-2.12.95-2.12 2.12v7.74c1.43.38 2.5 1.7 2.5 3.26 0 1.86-1.52 3.37-3.38 3.37S1.63 20.87 1.63 19c0-1.56 1.06-2.88 2.5-3.26V8c0-2.14 1.73-3.88 3.87-3.88h2.89l-1.5-1.5c-.35-.34-.35-.9 0-1.24" />
    </IconBase>
  ))
);

GitCompareFill.displayName = 'GitCompareFill';

// Triple export pattern
export { GitCompareFill, GitCompareFill as GitCompareFillIcon, GitCompareFill as SiGitCompareFill };
export default GitCompareFill;
export type { GitCompareFillProps };
