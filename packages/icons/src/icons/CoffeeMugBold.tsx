import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugBoldProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugBold = memo(
  forwardRef<SVGSVGElement, CoffeeMugBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.75 3c1.87 0 3.6.23 4.9.63.63.2 1.22.45 1.68.78.43.32.92.84.92 1.59v.03L18.18 8h.5c1.7 0 3.06 1.41 3 3.1l-.1 2.5c-.05 1.62-1.38 2.9-3 2.9h-.74c-.33 2.1-2 3.77-4.14 4.08q-2.95.43-5.9 0c-2.35-.34-4.12-2.31-4.2-4.68l-.35-9.86V6c0-.75.5-1.27.92-1.59.46-.33 1.05-.58 1.69-.78 1.3-.4 3.02-.63 4.89-.63m5.42 5.19-.53.18c-1.3.4-3.02.63-4.89.63s-3.6-.23-4.9-.63l-.52-.18.27 7.64c.05 1.4 1.1 2.57 2.49 2.77q2.66.39 5.32 0c1.4-.2 2.44-1.37 2.5-2.77zm1.78 6.31h.64c.54 0 .98-.43 1-.96l.09-2.5c.02-.57-.44-1.04-1-1.04h-.57zM10.75 5c-1.72 0-3.24.22-4.3.54Q5.7 5.78 5.4 6q.3.21 1.05.46c1.06.32 2.58.54 4.3.54s3.24-.22 4.3-.54q.74-.24 1.05-.46-.3-.21-1.05-.46C14 5.22 12.47 5 10.75 5" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugBold.displayName = 'CoffeeMugBold';

// Triple export pattern
export { CoffeeMugBold, CoffeeMugBold as CoffeeMugBoldIcon, CoffeeMugBold as SiCoffeeMugBold };
export default CoffeeMugBold;
export type { CoffeeMugBoldProps };
