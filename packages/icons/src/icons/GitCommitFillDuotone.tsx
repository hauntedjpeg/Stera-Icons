import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCommitFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitCommitFillDuotone = memo(
  forwardRef<SVGSVGElement, GitCommitFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-commit-fill-duotone" {...props}>
      <path d="M7.2 11.13a5 5 0 0 0 0 1.74H2a.88.88 0 0 1 0-1.74zM22 11.13a.88.88 0 0 1 0 1.74h-5.2a5 5 0 0 0 0-1.74z" opacity={0.4} />
        <path d="M12 7.13a4.87 4.87 0 1 1 0 9.74 4.87 4.87 0 0 1 0-9.75" />
    </IconBase>
  ))
);

GitCommitFillDuotone.displayName = 'GitCommitFillDuotone';

// Triple export pattern (lucide-react style)
export { GitCommitFillDuotone, GitCommitFillDuotone as GitCommitFillDuotoneIcon, GitCommitFillDuotone as SiGitCommitFillDuotone };
export default GitCommitFillDuotone;
export type { GitCommitFillDuotoneProps };
