import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitMergeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitMergeFillDuotone = memo(
  forwardRef<SVGSVGElement, GitMergeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 8.63a3.37 3.37 0 1 1-3.26 4.24H9.5a5 5 0 0 1-3.12-1.13v3.5a3.38 3.38 0 1 1-1.75 0V8.76a3.4 3.4 0 0 0 1.83-.03 3.1 3.1 0 0 0 3.04 2.4h5.74a3.4 3.4 0 0 1 3.26-2.5" opacity={.4} />
        <path d="M5.5 2.13a3.38 3.38 0 1 1 0 6.75 3.38 3.38 0 0 1 0-6.76" />
    </IconBase>
  ))
);

GitMergeFillDuotone.displayName = 'GitMergeFillDuotone';

// Triple export pattern (lucide-react style)
export { GitMergeFillDuotone, GitMergeFillDuotone as GitMergeFillDuotoneIcon, GitMergeFillDuotone as SiGitMergeFillDuotone };
export default GitMergeFillDuotone;
export type { GitMergeFillDuotoneProps };
