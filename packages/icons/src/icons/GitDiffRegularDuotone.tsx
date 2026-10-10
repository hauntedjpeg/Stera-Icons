import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitDiffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitDiffRegularDuotone = memo(
  forwardRef<SVGSVGElement, GitDiffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 19.25c.41 0 .75.34.75.75s-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M12 3.25c.41 0 .75.34.75.75v5.25H18c.41 0 .75.34.75.75s-.34.75-.75.75h-5.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.25V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

GitDiffRegularDuotone.displayName = 'GitDiffRegularDuotone';

// Triple export pattern
export { GitDiffRegularDuotone, GitDiffRegularDuotone as GitDiffRegularDuotoneIcon, GitDiffRegularDuotone as SiGitDiffRegularDuotone };
export default GitDiffRegularDuotone;
export type { GitDiffRegularDuotoneProps };
