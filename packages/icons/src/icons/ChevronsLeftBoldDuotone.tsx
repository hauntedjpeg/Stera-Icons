import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.3 4.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L5.42 12l6.3 6.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-7-7q-.28-.28-.29-.7t.3-.7z" />
        <path d="M18.3 4.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L13.42 12l6.3 6.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-7-7q-.28-.28-.29-.7t.3-.7z" opacity={.4} />
    </IconBase>
  ))
);

ChevronsLeftBoldDuotone.displayName = 'ChevronsLeftBoldDuotone';

// Triple export pattern
export { ChevronsLeftBoldDuotone, ChevronsLeftBoldDuotone as ChevronsLeftBoldDuotoneIcon, ChevronsLeftBoldDuotone as SiChevronsLeftBoldDuotone };
export default ChevronsLeftBoldDuotone;
export type { ChevronsLeftBoldDuotoneProps };
