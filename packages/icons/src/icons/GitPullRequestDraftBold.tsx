import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestDraftBoldProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestDraftBold = memo(
  forwardRef<SVGSVGElement, GitPullRequestDraftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.5 2C7.43 2 9 3.57 9 5.5c0 1.59-1.05 2.92-2.5 3.35v6.3C7.95 15.58 9 16.9 9 18.5 9 20.43 7.43 22 5.5 22S2 20.43 2 18.5c0-1.59 1.05-2.92 2.5-3.35v-6.3C3.05 8.42 2 7.1 2 5.5 2 3.57 3.57 2 5.5 2m0 15c-.83 0-1.5.67-1.5 1.5S4.67 20 5.5 20 7 19.33 7 18.5 6.33 17 5.5 17m0-13C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7 7 6.33 7 5.5 6.33 4 5.5 4M18.5 15c1.93 0 3.5 1.57 3.5 3.5S20.43 22 18.5 22 15 20.43 15 18.5s1.57-3.5 3.5-3.5m0 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
        <path d="M18.5 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M18.5 3.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" />
    </IconBase>
  ))
);

GitPullRequestDraftBold.displayName = 'GitPullRequestDraftBold';

// Triple export pattern
export { GitPullRequestDraftBold, GitPullRequestDraftBold as GitPullRequestDraftBoldIcon, GitPullRequestDraftBold as SiGitPullRequestDraftBold };
export default GitPullRequestDraftBold;
export type { GitPullRequestDraftBoldProps };
