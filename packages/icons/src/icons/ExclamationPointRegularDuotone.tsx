import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ExclamationPointRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ExclamationPointRegularDuotone = memo(
  forwardRef<SVGSVGElement, ExclamationPointRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 17.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" opacity={.4} />
        <path d="M12 2.5q.54 0 .91.37c.24.23.35.55.34.88q0 .29-.03.56l-.45 10.13-.02.56q-.01.3-.24.5-.22.22-.51.22t-.52-.21q-.21-.22-.23-.51 0-.28-.03-.56L10.77 4.3l-.02-.56q-.03-.51.34-.88c.23-.24.56-.37.9-.37" />
    </IconBase>
  ))
);

ExclamationPointRegularDuotone.displayName = 'ExclamationPointRegularDuotone';

// Triple export pattern
export { ExclamationPointRegularDuotone, ExclamationPointRegularDuotone as ExclamationPointRegularDuotoneIcon, ExclamationPointRegularDuotone as SiExclamationPointRegularDuotone };
export default ExclamationPointRegularDuotone;
export type { ExclamationPointRegularDuotoneProps };
