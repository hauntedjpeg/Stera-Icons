import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CardHolderFillProps = Omit<IconBaseProps, 'children'>;

const CardHolderFill = memo(
  forwardRef<SVGSVGElement, CardHolderFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17 4.13q1.03 0 1.71.03c.47.04.91.12 1.32.33q.97.5 1.48 1.48.29.6.33 1.32.05.68.04 1.71v5.2q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05V9q0-1.03.03-1.71c.04-.47.12-.91.33-1.32Q3 5 3.97 4.49q.6-.29 1.32-.33.68-.05 1.71-.04zm-13.12 7H9c.48 0 .88.39.88.87 0 1.17.95 2.13 2.12 2.13s2.13-.96 2.13-2.13c0-.48.39-.87.87-.87h5.13V9.37H3.88zM7 5.87c-.71 0-1.2 0-1.57.04-.36.03-.54.08-.67.14q-.46.24-.7.71c-.07.13-.12.3-.15.67l-.02.2h16.22l-.02-.2c-.03-.36-.08-.54-.14-.67q-.24-.46-.71-.7c-.13-.07-.3-.12-.67-.15s-.86-.04-1.57-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

CardHolderFill.displayName = 'CardHolderFill';

// Triple export pattern
export { CardHolderFill, CardHolderFill as CardHolderFillIcon, CardHolderFill as SiCardHolderFill };
export default CardHolderFill;
export type { CardHolderFillProps };
