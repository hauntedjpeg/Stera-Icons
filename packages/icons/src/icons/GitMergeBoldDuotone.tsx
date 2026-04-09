import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitMergeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitMergeBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitMergeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="git-merge-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M18.5 8.5a3.5 3.5 0 1 1-3.35 4.5H9.5a5 5 0 0 1-3-1v3.15a3.5 3.5 0 1 1-2 0v-6.3a3.5 3.5 0 0 0 2.12-.03A3 3 0 0 0 9.5 11h5.65a3.5 3.5 0 0 1 3.35-2.5M5.5 17a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13-6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M5.5 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7m0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

GitMergeBoldDuotone.displayName = 'GitMergeBoldDuotone';

// Triple export pattern (lucide-react style)
export { GitMergeBoldDuotone, GitMergeBoldDuotone as GitMergeBoldDuotoneIcon, GitMergeBoldDuotone as SiGitMergeBoldDuotone };
export default GitMergeBoldDuotone;
export type { GitMergeBoldDuotoneProps };
