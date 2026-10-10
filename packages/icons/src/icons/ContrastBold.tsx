import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastBoldProps = Omit<IconBaseProps, 'children'>;

const ContrastBold = memo(
  forwardRef<SVGSVGElement, ContrastBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastBold.displayName = 'ContrastBold';

// Triple export pattern
export { ContrastBold, ContrastBold as ContrastBoldIcon, ContrastBold as SiContrastBold };
export default ContrastBold;
export type { ContrastBoldProps };
