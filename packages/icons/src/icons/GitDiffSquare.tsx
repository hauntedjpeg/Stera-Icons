import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { GitDiffSquareRegular } from './GitDiffSquareRegular.js';
import { GitDiffSquareRegularDuotone } from './GitDiffSquareRegularDuotone.js';
import { GitDiffSquareBold } from './GitDiffSquareBold.js';
import { GitDiffSquareBoldDuotone } from './GitDiffSquareBoldDuotone.js';
import { GitDiffSquareFill } from './GitDiffSquareFill.js';
import { GitDiffSquareFillDuotone } from './GitDiffSquareFillDuotone.js';

export interface GitDiffSquareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * GitDiffSquare - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { GitDiffSquareRegular } from 'stera-icons/icons/GitDiffSquareRegular';
 */
const GitDiffSquare = memo(forwardRef<SVGSVGElement, GitDiffSquareProps>(({
  weight = 'regular',
  duotone = false,
  ...rest
}, ref) => {
  if (weight === 'bold' && duotone) return <GitDiffSquareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <GitDiffSquareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <GitDiffSquareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <GitDiffSquareFill ref={ref} {...rest} />;
  if (duotone) return <GitDiffSquareRegularDuotone ref={ref} {...rest} />;
  return <GitDiffSquareRegular ref={ref} {...rest} />;
}));

GitDiffSquare.displayName = 'GitDiffSquare';

// Triple export pattern
export { GitDiffSquare, GitDiffSquare as GitDiffSquareIcon, GitDiffSquare as SiGitDiffSquare };
export default GitDiffSquare;
