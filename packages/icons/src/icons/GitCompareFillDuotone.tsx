import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitCompareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitCompareFillDuotone = memo(
  forwardRef<SVGSVGElement, GitCompareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 1.63c1.86 0 3.38 1.5 3.38 3.37 0 1.56-1.06 2.87-2.5 3.26V16c0 2.14-1.74 3.88-3.88 3.88h-2.89l1.51 1.5c.34.34.34.9 0 1.24s-.9.34-1.24 0l-3-3q-.15-.15-.2-.34l-.04-.1v-.01q-.04-.22.02-.42l.01-.03q.06-.2.21-.34l3-3c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-1.5 1.5H16c1.17 0 2.13-.95 2.13-2.12V8.26c-1.44-.39-2.5-1.7-2.5-3.26 0-1.86 1.5-3.37 3.37-3.37" opacity={.4} />
        <path d="M9.38 1.38c.34-.34.9-.34 1.24 0l3 3c.34.34.34.9 0 1.24l-3 3c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l1.5-1.5H8c-1.17 0-2.12.95-2.12 2.12v7.74c1.43.38 2.5 1.7 2.5 3.26 0 1.86-1.52 3.37-3.38 3.37S1.63 20.87 1.63 19c0-1.56 1.06-2.88 2.5-3.26V8c0-2.14 1.73-3.88 3.87-3.88h2.89l-1.5-1.5c-.35-.34-.35-.9 0-1.24" />
    </IconBase>
  ))
);

GitCompareFillDuotone.displayName = 'GitCompareFillDuotone';

// Triple export pattern
export { GitCompareFillDuotone, GitCompareFillDuotone as GitCompareFillDuotoneIcon, GitCompareFillDuotone as SiGitCompareFillDuotone };
export default GitCompareFillDuotone;
export type { GitCompareFillDuotoneProps };
