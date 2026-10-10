import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCommitRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitCommitRegularDuotone = memo(
  forwardRef<SVGSVGElement, GitCommitRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.31 11.25q-.06.37-.06.75t.06.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM22 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-5.31q.06-.37.06-.75t-.06-.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 7.25c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75S7.25 14.62 7.25 12 9.38 7.25 12 7.25m0 1.5c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCommitRegularDuotone.displayName = 'GitCommitRegularDuotone';

// Triple export pattern
export { GitCommitRegularDuotone, GitCommitRegularDuotone as GitCommitRegularDuotoneIcon, GitCommitRegularDuotone as SiGitCommitRegularDuotone };
export default GitCommitRegularDuotone;
export type { GitCommitRegularDuotoneProps };
