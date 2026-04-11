import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UmbrellaFillProps = Omit<IconBaseProps, 'children'>;

const UmbrellaFill = memo(
  forwardRef<SVGSVGElement, UmbrellaFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.63c.48 0 .88.39.88.87v1.17c5.04.44 9 4.67 9 9.83a.88.88 0 0 1-1.61.48 2.7 2.7 0 0 0-2.27-1.1c-.5 0-.8.1-1.03.26q-.35.24-.74.84a.88.88 0 0 1-1.46 0 2.4 2.4 0 0 0-1.09-.76 5 5 0 0 0-.8-.25V19a1.62 1.62 0 1 0 3.24 0v-.5a.88.88 0 0 1 1.75 0v.5a3.37 3.37 0 1 1-6.75 0v-6.03a5 5 0 0 0-.8.25c-.57.23-.93.52-1.09.76a.88.88 0 0 1-1.46 0q-.4-.6-.74-.84A1.7 1.7 0 0 0 6 12.87a2.7 2.7 0 0 0-2.27 1.1.88.88 0 0 1-1.6-.47c0-5.16 3.95-9.4 9-9.83V2.5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

UmbrellaFill.displayName = 'UmbrellaFill';

// Triple export pattern (lucide-react style)
export { UmbrellaFill, UmbrellaFill as UmbrellaFillIcon, UmbrellaFill as SiUmbrellaFill };
export default UmbrellaFill;
export type { UmbrellaFillProps };
