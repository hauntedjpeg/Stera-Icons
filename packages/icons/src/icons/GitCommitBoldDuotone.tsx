import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCommitBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitCommitBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitCommitBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.1 11q-.1.49-.1 1t.1 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 11c.55 0 1 .45 1 1s-.45 1-1 1h-5.1q.1-.49.1-1t-.1-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GitCommitBoldDuotone.displayName = 'GitCommitBoldDuotone';

// Triple export pattern
export { GitCommitBoldDuotone, GitCommitBoldDuotone as GitCommitBoldDuotoneIcon, GitCommitBoldDuotone as SiGitCommitBoldDuotone };
export default GitCommitBoldDuotone;
export type { GitCommitBoldDuotoneProps };
