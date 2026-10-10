import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitMergeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitMergeRegularDuotone = memo(
  forwardRef<SVGSVGElement, GitMergeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.31 8.65c.3 1.48 1.62 2.6 3.19 2.6h5.84c.34-1.43 1.62-2.5 3.16-2.5 1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.54 0-2.82-1.07-3.16-2.5H9.5c-1.26 0-2.4-.5-3.25-1.29v3.88c1.43.34 2.5 1.62 2.5 3.16 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.54 1.07-2.82 2.5-3.16V8.66q.37.09.75.09.42 0 .81-.1m-.81 8.1c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75m13-6.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M5.5 2.25c1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.8 1.46-3.25 3.25-3.25m0 1.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

GitMergeRegularDuotone.displayName = 'GitMergeRegularDuotone';

// Triple export pattern
export { GitMergeRegularDuotone, GitMergeRegularDuotone as GitMergeRegularDuotoneIcon, GitMergeRegularDuotone as SiGitMergeRegularDuotone };
export default GitMergeRegularDuotone;
export type { GitMergeRegularDuotoneProps };
