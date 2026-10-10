import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeadphonesBoldProps = Omit<IconBaseProps, 'children'>;

const HeadphonesBold = memo(
  forwardRef<SVGSVGElement, HeadphonesBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.28 2.1c2.9.08 5.48 1.4 7.26 3.43 1.63 1.87 2.1 4.15 2.06 6.42-.04 2.25-.56 4.6-1.02 6.67-.1.45-.49.75-.93.78v.01c-.33 1.51-1.83 2.46-3.34 2.13s-2.46-1.83-2.13-3.34l.59-2.64c.34-1.51 1.83-2.46 3.34-2.13q.76.18 1.3.7.16-1.13.19-2.21c.03-1.99-.38-3.71-1.57-5.08-1.38-1.57-3.36-2.6-5.58-2.73h-.9c-2.22.13-4.2 1.16-5.58 2.73-1.19 1.37-1.6 3.1-1.57 5.08q.02 1.09.19 2.2.54-.5 1.3-.69c1.5-.33 3 .62 3.34 2.13l.59 2.64c.33 1.5-.62 3-2.13 3.34s-3-.62-3.34-2.13v-.01c-.44-.03-.83-.33-.93-.78-.46-2.07-.98-4.42-1.02-6.67-.03-2.27.43-4.55 2.06-6.42C6.3 3.43 9 2.1 12 2.1zm-5 13.9c-.1-.44-.53-.7-.96-.61-.43.1-.7.52-.6.95l.58 2.64c.1.43.52.7.96.6s.7-.52.6-.95zm10.4-.61c-.44-.1-.86.17-.96.6l-.58 2.64c-.1.43.17.86.6.95.44.1.86-.17.96-.6l.58-2.64c.1-.43-.17-.86-.6-.95" clipRule="evenodd" />
    </IconBase>
  ))
);

HeadphonesBold.displayName = 'HeadphonesBold';

// Triple export pattern
export { HeadphonesBold, HeadphonesBold as HeadphonesBoldIcon, HeadphonesBold as SiHeadphonesBold };
export default HeadphonesBold;
export type { HeadphonesBoldProps };
