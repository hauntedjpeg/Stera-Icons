import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestClosedBoldProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestClosedBold = memo(
  forwardRef<SVGSVGElement, GitPullRequestClosedBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.5 2C7.43 2 9 3.57 9 5.5c0 1.59-1.05 2.92-2.5 3.35v6.3C7.95 15.58 9 16.9 9 18.5 9 20.43 7.43 22 5.5 22S2 20.43 2 18.5c0-1.59 1.05-2.92 2.5-3.35v-6.3C3.05 8.42 2 7.1 2 5.5 2 3.57 3.57 2 5.5 2m0 15c-.83 0-1.5.67-1.5 1.5S4.67 20 5.5 20 7 19.33 7 18.5 6.33 17 5.5 17m0-13C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7 7 6.33 7 5.5 6.33 4 5.5 4M18.5 10c.55 0 1 .45 1 1v4.15c1.45.43 2.5 1.76 2.5 3.35 0 1.93-1.57 3.5-3.5 3.5S15 20.43 15 18.5c0-1.59 1.05-2.92 2.5-3.35V11c0-.55.45-1 1-1m0 7c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" clipRule="evenodd" />
        <path d="M20.3 2.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-1.79 1.8 1.8 1.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0L18.5 6.92l-1.8 1.8c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l1.79-1.79-1.8-1.8c-.39-.38-.39-1.02 0-1.4.4-.4 1.03-.4 1.42 0l1.79 1.79z" />
    </IconBase>
  ))
);

GitPullRequestClosedBold.displayName = 'GitPullRequestClosedBold';

// Triple export pattern
export { GitPullRequestClosedBold, GitPullRequestClosedBold as GitPullRequestClosedBoldIcon, GitPullRequestClosedBold as SiGitPullRequestClosedBold };
export default GitPullRequestClosedBold;
export type { GitPullRequestClosedBoldProps };
