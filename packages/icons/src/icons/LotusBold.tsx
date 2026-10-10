import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LotusBoldProps = Omit<IconBaseProps, 'children'>;

const LotusBold = memo(
  forwardRef<SVGSVGElement, LotusBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.37 3.22c.4-.32.97-.3 1.34.07l2.34 2.35.45.47 2.8-1.5.1-.04c.25-.1.54-.1.78.02.29.14.5.4.56.7L20.52 9H22q.42 0 .7.3.3.29.3.7v2c0 4.97-4.03 9-9 9h-4c-4.97 0-9-4.03-9-9v-2c0-.26.1-.52.3-.7Q1.57 9 2 9h1.48l.78-3.7c.06-.31.27-.57.56-.7.28-.14.61-.13.89.02l2.8 1.5q.21-.25.44-.48l2.34-2.35zm8.35 7.79q-1.08.04-2.06.39c.17 2.5-.7 5.05-2.61 6.96l-.63.63C18.1 18.77 21 15.73 21 12v-1h-1.28M3 12c0 3.72 2.9 6.76 6.57 6.99l-.62-.63c-1.91-1.9-2.78-4.46-2.61-6.96q-.97-.35-2.07-.4H3zm7.36-4.95q-.42.44-.77.92-.95 1.36-1.2 2.95c-.33 2.13.33 4.39 1.97 6.03L12 18.59l1.64-1.64c1.64-1.64 2.3-3.9 1.96-6.04-.16-1.04-.55-2.06-1.18-2.95q-.34-.46-.78-.91L12 5.41zM5.5 9.13q.6.1 1.2.28.24-.84.67-1.64l-1.43-.76zm11.14-1.36q.42.8.67 1.64.57-.18 1.2-.28L18.05 7z" clipRule="evenodd" />
    </IconBase>
  ))
);

LotusBold.displayName = 'LotusBold';

// Triple export pattern
export { LotusBold, LotusBold as LotusBoldIcon, LotusBold as SiLotusBold };
export default LotusBold;
export type { LotusBoldProps };
