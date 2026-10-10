import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitMergeRegularProps = Omit<IconBaseProps, 'children'>;

const GitMergeRegular = memo(
  forwardRef<SVGSVGElement, GitMergeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.5 2.25c1.8 0 3.25 1.46 3.25 3.25 0 1.51-1.03 2.78-2.44 3.15.3 1.48 1.62 2.6 3.19 2.6h5.84c.34-1.43 1.62-2.5 3.16-2.5 1.8 0 3.25 1.46 3.25 3.25 0 1.8-1.46 3.25-3.25 3.25-1.54 0-2.82-1.07-3.16-2.5H9.5c-1.26 0-2.4-.5-3.25-1.29v3.88c1.43.34 2.5 1.62 2.5 3.16 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.54 1.07-2.82 2.5-3.16V8.66c-1.43-.34-2.5-1.62-2.5-3.16 0-1.8 1.46-3.25 3.25-3.25m0 14.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75m13-6.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75m-13-6.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

GitMergeRegular.displayName = 'GitMergeRegular';

// Triple export pattern
export { GitMergeRegular, GitMergeRegular as GitMergeRegularIcon, GitMergeRegular as SiGitMergeRegular };
export default GitMergeRegular;
export type { GitMergeRegularProps };
