import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitDiffFillProps = Omit<IconBaseProps, 'children'>;

const GitDiffFill = memo(
  forwardRef<SVGSVGElement, GitDiffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 18.75a1.25 1.25 0 1 1 0 2.5H6a1.25 1.25 0 1 1 0-2.5zM12 2.75c.69 0 1.25.56 1.25 1.25v4.75H18a1.25 1.25 0 1 1 0 2.5h-4.75V16a1.25 1.25 0 1 1-2.5 0v-4.75H6a1.25 1.25 0 1 1 0-2.5h4.75V4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

GitDiffFill.displayName = 'GitDiffFill';

// Triple export pattern (lucide-react style)
export { GitDiffFill, GitDiffFill as GitDiffFillIcon, GitDiffFill as SiGitDiffFill };
export default GitDiffFill;
export type { GitDiffFillProps };
