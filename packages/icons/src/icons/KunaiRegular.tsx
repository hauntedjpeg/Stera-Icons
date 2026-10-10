import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type KunaiRegularProps = Omit<IconBaseProps, 'children'>;

const KunaiRegular = memo(
  forwardRef<SVGSVGElement, KunaiRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.4 3.25c1.3 0 2.35 1.05 2.35 2.35S19.7 7.95 18.4 7.95q-.57 0-1.04-.25l-2.7 2.7.67.67c.3.3.3.77 0 1.06s-.77.3-1.06 0l-.17-.17-.56 3.36q-.07.36-.38.54l-8.8 4.8c-.3.16-.65.1-.89-.13s-.29-.6-.13-.89l4.8-8.8.05-.07q.18-.26.49-.31l3.36-.56-.17-.17c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l.67.67 2.7-2.7q-.25-.47-.25-1.04c0-1.3 1.05-2.35 2.35-2.35m-9.12 8.63-3.4 6.24 6.24-3.4.57-3.4zm9.12-7.13c-.47 0-.85.38-.85.85s.38.85.85.85.85-.38.85-.85-.38-.85-.85-.85" clipRule="evenodd" />
    </IconBase>
  ))
);

KunaiRegular.displayName = 'KunaiRegular';

// Triple export pattern
export { KunaiRegular, KunaiRegular as KunaiRegularIcon, KunaiRegular as SiKunaiRegular };
export default KunaiRegular;
export type { KunaiRegularProps };
