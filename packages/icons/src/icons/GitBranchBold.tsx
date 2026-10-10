import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitBranchBoldProps = Omit<IconBaseProps, 'children'>;

const GitBranchBold = memo(
  forwardRef<SVGSVGElement, GitBranchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.5 2C20.43 2 22 3.57 22 5.5c0 1.59-1.05 2.92-2.5 3.35V9c0 2.2-1.8 4-4 4h-7c-1.1 0-2 .9-2 2v.15C7.95 15.58 9 16.9 9 18.5 9 20.43 7.43 22 5.5 22S2 20.43 2 18.5c0-1.59 1.05-2.92 2.5-3.35v-6.3C3.05 8.42 2 7.1 2 5.5 2 3.57 3.57 2 5.5 2S9 3.57 9 5.5c0 1.59-1.05 2.92-2.5 3.35v2.69q.9-.53 2-.54h7c1.1 0 2-.9 2-2v-.15C16.05 8.42 15 7.1 15 5.5 15 3.57 16.57 2 18.5 2m-13 15c-.83 0-1.5.67-1.5 1.5S4.67 20 5.5 20 7 19.33 7 18.5 6.33 17 5.5 17m0-13C4.67 4 4 4.67 4 5.5S4.67 7 5.5 7 7 6.33 7 5.5 6.33 4 5.5 4m13 0c-.83 0-1.5.67-1.5 1.5S17.67 7 18.5 7 20 6.33 20 5.5 19.33 4 18.5 4" clipRule="evenodd" />
    </IconBase>
  ))
);

GitBranchBold.displayName = 'GitBranchBold';

// Triple export pattern
export { GitBranchBold, GitBranchBold as GitBranchBoldIcon, GitBranchBold as SiGitBranchBold };
export default GitBranchBold;
export type { GitBranchBoldProps };
