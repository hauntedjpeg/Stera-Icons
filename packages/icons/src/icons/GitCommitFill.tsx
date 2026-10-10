import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCommitFillProps = Omit<IconBaseProps, 'children'>;

const GitCommitFill = memo(
  forwardRef<SVGSVGElement, GitCommitFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.13c2.4 0 4.38 1.72 4.8 4H22c.48 0 .88.39.88.87s-.4.88-.88.88h-5.2c-.42 2.27-2.4 4-4.8 4s-4.38-1.73-4.8-4H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h5.2c.42-2.28 2.4-4 4.8-4" />
    </IconBase>
  ))
);

GitCommitFill.displayName = 'GitCommitFill';

// Triple export pattern
export { GitCommitFill, GitCommitFill as GitCommitFillIcon, GitCommitFill as SiGitCommitFill };
export default GitCommitFill;
export type { GitCommitFillProps };
