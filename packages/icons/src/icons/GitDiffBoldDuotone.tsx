import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitDiffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitDiffBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitDiffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 19a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z" opacity={.4} />
        <path d="M12 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

GitDiffBoldDuotone.displayName = 'GitDiffBoldDuotone';

// Triple export pattern
export { GitDiffBoldDuotone, GitDiffBoldDuotone as GitDiffBoldDuotoneIcon, GitDiffBoldDuotone as SiGitDiffBoldDuotone };
export default GitDiffBoldDuotone;
export type { GitDiffBoldDuotoneProps };
