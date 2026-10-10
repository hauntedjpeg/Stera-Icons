import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitDiffBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitDiffBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitDiffBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 19c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M12 3c.55 0 1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V4c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

GitDiffBoldDuotone.displayName = 'GitDiffBoldDuotone';

// Triple export pattern
export { GitDiffBoldDuotone, GitDiffBoldDuotone as GitDiffBoldDuotoneIcon, GitDiffBoldDuotone as SiGitDiffBoldDuotone };
export default GitDiffBoldDuotone;
export type { GitDiffBoldDuotoneProps };
