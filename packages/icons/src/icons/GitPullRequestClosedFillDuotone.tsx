import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestClosedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestClosedFillDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestClosedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 10.13c.48 0 .88.39.88.87v4.24c1.43.38 2.5 1.7 2.5 3.26 0 1.86-1.52 3.38-3.38 3.38s-3.37-1.52-3.37-3.38c0-1.56 1.06-2.88 2.5-3.26V11c0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M5.5 2.12c1.86 0 3.37 1.52 3.38 3.38 0 1.56-1.07 2.87-2.5 3.26v6.48c1.43.38 2.5 1.7 2.5 3.26 0 1.86-1.52 3.37-3.38 3.37s-3.37-1.5-3.37-3.37c0-1.56 1.06-2.88 2.5-3.26V8.76c-1.44-.39-2.5-1.7-2.5-3.26 0-1.86 1.5-3.38 3.37-3.38M20.38 2.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24L19.74 5.5l1.88 1.88c.34.34.34.9 0 1.24s-.9.34-1.24 0L18.5 6.74l-1.88 1.88c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l1.88-1.88-1.88-1.88c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l1.88 1.88z" />
    </IconBase>
  ))
);

GitPullRequestClosedFillDuotone.displayName = 'GitPullRequestClosedFillDuotone';

// Triple export pattern
export { GitPullRequestClosedFillDuotone, GitPullRequestClosedFillDuotone as GitPullRequestClosedFillDuotoneIcon, GitPullRequestClosedFillDuotone as SiGitPullRequestClosedFillDuotone };
export default GitPullRequestClosedFillDuotone;
export type { GitPullRequestClosedFillDuotoneProps };
