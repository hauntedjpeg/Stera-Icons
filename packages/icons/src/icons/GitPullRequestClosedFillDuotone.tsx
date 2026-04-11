import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestClosedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestClosedFillDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestClosedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 10.13c.48 0 .88.39.88.87v4.24a3.38 3.38 0 1 1-1.75 0V11c0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M5.5 2.12a3.38 3.38 0 0 1 .88 6.64v6.48a3.38 3.38 0 1 1-1.75 0V8.76a3.38 3.38 0 0 1 .87-6.64M20.38 2.38a.88.88 0 0 1 1.24 1.24L19.74 5.5l1.88 1.88a.88.88 0 0 1-1.24 1.24L18.5 6.74l-1.88 1.88a.88.88 0 0 1-1.24-1.24l1.88-1.88-1.88-1.88a.88.88 0 0 1 1.24-1.24l1.88 1.88z" />
    </IconBase>
  ))
);

GitPullRequestClosedFillDuotone.displayName = 'GitPullRequestClosedFillDuotone';

// Triple export pattern (lucide-react style)
export { GitPullRequestClosedFillDuotone, GitPullRequestClosedFillDuotone as GitPullRequestClosedFillDuotoneIcon, GitPullRequestClosedFillDuotone as SiGitPullRequestClosedFillDuotone };
export default GitPullRequestClosedFillDuotone;
export type { GitPullRequestClosedFillDuotoneProps };
