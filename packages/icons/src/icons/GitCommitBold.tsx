import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCommitBoldProps = Omit<IconBaseProps, 'children'>;

const GitCommitBold = memo(
  forwardRef<SVGSVGElement, GitCommitBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 7c2.42 0 4.44 1.72 4.9 4H22c.55 0 1 .45 1 1s-.45 1-1 1h-5.1c-.46 2.28-2.48 4-4.9 4s-4.44-1.72-4.9-4H2c-.55 0-1-.45-1-1s.45-1 1-1h5.1c.46-2.28 2.48-4 4.9-4m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCommitBold.displayName = 'GitCommitBold';

// Triple export pattern
export { GitCommitBold, GitCommitBold as GitCommitBoldIcon, GitCommitBold as SiGitCommitBold };
export default GitCommitBold;
export type { GitCommitBoldProps };
