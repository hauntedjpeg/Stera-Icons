import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCommitFillProps = Omit<IconBaseProps, 'children'>;

const GitCommitFill = memo(
  forwardRef<SVGSVGElement, GitCommitFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.13c2.4 0 4.38 1.72 4.8 4H22a.88.88 0 0 1 0 1.74h-5.2a4.87 4.87 0 0 1-9.6 0H2a.88.88 0 0 1 0-1.74h5.2c.42-2.28 2.4-4 4.8-4" />
    </IconBase>
  ))
);

GitCommitFill.displayName = 'GitCommitFill';

// Triple export pattern (lucide-react style)
export { GitCommitFill, GitCommitFill as GitCommitFillIcon, GitCommitFill as SiGitCommitFill };
export default GitCommitFill;
export type { GitCommitFillProps };
