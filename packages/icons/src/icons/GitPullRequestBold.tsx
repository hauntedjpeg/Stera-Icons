import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestBoldProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestBold = memo(
  forwardRef<SVGSVGElement, GitPullRequestBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.5 2C7.43 2 9 3.57 9 5.5c0 1.59-1.05 2.92-2.5 3.35v6.3C7.95 15.58 9 16.9 9 18.5 9 20.43 7.43 22 5.5 22S2 20.43 2 18.5c0-1.59 1.05-2.92 2.5-3.35v-6.3C3.05 8.42 2 7.1 2 5.5 2 3.57 3.57 2 5.5 2m0 15c-.83 0-1.5.67-1.5 1.5S4.67 20 5.5 20 7 19.33 7 18.5 6.33 17 5.5 17m0-13C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7 7 6.33 7 5.5 6.33 4 5.5 4M13.8 1.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-1.29 1.3h1.59c2.2 0 4 1.8 4 4v6.65c1.45.43 2.5 1.76 2.5 3.35 0 1.93-1.57 3.5-3.5 3.5S15 20.43 15 18.5c0-1.59 1.05-2.92 2.5-3.35V8.5c0-1.1-.9-2-2-2h-1.59l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-3-3c-.39-.38-.39-1.02 0-1.4zM18.5 17c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
    </IconBase>
  ))
);

GitPullRequestBold.displayName = 'GitPullRequestBold';

// Triple export pattern
export { GitPullRequestBold, GitPullRequestBold as GitPullRequestBoldIcon, GitPullRequestBold as SiGitPullRequestBold };
export default GitPullRequestBold;
export type { GitPullRequestBoldProps };
