import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitDiffBoldProps = Omit<IconBaseProps, 'children'>;

const GitDiffBold = memo(
  forwardRef<SVGSVGElement, GitDiffBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 19a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2zM12 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

GitDiffBold.displayName = 'GitDiffBold';

// Triple export pattern
export { GitDiffBold, GitDiffBold as GitDiffBoldIcon, GitDiffBold as SiGitDiffBold };
export default GitDiffBold;
export type { GitDiffBoldProps };
