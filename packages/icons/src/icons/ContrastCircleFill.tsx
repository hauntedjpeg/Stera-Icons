import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleFillProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleFill = memo(
  forwardRef<SVGSVGElement, ContrastCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.5a4.5 4.5 0 1 1 0 9z" />
        <path fillRule="evenodd" d="M12 1.75a10.25 10.25 0 1 1 0 20.5 10.25 10.25 0 0 1 0-20.5m0 5.75a4.5 4.5 0 0 0 0 9v3.25a7.75 7.75 0 0 0 0-15.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastCircleFill.displayName = 'ContrastCircleFill';

// Triple export pattern (lucide-react style)
export { ContrastCircleFill, ContrastCircleFill as ContrastCircleFillIcon, ContrastCircleFill as SiContrastCircleFill };
export default ContrastCircleFill;
export type { ContrastCircleFillProps };
