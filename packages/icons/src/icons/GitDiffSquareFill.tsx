import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitDiffSquareFillProps = Omit<IconBaseProps, 'children'>;

const GitDiffSquareFill = memo(
  forwardRef<SVGSVGElement, GitDiffSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-4.1 12.5a.88.88 0 0 0 0 1.74h5a.88.88 0 0 0 0-1.75zm2.5-9c-.48 0-.87.39-.87.87v1.63H9.5a.87.87 0 1 0 0 1.74h1.63v1.63a.88.88 0 0 0 1.74 0v-1.62h1.63a.88.88 0 0 0 0-1.76h-1.62V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

GitDiffSquareFill.displayName = 'GitDiffSquareFill';

// Triple export pattern
export { GitDiffSquareFill, GitDiffSquareFill as GitDiffSquareFillIcon, GitDiffSquareFill as SiGitDiffSquareFill };
export default GitDiffSquareFill;
export type { GitDiffSquareFillProps };
