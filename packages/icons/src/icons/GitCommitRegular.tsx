import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCommitRegularProps = Omit<IconBaseProps, 'children'>;

const GitCommitRegular = memo(
  forwardRef<SVGSVGElement, GitCommitRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 7.25c2.37 0 4.33 1.73 4.69 4H22c.41 0 .75.34.75.75s-.34.75-.75.75h-5.31c-.36 2.27-2.32 4-4.69 4s-4.33-1.73-4.69-4H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.31c.36-2.27 2.32-4 4.69-4m0 1.5c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCommitRegular.displayName = 'GitCommitRegular';

// Triple export pattern
export { GitCommitRegular, GitCommitRegular as GitCommitRegularIcon, GitCommitRegular as SiGitCommitRegular };
export default GitCommitRegular;
export type { GitCommitRegularProps };
