import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitBranchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitBranchBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitBranchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-branch-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M5.5 15a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M18.5 2a3.5 3.5 0 0 1 1 6.85V9a4 4 0 0 1-4 4h-7a2 2 0 0 0-2 2v.15a3.5 3.5 0 0 0-2 0v-6.3a3.5 3.5 0 1 1 2 0v2.69a4 4 0 0 1 2-.54h7a2 2 0 0 0 2-2v-.15a3.5 3.5 0 0 1 1-6.85m-13 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GitBranchBoldDuotone.displayName = 'GitBranchBoldDuotone';

// Triple export pattern (lucide-react style)
export { GitBranchBoldDuotone, GitBranchBoldDuotone as GitBranchBoldDuotoneIcon, GitBranchBoldDuotone as SiGitBranchBoldDuotone };
export default GitBranchBoldDuotone;
export type { GitBranchBoldDuotoneProps };
