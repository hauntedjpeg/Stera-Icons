import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugRegularProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugRegular = memo(
  forwardRef<SVGSVGElement, CoffeeMugRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.75 3.25c1.85 0 3.55.23 4.82.62.62.2 1.19.44 1.61.75.4.28.8.72.82 1.32v.09l-.08 2.22h.76c1.55 0 2.8 1.3 2.74 2.85l-.08 2.5a2.75 2.75 0 0 1-2.75 2.65h-.97a4.66 4.66 0 0 1-3.96 4.09c-1.93.28-3.9.28-5.82 0a4.66 4.66 0 0 1-4-4.45L3.5 6.03V6c0-.63.41-1.09.82-1.38.42-.31.99-.56 1.61-.75 1.27-.39 2.97-.62 4.82-.62m-5.4 12.59a3.16 3.16 0 0 0 2.7 3.01q2.7.39 5.4 0a3.16 3.16 0 0 0 2.7-3.01l.28-8.03q-.4.18-.86.32c-1.27.39-2.97.62-4.82.62s-3.55-.23-4.82-.62q-.46-.14-.87-.32zm12.34-1.09h.9c.67 0 1.22-.53 1.25-1.2l.09-2.5c.02-.71-.55-1.3-1.25-1.3h-.81zm-6.94-10c-1.74 0-3.29.22-4.38.55q-.81.27-1.17.53L5.02 6q.02.05.18.17.36.27 1.17.53c1.09.33 2.64.55 4.38.55s3.29-.22 4.38-.55q.81-.27 1.17-.53.15-.12.18-.17l-.18-.17a4 4 0 0 0-1.17-.53 16 16 0 0 0-4.38-.55" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugRegular.displayName = 'CoffeeMugRegular';

// Triple export pattern (lucide-react style)
export { CoffeeMugRegular, CoffeeMugRegular as CoffeeMugRegularIcon, CoffeeMugRegular as SiCoffeeMugRegular };
export default CoffeeMugRegular;
export type { CoffeeMugRegularProps };
