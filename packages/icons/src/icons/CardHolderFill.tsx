import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CardHolderFillProps = Omit<IconBaseProps, 'children'>;

const CardHolderFill = memo(
  forwardRef<SVGSVGElement, CardHolderFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17 4.25q1.03-.01 1.7.04.7.04 1.28.31.92.5 1.42 1.42.28.59.31 1.28.05.67.04 1.7v5.2q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V9q-.01-1.03.04-1.7.03-.7.31-1.28c.32-.6.81-1.1 1.42-1.42q.59-.28 1.28-.31.67-.05 1.7-.04zm-13.25 7H9c.41 0 .75.34.75.75 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-.41.34-.75.75-.75h5.25v-2H3.75zM7 5.75c-.71 0-1.2 0-1.58.03-.37.03-.57.09-.71.16q-.5.26-.77.77c-.07.14-.13.34-.16.7l-.02.34h16.48l-.02-.33c-.03-.37-.09-.57-.16-.71q-.27-.5-.77-.77c-.14-.07-.34-.13-.7-.16-.39-.03-.88-.03-1.59-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

CardHolderFill.displayName = 'CardHolderFill';

// Triple export pattern
export { CardHolderFill, CardHolderFill as CardHolderFillIcon, CardHolderFill as SiCardHolderFill };
export default CardHolderFill;
export type { CardHolderFillProps };
