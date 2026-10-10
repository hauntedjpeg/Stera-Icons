import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugBoldDuotone = memo(
  forwardRef<SVGSVGElement, CoffeeMugBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.75 3c1.87 0 3.6.23 4.9.63.63.2 1.22.45 1.68.78.43.32.92.84.92 1.59s-.5 1.27-.92 1.59c-.46.33-1.05.58-1.69.78-1.3.4-3.02.63-4.89.63s-3.6-.23-4.9-.63c-.63-.2-1.22-.45-1.68-.78-.43-.32-.92-.84-.92-1.59s.5-1.27.92-1.59c.46-.33 1.05-.58 1.69-.78 1.3-.4 3.02-.63 4.89-.63m0 2c-1.72 0-3.24.22-4.3.54Q5.7 5.78 5.4 6q.3.21 1.05.46c1.06.32 2.58.54 4.3.54s3.24-.22 4.3-.54q.74-.24 1.05-.46-.3-.21-1.05-.46C14 5.22 12.47 5 10.75 5" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M18.25 6.04 18.18 8h.5c1.7 0 3.06 1.41 3 3.1l-.1 2.5c-.05 1.62-1.38 2.9-3 2.9h-.74c-.33 2.1-2 3.77-4.14 4.08q-2.95.43-5.9 0c-2.35-.34-4.12-2.31-4.2-4.68l-.35-9.86v-.01c.01.73.5 1.25.92 1.56q.5.35 1.16.6l.27 7.64c.05 1.4 1.1 2.57 2.49 2.77 1.76.26 3.56.26 5.32 0 1.4-.2 2.44-1.37 2.5-2.77l.26-7.64q.66-.26 1.16-.6c.42-.31.9-.83.92-1.57zm-.3 8.46h.64c.53 0 .98-.43 1-.96l.09-2.5c.02-.57-.44-1.04-1-1.04h-.57z" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugBoldDuotone.displayName = 'CoffeeMugBoldDuotone';

// Triple export pattern
export { CoffeeMugBoldDuotone, CoffeeMugBoldDuotone as CoffeeMugBoldDuotoneIcon, CoffeeMugBoldDuotone as SiCoffeeMugBoldDuotone };
export default CoffeeMugBoldDuotone;
export type { CoffeeMugBoldDuotoneProps };
