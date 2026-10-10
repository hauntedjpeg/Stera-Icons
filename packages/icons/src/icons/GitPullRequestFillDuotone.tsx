import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestFillDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.5 2.13c1.86 0 3.38 1.5 3.38 3.37 0 1.56-1.07 2.87-2.5 3.26v6.48c1.43.38 2.5 1.7 2.5 3.26 0 1.86-1.52 3.38-3.38 3.38s-3.37-1.52-3.37-3.38c0-1.56 1.06-2.88 2.5-3.26V8.76c-1.44-.39-2.5-1.7-2.5-3.26 0-1.86 1.5-3.37 3.37-3.37" opacity={.4} />
        <path d="M13.88 1.88c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1.5 1.5h1.88c2.14 0 3.87 1.74 3.87 3.88v6.74c1.44.38 2.5 1.7 2.5 3.26 0 1.86-1.5 3.37-3.37 3.37-1.86 0-3.38-1.5-3.38-3.37 0-1.56 1.06-2.88 2.5-3.26V8.5c0-1.17-.95-2.13-2.12-2.13H13.6l1.5 1.51c.35.34.35.9 0 1.24-.33.34-.89.34-1.23 0l-3-3c-.34-.34-.34-.9 0-1.24z" />
    </IconBase>
  ))
);

GitPullRequestFillDuotone.displayName = 'GitPullRequestFillDuotone';

// Triple export pattern
export { GitPullRequestFillDuotone, GitPullRequestFillDuotone as GitPullRequestFillDuotoneIcon, GitPullRequestFillDuotone as SiGitPullRequestFillDuotone };
export default GitPullRequestFillDuotone;
export type { GitPullRequestFillDuotoneProps };
