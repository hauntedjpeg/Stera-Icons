import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestFillDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.5 2.13a3.38 3.38 0 0 1 .88 6.63v6.48a3.38 3.38 0 1 1-1.75 0V8.76a3.38 3.38 0 0 1 .87-6.63" opacity={.4} />
        <path d="M13.88 1.88a.88.88 0 0 1 1.24 1.24l-1.5 1.5h1.88a3.9 3.9 0 0 1 3.87 3.88v6.74a3.38 3.38 0 1 1-1.75 0V8.5c0-1.17-.95-2.13-2.12-2.13H13.6l1.5 1.51a.88.88 0 0 1-1.23 1.24l-3-3a.9.9 0 0 1 0-1.24z" />
    </IconBase>
  ))
);

GitPullRequestFillDuotone.displayName = 'GitPullRequestFillDuotone';

// Triple export pattern (lucide-react style)
export { GitPullRequestFillDuotone, GitPullRequestFillDuotone as GitPullRequestFillDuotoneIcon, GitPullRequestFillDuotone as SiGitPullRequestFillDuotone };
export default GitPullRequestFillDuotone;
export type { GitPullRequestFillDuotoneProps };
