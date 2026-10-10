import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitDiffSquareFillProps = Omit<IconBaseProps, 'children'>;

const GitDiffSquareFill = memo(
  forwardRef<SVGSVGElement, GitDiffSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.6 3.13q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zm-4.1 12.5c-.48 0-.87.39-.87.87s.39.88.87.88h5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm2.5-9c-.48 0-.87.39-.87.87v1.63H9.5c-.48 0-.87.39-.87.87s.39.88.87.88h1.63v1.62c0 .48.39.88.87.88s.88-.4.88-.88v-1.62h1.62c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-1.62V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

GitDiffSquareFill.displayName = 'GitDiffSquareFill';

// Triple export pattern
export { GitDiffSquareFill, GitDiffSquareFill as GitDiffSquareFillIcon, GitDiffSquareFill as SiGitDiffSquareFill };
export default GitDiffSquareFill;
export type { GitDiffSquareFillProps };
