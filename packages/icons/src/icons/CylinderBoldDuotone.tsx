import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CylinderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CylinderBoldDuotone = memo(
  forwardRef<SVGSVGElement, CylinderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5.7c0 .75.4 1.35.88 1.79q.48.43 1.12.75V18.3q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72s3.46-.29 4.59-.72q.85-.34 1.19-.67.15-.15.2-.23l.02-.08V8.24q.64-.32 1.12-.75c.48-.44.88-1.04.88-1.79v12.6c0 .75-.4 1.35-.88 1.79-.47.44-1.11.78-1.81 1.05-1.4.55-3.29.86-5.31.86s-3.9-.31-5.31-.86c-.7-.27-1.34-.61-1.81-1.05C4.4 19.65 4 19.05 4 18.3z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2c2.02 0 3.9.31 5.31.86.7.27 1.34.61 1.81 1.05.48.44.88 1.04.88 1.79s-.4 1.35-.88 1.79c-.47.44-1.11.78-1.81 1.05-1.4.55-3.29.86-5.31.86s-3.9-.31-5.31-.86c-.7-.27-1.34-.61-1.81-1.05C4.4 7.05 4 6.45 4 5.7s.4-1.35.88-1.79c.47-.44 1.11-.78 1.81-1.05C8.09 2.3 9.98 2 12 2m0 2c-1.84 0-3.46.29-4.59.72q-.85.34-1.19.67-.15.15-.2.23L6 5.7q0 0 .03.08t.2.23q.33.33 1.18.67c1.13.43 2.75.72 4.59.72s3.46-.29 4.59-.72q.85-.34 1.19-.67.15-.15.2-.23L18 5.7q0 0-.03-.08t-.2-.23q-.33-.33-1.18-.67C15.46 4.3 13.84 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

CylinderBoldDuotone.displayName = 'CylinderBoldDuotone';

// Triple export pattern
export { CylinderBoldDuotone, CylinderBoldDuotone as CylinderBoldDuotoneIcon, CylinderBoldDuotone as SiCylinderBoldDuotone };
export default CylinderBoldDuotone;
export type { CylinderBoldDuotoneProps };
