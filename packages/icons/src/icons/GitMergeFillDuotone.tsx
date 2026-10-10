import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitMergeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitMergeFillDuotone = memo(
  forwardRef<SVGSVGElement, GitMergeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 8.63c1.86 0 3.38 1.5 3.38 3.37 0 1.86-1.52 3.38-3.38 3.38-1.56 0-2.87-1.07-3.26-2.5H9.5c-1.19 0-2.28-.43-3.12-1.14v3.5c1.43.38 2.5 1.7 2.5 3.26 0 1.86-1.52 3.38-3.38 3.38s-3.37-1.52-3.37-3.38c0-1.56 1.06-2.88 2.5-3.26V8.76q.41.11.87.12.5 0 .96-.15c.33 1.38 1.57 2.4 3.04 2.4h5.74c.39-1.44 1.7-2.5 3.26-2.5" opacity={.4} />
        <path d="M5.5 2.13c1.86 0 3.38 1.5 3.38 3.37 0 1.86-1.52 3.38-3.38 3.38S2.13 7.36 2.13 5.5s1.5-3.37 3.37-3.37" />
    </IconBase>
  ))
);

GitMergeFillDuotone.displayName = 'GitMergeFillDuotone';

// Triple export pattern
export { GitMergeFillDuotone, GitMergeFillDuotone as GitMergeFillDuotoneIcon, GitMergeFillDuotone as SiGitMergeFillDuotone };
export default GitMergeFillDuotone;
export type { GitMergeFillDuotoneProps };
