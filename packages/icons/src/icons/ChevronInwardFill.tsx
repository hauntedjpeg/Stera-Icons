import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronInwardFillProps = Omit<IconBaseProps, 'children'>;

const ChevronInwardFill = memo(
  forwardRef<SVGSVGElement, ChevronInwardFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.38 14.38a.9.9 0 0 1 1.24 0l6 6a.88.88 0 0 1-.62 1.5H6a.88.88 0 0 1-.62-1.5zM18 2.13a.88.88 0 0 1 .62 1.49l-6 6a.9.9 0 0 1-1.24 0l-6-6A.88.88 0 0 1 6 2.12z" />
    </IconBase>
  ))
);

ChevronInwardFill.displayName = 'ChevronInwardFill';

// Triple export pattern (lucide-react style)
export { ChevronInwardFill, ChevronInwardFill as ChevronInwardFillIcon, ChevronInwardFill as SiChevronInwardFill };
export default ChevronInwardFill;
export type { ChevronInwardFillProps };
