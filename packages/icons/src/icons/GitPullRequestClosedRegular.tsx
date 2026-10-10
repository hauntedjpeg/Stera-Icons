import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestClosedRegularProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestClosedRegular = memo(
  forwardRef<SVGSVGElement, GitPullRequestClosedRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.5 2.25c1.8 0 3.25 1.46 3.25 3.25 0 1.54-1.07 2.82-2.5 3.16v6.68c1.43.34 2.5 1.62 2.5 3.16 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.54 1.07-2.82 2.5-3.16V8.66c-1.43-.34-2.5-1.62-2.5-3.16 0-1.8 1.46-3.25 3.25-3.25m0 14.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75m0-13c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75M18.5 10.25c.41 0 .75.34.75.75v4.34c1.43.34 2.5 1.62 2.5 3.16 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.54 1.07-2.82 2.5-3.16V11c0-.41.34-.75.75-.75m0 6.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
        <path d="M20.47 2.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L19.56 5.5l1.97 1.97c.3.3.3.77 0 1.06s-.77.3-1.06 0L18.5 6.56l-1.97 1.97c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.97-1.97-1.97-1.97c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l1.97 1.97z" />
    </IconBase>
  ))
);

GitPullRequestClosedRegular.displayName = 'GitPullRequestClosedRegular';

// Triple export pattern
export { GitPullRequestClosedRegular, GitPullRequestClosedRegular as GitPullRequestClosedRegularIcon, GitPullRequestClosedRegular as SiGitPullRequestClosedRegular };
export default GitPullRequestClosedRegular;
export type { GitPullRequestClosedRegularProps };
