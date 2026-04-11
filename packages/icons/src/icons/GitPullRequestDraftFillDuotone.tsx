import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestDraftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestDraftFillDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestDraftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 15.13a3.37 3.37 0 1 1 0 6.74 3.37 3.37 0 0 1 0-6.75M18.5 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4M18.5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4" opacity={0.4} />
        <path d="M5.5 2.13a3.38 3.38 0 0 1 .88 6.63v6.48a3.38 3.38 0 1 1-1.75 0V8.76a3.38 3.38 0 0 1 .87-6.63" />
    </IconBase>
  ))
);

GitPullRequestDraftFillDuotone.displayName = 'GitPullRequestDraftFillDuotone';

// Triple export pattern (lucide-react style)
export { GitPullRequestDraftFillDuotone, GitPullRequestDraftFillDuotone as GitPullRequestDraftFillDuotoneIcon, GitPullRequestDraftFillDuotone as SiGitPullRequestDraftFillDuotone };
export default GitPullRequestDraftFillDuotone;
export type { GitPullRequestDraftFillDuotoneProps };
