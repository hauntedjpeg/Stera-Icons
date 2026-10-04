import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GitDiffRegular } from './GitDiffRegular.js';
import { GitDiffRegularDuotone } from './GitDiffRegularDuotone.js';
import { GitDiffBold } from './GitDiffBold.js';
import { GitDiffBoldDuotone } from './GitDiffBoldDuotone.js';
import { GitDiffFill } from './GitDiffFill.js';
import { GitDiffFillDuotone } from './GitDiffFillDuotone.js';

export interface GitDiffProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GitDiff - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GitDiffRegular } from 'stera-icons/icons/GitDiffRegular';
 */
const GitDiff = memo(forwardRef<SVGSVGElement, GitDiffProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <GitDiffBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GitDiffBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GitDiffFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GitDiffFill ref={ref} {...rest} />;
  if (duotone) return <GitDiffRegularDuotone ref={ref} {...rest} />;
  return <GitDiffRegular ref={ref} {...rest} />;
}));

GitDiff.displayName = 'GitDiff';

// Triple export pattern (lucide-react style)
export { GitDiff, GitDiff as GitDiffIcon, GitDiff as SiGitDiff };
export default GitDiff;
