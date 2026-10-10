import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitMergeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitMergeBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitMergeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.5 8.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.59 0-2.92-1.05-3.35-2.5H9.5c-1.13 0-2.16-.37-3-1v3.15C7.95 15.58 9 16.9 9 18.5 9 20.43 7.43 22 5.5 22S2 20.43 2 18.5c0-1.59 1.05-2.92 2.5-3.35v-6.3q.48.15 1 .15.58 0 1.12-.18C6.97 10.08 8.12 11 9.5 11h5.65c.43-1.45 1.76-2.5 3.35-2.5M5.5 17c-.83 0-1.5.67-1.5 1.5S4.67 20 5.5 20 7 19.33 7 18.5 6.33 17 5.5 17m13-6.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S20 12.83 20 12s-.67-1.5-1.5-1.5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M5.5 2C7.43 2 9 3.57 9 5.5S7.43 9 5.5 9 2 7.43 2 5.5 3.57 2 5.5 2m0 2C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7 7 6.33 7 5.5 6.33 4 5.5 4" clipRule="evenodd" />
    </IconBase>
  ))
);

GitMergeBoldDuotone.displayName = 'GitMergeBoldDuotone';

// Triple export pattern
export { GitMergeBoldDuotone, GitMergeBoldDuotone as GitMergeBoldDuotoneIcon, GitMergeBoldDuotone as SiGitMergeBoldDuotone };
export default GitMergeBoldDuotone;
export type { GitMergeBoldDuotoneProps };
