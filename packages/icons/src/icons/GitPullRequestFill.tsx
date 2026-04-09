import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestFillProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestFill = memo(
  forwardRef<SVGSVGElement, GitPullRequestFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-pull-request-fill" {...props}>
      <path d="M5.5 2.12a3.38 3.38 0 0 1 .88 6.64v6.48a3.38 3.38 0 1 1-1.75 0V8.76a3.38 3.38 0 0 1 .87-6.64M13.88 1.88a.88.88 0 0 1 1.24 1.24l-1.5 1.5h1.88a3.9 3.9 0 0 1 3.88 3.88v6.74a3.38 3.38 0 1 1-1.75 0V8.5c0-1.17-.96-2.13-2.13-2.13h-1.89l1.5 1.51a.88.88 0 0 1-1.23 1.24l-3-3a.9.9 0 0 1 0-1.24z" />
    </IconBase>
  ))
);

GitPullRequestFill.displayName = 'GitPullRequestFill';

// Triple export pattern (lucide-react style)
export { GitPullRequestFill, GitPullRequestFill as GitPullRequestFillIcon, GitPullRequestFill as SiGitPullRequestFill };
export default GitPullRequestFill;
export type { GitPullRequestFillProps };
