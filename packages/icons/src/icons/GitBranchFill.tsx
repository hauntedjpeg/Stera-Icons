import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitBranchFillProps = Omit<IconBaseProps, 'children'>;

const GitBranchFill = memo(
  forwardRef<SVGSVGElement, GitBranchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 2.13c1.86 0 3.38 1.5 3.38 3.37 0 1.56-1.07 2.87-2.5 3.26V9c0 2.14-1.74 3.88-3.88 3.88h-7c-1.17 0-2.12.95-2.12 2.12v.24c1.43.38 2.5 1.7 2.5 3.26 0 1.86-1.52 3.38-3.38 3.38s-3.37-1.52-3.37-3.38c0-1.56 1.06-2.88 2.5-3.26V8.76c-1.44-.39-2.5-1.7-2.5-3.26 0-1.86 1.5-3.37 3.37-3.37 1.86 0 3.38 1.5 3.38 3.37 0 1.56-1.07 2.87-2.5 3.26v3c.6-.4 1.34-.63 2.12-.63h7c1.17 0 2.13-.96 2.13-2.13v-.24c-1.44-.39-2.5-1.7-2.5-3.26 0-1.86 1.5-3.37 3.37-3.37" />
    </IconBase>
  ))
);

GitBranchFill.displayName = 'GitBranchFill';

// Triple export pattern
export { GitBranchFill, GitBranchFill as GitBranchFillIcon, GitBranchFill as SiGitBranchFill };
export default GitBranchFill;
export type { GitBranchFillProps };
