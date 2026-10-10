import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CardHolderBoldProps = Omit<IconBaseProps, 'children'>;

const CardHolderBold = memo(
  forwardRef<SVGSVGElement, CardHolderBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17 4q1.02-.01 1.72.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37q.05.7.04 1.72v5.2q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 15.43 2 14.2V9q-.01-1.03.04-1.72c.04-.48.12-.94.34-1.37.34-.66.87-1.2 1.53-1.53.43-.22.89-.3 1.37-.34Q5.98 3.99 7 4zM4 14.2c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V13h-4.13c-.44 1.73-2 3-3.87 3-1.86 0-3.43-1.27-3.87-3H4zM4 11h5c.55 0 1 .45 1 1 0 1.1.9 2 2 2s2-.9 2-2c0-.55.45-1 1-1h5V9.5H4zm3-5c-.72 0-1.2 0-1.56.03s-.52.08-.62.13q-.43.23-.66.66c-.05.1-.1.26-.13.62v.06h15.94v-.06c-.03-.36-.08-.52-.13-.62q-.23-.43-.66-.66c-.1-.05-.26-.1-.62-.13C18.2 6 17.72 6 17 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

CardHolderBold.displayName = 'CardHolderBold';

// Triple export pattern
export { CardHolderBold, CardHolderBold as CardHolderBoldIcon, CardHolderBold as SiCardHolderBold };
export default CardHolderBold;
export type { CardHolderBoldProps };
