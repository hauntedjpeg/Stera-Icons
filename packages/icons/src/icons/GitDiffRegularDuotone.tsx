import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitDiffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitDiffRegularDuotone = memo(
  forwardRef<SVGSVGElement, GitDiffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 19.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path d="M12 3.25c.41 0 .75.34.75.75v5.25H18a.75.75 0 0 1 0 1.5h-5.25V16a.75.75 0 0 1-1.5 0v-5.25H6a.75.75 0 0 1 0-1.5h5.25V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

GitDiffRegularDuotone.displayName = 'GitDiffRegularDuotone';

// Triple export pattern (lucide-react style)
export { GitDiffRegularDuotone, GitDiffRegularDuotone as GitDiffRegularDuotoneIcon, GitDiffRegularDuotone as SiGitDiffRegularDuotone };
export default GitDiffRegularDuotone;
export type { GitDiffRegularDuotoneProps };
