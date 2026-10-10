import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ContrastRegularDuotone = memo(
  forwardRef<SVGSVGElement, ContrastRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.75c4.56 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25z" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastRegularDuotone.displayName = 'ContrastRegularDuotone';

// Triple export pattern
export { ContrastRegularDuotone, ContrastRegularDuotone as ContrastRegularDuotoneIcon, ContrastRegularDuotone as SiContrastRegularDuotone };
export default ContrastRegularDuotone;
export type { ContrastRegularDuotoneProps };
