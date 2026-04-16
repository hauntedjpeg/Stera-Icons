import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugFillDuotone = memo(
  forwardRef<SVGSVGElement, CoffeeMugFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.75 3.13c1.86 0 3.57.23 4.85.62.64.2 1.22.45 1.65.76.42.3.88.8.88 1.49s-.46 1.18-.88 1.49c-.43.31-1.01.57-1.65.76-1.28.4-3 .63-4.85.63-1.86 0-3.57-.24-4.85-.63a6 6 0 0 1-1.65-.76c-.42-.3-.87-.8-.87-1.49s.45-1.18.87-1.49a6 6 0 0 1 1.65-.76c1.28-.4 3-.62 4.85-.62" opacity={.4} />
        <path fillRule="evenodd" d="M18.12 6.03v.05l-.07 2.05h.63a2.9 2.9 0 0 1 2.87 2.97l-.09 2.5a2.9 2.9 0 0 1-2.87 2.78h-.86a4.8 4.8 0 0 1-4.05 4.08q-2.93.42-5.86 0a4.8 4.8 0 0 1-4.1-4.57l-.34-9.81v-.05c0 .67.45 1.16.87 1.46.43.31 1.01.57 1.65.76 1.28.4 3 .63 4.85.63 1.86 0 3.57-.24 4.85-.63.64-.2 1.22-.45 1.65-.76.42-.3.86-.79.87-1.46m-.3 8.6h.77c.6 0 1.1-.48 1.12-1.09l.1-2.5a1.13 1.13 0 0 0-1.13-1.16h-.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugFillDuotone.displayName = 'CoffeeMugFillDuotone';

// Triple export pattern (lucide-react style)
export { CoffeeMugFillDuotone, CoffeeMugFillDuotone as CoffeeMugFillDuotoneIcon, CoffeeMugFillDuotone as SiCoffeeMugFillDuotone };
export default CoffeeMugFillDuotone;
export type { CoffeeMugFillDuotoneProps };
