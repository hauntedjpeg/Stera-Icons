import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestFillProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestFill = memo(
  forwardRef<SVGSVGElement, GitPullRequestFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.5 2.12c1.86 0 3.37 1.52 3.38 3.38 0 1.56-1.07 2.87-2.5 3.26v6.48c1.43.38 2.5 1.7 2.5 3.26 0 1.86-1.52 3.37-3.38 3.37s-3.37-1.5-3.37-3.37c0-1.56 1.06-2.88 2.5-3.26V8.76c-1.44-.39-2.5-1.7-2.5-3.26 0-1.86 1.5-3.38 3.37-3.38M13.88 1.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1.5 1.5h1.88c2.14 0 3.87 1.74 3.88 3.88v6.74c1.43.38 2.5 1.7 2.5 3.26 0 1.86-1.52 3.37-3.38 3.37s-3.37-1.5-3.37-3.37c0-1.56 1.06-2.88 2.5-3.26V8.5c0-1.17-.96-2.13-2.13-2.13h-1.89l1.5 1.51c.35.34.35.9 0 1.24-.33.34-.89.34-1.23 0l-3-3c-.34-.34-.34-.9 0-1.24z" />
    </IconBase>
  ))
);

GitPullRequestFill.displayName = 'GitPullRequestFill';

// Triple export pattern
export { GitPullRequestFill, GitPullRequestFill as GitPullRequestFillIcon, GitPullRequestFill as SiGitPullRequestFill };
export default GitPullRequestFill;
export type { GitPullRequestFillProps };
