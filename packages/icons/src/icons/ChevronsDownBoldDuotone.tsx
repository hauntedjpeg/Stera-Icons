import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.3 4.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-7 7q-.28.3-.7.3t-.7-.3l-7-7c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l6.3 6.29z" opacity={.4} />
        <path d="M18.3 12.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-7 7q-.28.3-.7.3t-.7-.3l-7-7c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l6.3 6.29z" />
    </IconBase>
  ))
);

ChevronsDownBoldDuotone.displayName = 'ChevronsDownBoldDuotone';

// Triple export pattern
export { ChevronsDownBoldDuotone, ChevronsDownBoldDuotone as ChevronsDownBoldDuotoneIcon, ChevronsDownBoldDuotone as SiChevronsDownBoldDuotone };
export default ChevronsDownBoldDuotone;
export type { ChevronsDownBoldDuotoneProps };
