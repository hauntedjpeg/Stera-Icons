import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastCircleRegularProps = Omit<IconBaseProps, 'children'>;

const ContrastCircleRegular = memo(
  forwardRef<SVGSVGElement, ContrastCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7.5a4.5 4.5 0 1 1 0 9z" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 5.25a4.5 4.5 0 0 0 0 9v3.75a8.25 8.25 0 0 0 0-16.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastCircleRegular.displayName = 'ContrastCircleRegular';

// Triple export pattern (lucide-react style)
export { ContrastCircleRegular, ContrastCircleRegular as ContrastCircleRegularIcon, ContrastCircleRegular as SiContrastCircleRegular };
export default ContrastCircleRegular;
export type { ContrastCircleRegularProps };
