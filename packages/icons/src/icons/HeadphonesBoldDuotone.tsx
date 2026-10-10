import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HeadphonesBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HeadphonesBoldDuotone = memo(
  forwardRef<SVGSVGElement, HeadphonesBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.28 2.1c2.9.08 5.48 1.4 7.26 3.43 1.63 1.87 2.1 4.15 2.06 6.42-.04 2.25-.56 4.6-1.02 6.67-.1.45-.49.75-.93.78l.59-2.63c.22-1-.13-2-.83-2.65q.16-1.12.19-2.2c.03-1.99-.38-3.71-1.57-5.08-1.38-1.57-3.36-2.6-5.58-2.73h-.9c-2.22.13-4.2 1.16-5.58 2.73-1.19 1.37-1.6 3.1-1.57 5.08q.02 1.09.19 2.2c-.7.66-1.05 1.65-.83 2.65l.59 2.63c-.44-.03-.83-.33-.93-.78-.46-2.07-.98-4.42-1.02-6.67-.03-2.27.43-4.55 2.06-6.42C6.3 3.43 9 2.1 12 2.1z" opacity={.4} />
        <path fillRule="evenodd" d="M5.89 13.43c1.5-.33 3 .62 3.34 2.13l.59 2.64c.33 1.5-.62 3-2.13 3.34s-3-.62-3.34-2.13l-.59-2.64c-.33-1.5.62-3 2.13-3.34M7.28 16c-.1-.43-.53-.7-.96-.6s-.7.52-.6.95l.58 2.64c.1.43.52.7.96.6s.7-.52.6-.95zM14.77 15.56c.34-1.51 1.83-2.46 3.34-2.13s2.46 1.83 2.13 3.34l-.59 2.64c-.33 1.51-1.83 2.46-3.34 2.13s-2.46-1.83-2.13-3.34zm2.9-.17c-.43-.1-.85.17-.95.6l-.58 2.64c-.1.43.17.86.6.95.43.1.86-.17.96-.6l.58-2.64c.1-.43-.17-.86-.6-.95" clipRule="evenodd" />
    </IconBase>
  ))
);

HeadphonesBoldDuotone.displayName = 'HeadphonesBoldDuotone';

// Triple export pattern
export { HeadphonesBoldDuotone, HeadphonesBoldDuotone as HeadphonesBoldDuotoneIcon, HeadphonesBoldDuotone as SiHeadphonesBoldDuotone };
export default HeadphonesBoldDuotone;
export type { HeadphonesBoldDuotoneProps };
