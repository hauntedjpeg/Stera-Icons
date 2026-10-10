import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExclamationPointRegularProps = Omit<IconBaseProps, 'children'>;

const ExclamationPointRegular = memo(
  forwardRef<SVGSVGElement, ExclamationPointRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 17.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M12 2.5c.35 0 .68.13.91.37.24.23.35.55.34.88q0 .29-.03.56l-.44 10.13-.03.56q-.01.3-.24.5-.22.22-.51.22t-.51-.21q-.22-.22-.24-.51 0-.28-.03-.56L10.78 4.3l-.03-.56q-.02-.51.34-.88.37-.36.91-.37" />
    </IconBase>
  ))
);

ExclamationPointRegular.displayName = 'ExclamationPointRegular';

// Triple export pattern
export { ExclamationPointRegular, ExclamationPointRegular as ExclamationPointRegularIcon, ExclamationPointRegular as SiExclamationPointRegular };
export default ExclamationPointRegular;
export type { ExclamationPointRegularProps };
