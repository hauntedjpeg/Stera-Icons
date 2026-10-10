import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastBoldDuotone = memo(
  forwardRef<SVGSVGElement, ContrastBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 4c4.42 0 8 3.58 8 8s-3.58 8-8 8z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastBoldDuotone.displayName = 'ContrastBoldDuotone';

// Triple export pattern
export { ContrastBoldDuotone, ContrastBoldDuotone as ContrastBoldDuotoneIcon, ContrastBoldDuotone as SiContrastBoldDuotone };
export default ContrastBoldDuotone;
export type { ContrastBoldDuotoneProps };
