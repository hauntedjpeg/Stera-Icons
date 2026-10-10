import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronInwardFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronInwardFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronInwardFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.38 14.38c.34-.34.9-.34 1.24 0l6 6c.25.25.32.63.19.95-.14.33-.46.54-.81.54H6c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95z" opacity={.4} />
        <path d="M18 2.13c.35 0 .67.2.8.54.14.32.07.7-.18.95l-6 6c-.34.34-.9.34-1.24 0l-6-6c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

ChevronInwardFillDuotone.displayName = 'ChevronInwardFillDuotone';

// Triple export pattern
export { ChevronInwardFillDuotone, ChevronInwardFillDuotone as ChevronInwardFillDuotoneIcon, ChevronInwardFillDuotone as SiChevronInwardFillDuotone };
export default ChevronInwardFillDuotone;
export type { ChevronInwardFillDuotoneProps };
