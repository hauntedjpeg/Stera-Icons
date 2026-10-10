import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitDiffFillProps = Omit<IconBaseProps, 'children'>;

const GitDiffFill = memo(
  forwardRef<SVGSVGElement, GitDiffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 18.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM12 2.75c.69 0 1.25.56 1.25 1.25v4.75H18c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-4.75V16c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-4.75H6c-.69 0-1.25-.56-1.25-1.25S5.31 8.75 6 8.75h4.75V4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

GitDiffFill.displayName = 'GitDiffFill';

// Triple export pattern
export { GitDiffFill, GitDiffFill as GitDiffFillIcon, GitDiffFill as SiGitDiffFill };
export default GitDiffFill;
export type { GitDiffFillProps };
