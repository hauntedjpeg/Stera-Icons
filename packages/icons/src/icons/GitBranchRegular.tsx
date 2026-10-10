import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitBranchRegularProps = Omit<IconBaseProps, 'children'>;

const GitBranchRegular = memo(
  forwardRef<SVGSVGElement, GitBranchRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.5 2.25c1.8 0 3.25 1.46 3.25 3.25 0 1.54-1.07 2.82-2.5 3.16V9c0 2.07-1.68 3.75-3.75 3.75h-7c-1.24 0-2.25 1-2.25 2.25v.34c1.43.34 2.5 1.62 2.5 3.16 0 1.8-1.46 3.25-3.25 3.25-1.8 0-3.25-1.46-3.25-3.25 0-1.54 1.07-2.82 2.5-3.16V8.66c-1.43-.34-2.5-1.62-2.5-3.16 0-1.8 1.46-3.25 3.25-3.25 1.8 0 3.25 1.46 3.25 3.25 0 1.54-1.07 2.82-2.5 3.16V12c.63-.47 1.4-.75 2.25-.75h7c1.24 0 2.25-1 2.25-2.25v-.34c-1.43-.34-2.5-1.62-2.5-3.16 0-1.8 1.46-3.25 3.25-3.25m-13 14.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75m0-13c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75m13 0c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

GitBranchRegular.displayName = 'GitBranchRegular';

// Triple export pattern
export { GitBranchRegular, GitBranchRegular as GitBranchRegularIcon, GitBranchRegular as SiGitBranchRegular };
export default GitBranchRegular;
export type { GitBranchRegularProps };
