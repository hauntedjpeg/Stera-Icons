import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestRegularProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestRegular = memo(
  forwardRef<SVGSVGElement, GitPullRequestRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.5 2.25c1.8 0 3.25 1.46 3.25 3.25 0 1.54-1.07 2.82-2.5 3.16v6.68c1.43.34 2.5 1.62 2.5 3.16 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.54 1.07-2.82 2.5-3.16V8.66c-1.43-.34-2.5-1.62-2.5-3.16 0-1.8 1.46-3.25 3.25-3.25m0 14.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75m0-13c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75M13.97 1.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-1.72 1.72h2.19c2.07 0 3.75 1.68 3.75 3.75v6.84c1.43.34 2.5 1.62 2.5 3.16 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.54 1.07-2.82 2.5-3.16V8.5c0-1.24-1-2.25-2.25-2.25h-2.19l1.72 1.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3-3c-.3-.3-.3-.77 0-1.06zm4.53 14.78c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

GitPullRequestRegular.displayName = 'GitPullRequestRegular';

// Triple export pattern
export { GitPullRequestRegular, GitPullRequestRegular as GitPullRequestRegularIcon, GitPullRequestRegular as SiGitPullRequestRegular };
export default GitPullRequestRegular;
export type { GitPullRequestRegularProps };
