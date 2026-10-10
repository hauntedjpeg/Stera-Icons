import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DiamondBoldProps = Omit<IconBaseProps, 'children'>;

const DiamondBold = memo(
  forwardRef<SVGSVGElement, DiamondBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.76 1.44c.8-.26 1.67-.26 2.48 0q.75.26 1.38.83.62.53 1.48 1.42l4.21 4.2q.87.87 1.42 1.49.57.63.83 1.38c.26.8.26 1.67 0 2.48q-.27.75-.83 1.38-.54.62-1.42 1.48l-4.2 4.21c-.6.59-1.07 1.06-1.5 1.42q-.62.56-1.37.83c-.8.26-1.67.26-2.48 0q-.75-.27-1.38-.83-.62-.54-1.48-1.42l-4.21-4.2c-.59-.6-1.07-1.07-1.42-1.5q-.57-.62-.83-1.37c-.26-.8-.26-1.67 0-2.48q.26-.75.83-1.38.53-.62 1.42-1.48l4.2-4.21q.87-.89 1.49-1.42.63-.57 1.38-.83m1.86 1.9c-.4-.13-.84-.13-1.24 0-.17.05-.37.17-.7.45-.35.3-.76.7-1.37 1.31l-4.2 4.21c-.61.6-1.03 1.02-1.32 1.36-.28.34-.4.54-.45.71-.13.4-.13.84 0 1.24.05.16.17.37.45.7.3.35.7.76 1.31 1.37l4.21 4.2c.6.61 1.02 1.03 1.36 1.32.34.28.54.4.71.45q.62.2 1.24 0c.16-.06.37-.17.7-.45.35-.3.76-.7 1.37-1.31l4.2-4.21c.61-.6 1.03-1.02 1.32-1.37.28-.33.4-.54.45-.7q.2-.62 0-1.24c-.06-.17-.17-.37-.45-.7-.3-.35-.7-.76-1.31-1.37l-4.21-4.2c-.6-.61-1.02-1.03-1.37-1.32-.33-.28-.54-.4-.7-.45" clipRule="evenodd" />
    </IconBase>
  ))
);

DiamondBold.displayName = 'DiamondBold';

// Triple export pattern
export { DiamondBold, DiamondBold as DiamondBoldIcon, DiamondBold as SiDiamondBold };
export default DiamondBold;
export type { DiamondBoldProps };
