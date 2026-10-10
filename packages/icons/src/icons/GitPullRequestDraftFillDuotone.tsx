import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitPullRequestDraftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitPullRequestDraftFillDuotone = memo(
  forwardRef<SVGSVGElement, GitPullRequestDraftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 15.13c1.86 0 3.38 1.5 3.38 3.37 0 1.86-1.52 3.38-3.38 3.38s-3.37-1.52-3.37-3.38 1.5-3.37 3.37-3.37M18.5 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M18.5 3.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" opacity={0.4} />
        <path d="M5.5 2.13c1.86 0 3.38 1.5 3.38 3.37 0 1.56-1.07 2.87-2.5 3.26v6.48c1.43.38 2.5 1.7 2.5 3.26 0 1.86-1.52 3.38-3.38 3.38s-3.37-1.52-3.37-3.38c0-1.56 1.06-2.88 2.5-3.26V8.76c-1.44-.39-2.5-1.7-2.5-3.26 0-1.86 1.5-3.37 3.37-3.37" />
    </IconBase>
  ))
);

GitPullRequestDraftFillDuotone.displayName = 'GitPullRequestDraftFillDuotone';

// Triple export pattern
export { GitPullRequestDraftFillDuotone, GitPullRequestDraftFillDuotone as GitPullRequestDraftFillDuotoneIcon, GitPullRequestDraftFillDuotone as SiGitPullRequestDraftFillDuotone };
export default GitPullRequestDraftFillDuotone;
export type { GitPullRequestDraftFillDuotoneProps };
