import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoffeeMugFillProps = Omit<IconBaseProps, 'children'>;

const CoffeeMugFill = memo(
  forwardRef<SVGSVGElement, CoffeeMugFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.75 3.13c1.86 0 3.57.23 4.85.62.64.2 1.22.45 1.65.76.42.3.88.8.88 1.49v.08l-.08 2.05h.63c1.63 0 2.93 1.35 2.87 2.97l-.09 2.5c-.06 1.55-1.33 2.78-2.87 2.78h-.86c-.28 2.09-1.92 3.77-4.05 4.08q-2.93.42-5.86 0c-2.29-.33-4.01-2.25-4.1-4.57l-.34-9.81V6c0-.69.45-1.18.87-1.49.43-.31 1.01-.57 1.65-.76 1.28-.4 3-.62 4.85-.62m7.07 11.5h.77c.6 0 1.1-.48 1.12-1.09l.1-2.5c.01-.64-.5-1.16-1.13-1.16h-.7zm-7.07-9.76c-1.73 0-3.27.22-4.34.55q-.8.26-1.13.5L5.19 6l.02.02.09.06q.09.08.22.14.23.12.54.24l.16.05.22.08q.46.13 1 .24.69.14 1.48.21l.78.06q.51.02 1.05.03t1.05-.03l.78-.06q.8-.08 1.47-.21.55-.1 1-.24l.23-.08.16-.05q.31-.12.54-.24l.22-.14.08-.05.03-.03-.09-.07q-.32-.25-1.13-.5c-1.07-.34-2.6-.55-4.34-.55" clipRule="evenodd" />
    </IconBase>
  ))
);

CoffeeMugFill.displayName = 'CoffeeMugFill';

// Triple export pattern
export { CoffeeMugFill, CoffeeMugFill as CoffeeMugFillIcon, CoffeeMugFill as SiCoffeeMugFill };
export default CoffeeMugFill;
export type { CoffeeMugFillProps };
