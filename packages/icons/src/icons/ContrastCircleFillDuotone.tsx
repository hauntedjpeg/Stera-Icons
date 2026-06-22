import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, ContrastCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.5a4.5 4.5 0 0 0 0 9v5.38a9.87 9.87 0 0 1 0-19.75zM12 7.5a4.5 4.5 0 1 1 0 9z" />
        <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 0 1 0 19.75V16.5a4.5 4.5 0 0 1 0-9zm0 14.37a4.5 4.5 0 1 0 0-9z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ContrastCircleFillDuotone.displayName = 'ContrastCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { ContrastCircleFillDuotone, ContrastCircleFillDuotone as ContrastCircleFillDuotoneIcon, ContrastCircleFillDuotone as SiContrastCircleFillDuotone };
export default ContrastCircleFillDuotone;
export type { ContrastCircleFillDuotoneProps };
