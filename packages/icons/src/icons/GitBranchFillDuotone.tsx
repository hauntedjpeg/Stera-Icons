import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitBranchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitBranchFillDuotone = memo(
  forwardRef<SVGSVGElement, GitBranchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.5 15.13a3.37 3.37 0 1 1 0 6.74 3.37 3.37 0 0 1 0-6.75" opacity={.4} />
        <path d="M18.5 2.13a3.37 3.37 0 0 1 .88 6.63V9a3.9 3.9 0 0 1-3.88 3.88h-7c-1.17 0-2.12.95-2.12 2.12v.24a3.4 3.4 0 0 0-1.75 0V8.76a3.38 3.38 0 1 1 1.75 0v3c.6-.4 1.34-.63 2.12-.63h7c1.17 0 2.13-.96 2.13-2.13v-.24a3.38 3.38 0 0 1 .87-6.63" />
    </IconBase>
  ))
);

GitBranchFillDuotone.displayName = 'GitBranchFillDuotone';

// Triple export pattern (lucide-react style)
export { GitBranchFillDuotone, GitBranchFillDuotone as GitBranchFillDuotoneIcon, GitBranchFillDuotone as SiGitBranchFillDuotone };
export default GitBranchFillDuotone;
export type { GitBranchFillDuotoneProps };
