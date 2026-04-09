import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugFillProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugFill = memo(
  forwardRef<SVGSVGElement, CoffeeMugFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="coffee-mug-fill" {...props}>
      <path fillRule="evenodd" d="M10.75 3.13c1.86 0 3.57.23 4.85.62.64.2 1.22.45 1.65.76.42.3.88.8.88 1.49v.08l-.04 1.05h.6a2.87 2.87 0 0 1 2.87 2.97l-.1 3a2.9 2.9 0 0 1-2.88 2.78h-.8v.01a4.8 4.8 0 0 1-4.1 4.57q-2.93.42-5.86 0a4.8 4.8 0 0 1-4.1-4.57l-.34-9.81V6c0-.69.45-1.18.87-1.49a6 6 0 0 1 1.65-.76c1.28-.4 3-.62 4.85-.62m7.09 11h.74c.6 0 1.1-.49 1.13-1.1l.1-3a1.1 1.1 0 0 0-1.13-1.15h-.66zm-7.09-9.26c-1.73 0-3.27.22-4.34.55q-.8.26-1.13.5L5.19 6l.02.02.09.06q.09.08.22.14.23.12.54.24l.16.05.22.08q.46.13 1 .24a15 15 0 0 0 3.31.3 20 20 0 0 0 3.3-.3q.55-.1 1-.24l.23-.08.16-.05a4 4 0 0 0 .76-.38l.08-.05.03-.03-.09-.07q-.32-.25-1.13-.5c-1.07-.34-2.6-.55-4.34-.55" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugFill.displayName = 'CoffeeMugFill';

// Triple export pattern (lucide-react style)
export { CoffeeMugFill, CoffeeMugFill as CoffeeMugFillIcon, CoffeeMugFill as SiCoffeeMugFill };
export default CoffeeMugFill;
export type { CoffeeMugFillProps };
