import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestDraftRegularProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestDraftRegular = memo(
  forwardRef<SVGSVGElement, GitPullRequestDraftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.5 2.25c1.8 0 3.25 1.46 3.25 3.25 0 1.54-1.07 2.82-2.5 3.16v6.68c1.43.34 2.5 1.62 2.5 3.16 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.54 1.07-2.82 2.5-3.16V8.66c-1.43-.34-2.5-1.62-2.5-3.16 0-1.8 1.46-3.25 3.25-3.25m0 14.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75m0-13c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75M18.5 15.25c1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
        <path d="M18.5 9.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S17 11.83 17 11s.67-1.5 1.5-1.5M18.5 4c.83 0 1.5.67 1.5 1.5S19.33 7 18.5 7 17 6.33 17 5.5 17.67 4 18.5 4" />
    </IconBase>
  ))
);

GitPullRequestDraftRegular.displayName = 'GitPullRequestDraftRegular';

// Triple export pattern
export { GitPullRequestDraftRegular, GitPullRequestDraftRegular as GitPullRequestDraftRegularIcon, GitPullRequestDraftRegular as SiGitPullRequestDraftRegular };
export default GitPullRequestDraftRegular;
export type { GitPullRequestDraftRegularProps };
