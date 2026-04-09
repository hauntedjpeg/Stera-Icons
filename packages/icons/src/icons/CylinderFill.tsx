import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CylinderFillProps = Omit<IconBaseProps, 'children'>;

const CylinderFill = memo(
  forwardRef<SVGSVGElement, CylinderFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cylinder-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13c2.01 0 3.87.3 5.26.84.7.27 1.32.61 1.78 1.03s.84 1 .84 1.7v12.6q0 .39-.15.74-.24.56-.7.96a5 5 0 0 1-1.26.81l-.5.22c-1.4.53-3.26.84-5.27.84s-3.87-.3-5.26-.84a8 8 0 0 1-.75-.34q-.59-.3-1.03-.7a3 3 0 0 1-.7-.95 2 2 0 0 1-.13-.74V5.7c0-.7.37-1.28.83-1.7a6 6 0 0 1 1.78-1.03c1.39-.53 3.25-.85 5.26-.85m0 1.75c-1.85 0-3.5.29-4.63.73q-.86.34-1.23.69c-.25.22-.26.36-.26.4s.01.18.26.4q.37.35 1.23.7c1.14.43 2.78.73 4.63.73s3.5-.3 4.63-.74q.86-.34 1.23-.69c.25-.22.26-.36.27-.4 0-.04-.02-.18-.27-.4a4 4 0 0 0-1.23-.7A13 13 0 0 0 12 3.89" clipRule="evenodd" />
    </IconBase>
  ))
);

CylinderFill.displayName = 'CylinderFill';

// Triple export pattern (lucide-react style)
export { CylinderFill, CylinderFill as CylinderFillIcon, CylinderFill as SiCylinderFill };
export default CylinderFill;
export type { CylinderFillProps };
