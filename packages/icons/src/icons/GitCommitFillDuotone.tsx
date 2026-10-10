import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCommitFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitCommitFillDuotone = memo(
  forwardRef<SVGSVGElement, GitCommitFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.2 11.13q-.08.42-.08.87 0 .46.09.88H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM22 11.13c.48 0 .88.39.88.87s-.4.88-.88.88h-5.2q.07-.43.07-.88 0-.46-.08-.87z" opacity={0.4} />
        <path d="M12 7.13c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88 0-2.7 2.18-4.87 4.87-4.87" />
    </IconBase>
  ))
);

GitCommitFillDuotone.displayName = 'GitCommitFillDuotone';

// Triple export pattern
export { GitCommitFillDuotone, GitCommitFillDuotone as GitCommitFillDuotoneIcon, GitCommitFillDuotone as SiGitCommitFillDuotone };
export default GitCommitFillDuotone;
export type { GitCommitFillDuotoneProps };
