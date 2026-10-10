import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsDownBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownBold = memo(
  forwardRef<SVGSVGElement, ChevronsDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.3 12.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-7 7q-.28.3-.7.3t-.7-.3l-7-7c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l6.3 6.29z" />
        <path d="M18.3 4.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-7 7q-.28.3-.7.3t-.7-.3l-7-7c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l6.3 6.29z" />
    </IconBase>
  ))
);

ChevronsDownBold.displayName = 'ChevronsDownBold';

// Triple export pattern
export { ChevronsDownBold, ChevronsDownBold as ChevronsDownBoldIcon, ChevronsDownBold as SiChevronsDownBold };
export default ChevronsDownBold;
export type { ChevronsDownBoldProps };
