import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GhostFillProps = Omit<IconBaseProps, 'children'>;

const GhostFill = memo(
  forwardRef<SVGSVGElement, GhostFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c4.9 0 8.88 3.97 8.88 8.87v10c0 .32-.18.62-.47.77s-.63.14-.9-.04l-2.46-1.65-2 1.6c-.32.26-.78.26-1.1 0L12 20.12l-1.95 1.56c-.32.26-.78.26-1.1 0l-2-1.6-2.46 1.65c-.27.18-.62.2-.9.04-.29-.15-.46-.45-.46-.77V11c0-4.9 3.97-8.87 8.87-8.87M9 9c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

GhostFill.displayName = 'GhostFill';

// Triple export pattern
export { GhostFill, GhostFill as GhostFillIcon, GhostFill as SiGhostFill };
export default GhostFill;
export type { GhostFillProps };
