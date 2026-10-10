import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GitDiffSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GitDiffSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, GitDiffSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.6 3q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v3.2q.02 1.65-.06 2.7c-.06.74-.18 1.38-.48 1.97-.48.94-1.25 1.7-2.19 2.19-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06h-3.2q-1.65.02-2.7-.06c-.74-.06-1.38-.18-1.97-.48-.94-.48-1.7-1.25-2.19-2.19-.3-.6-.42-1.23-.48-1.96Q2.99 15.25 3 13.6v-3.2q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48Q8.75 2.99 10.4 3zm-3.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22C5 8.47 5 9.26 5 10.4v3.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21.28.57.74 1.03 1.3 1.31.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h3.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28q.87-.44 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55v-3.2c0-1.14 0-1.93-.05-2.55-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28C15.53 5 14.74 5 13.6 5z" clipRule="evenodd" opacity={.4} />
        <path d="M14.5 15c.55 0 1 .45 1 1s-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1zM12 6.5c.55 0 1 .45 1 1V9h1.5c.55 0 1 .45 1 1s-.45 1-1 1H13v1.5c0 .55-.45 1-1 1s-1-.45-1-1V11H9.5c-.55 0-1-.45-1-1s.45-1 1-1H11V7.5c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

GitDiffSquareBoldDuotone.displayName = 'GitDiffSquareBoldDuotone';

// Triple export pattern
export { GitDiffSquareBoldDuotone, GitDiffSquareBoldDuotone as GitDiffSquareBoldDuotoneIcon, GitDiffSquareBoldDuotone as SiGitDiffSquareBoldDuotone };
export default GitDiffSquareBoldDuotone;
export type { GitDiffSquareBoldDuotoneProps };
