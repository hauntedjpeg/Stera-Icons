import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type UmbrellaFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const UmbrellaFillDuotone = memo(
  forwardRef<SVGSVGElement, UmbrellaFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="umbrella-fill-duotone" {...props}>
      <path d="M12 3.63a9.9 9.9 0 0 1 9.88 9.87.88.88 0 0 1-1.61.48 2.7 2.7 0 0 0-2.27-1.1c-.5 0-.8.1-1.03.26q-.35.24-.74.84a.88.88 0 0 1-1.46 0 2.4 2.4 0 0 0-1.09-.76 5 5 0 0 0-1.68-.35c-.52 0-1.14.13-1.68.35-.57.23-.93.52-1.09.76a.88.88 0 0 1-1.46 0q-.4-.6-.74-.84A1.7 1.7 0 0 0 6 12.87a2.7 2.7 0 0 0-2.27 1.1.88.88 0 0 1-1.6-.47A9.9 9.9 0 0 1 12 3.63" opacity={.4} />
        <path d="M12 12.88q.41 0 .88.1V19a1.62 1.62 0 1 0 3.24 0v-.5a.88.88 0 0 1 1.75 0v.5a3.37 3.37 0 1 1-6.75 0v-6.03q.46-.1.88-.1M12 1.63c.48 0 .88.39.88.87v1.17a10 10 0 0 0-1.76 0V2.5c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

UmbrellaFillDuotone.displayName = 'UmbrellaFillDuotone';

// Triple export pattern (lucide-react style)
export { UmbrellaFillDuotone, UmbrellaFillDuotone as UmbrellaFillDuotoneIcon, UmbrellaFillDuotone as SiUmbrellaFillDuotone };
export default UmbrellaFillDuotone;
export type { UmbrellaFillDuotoneProps };
