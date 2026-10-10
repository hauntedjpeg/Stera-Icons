import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToyBrickBoldProps = Omit<IconBaseProps, 'children'>;

const ToyBrickBold = memo(
  forwardRef<SVGSVGElement, ToyBrickBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.25 4.5c1.24 0 2.25 1 2.25 2.25V8h1V6.75c0-1.24 1-2.25 2.25-2.25h2.5c1.24 0 2.25 1 2.25 2.25V8.4c.9.52 1.5 1.49 1.5 2.6v6c0 1.66-1.34 3-3 3H6c-1.66 0-3-1.34-3-3v-6c0-1.11.6-2.08 1.5-2.6V6.75c0-1.24 1-2.25 2.25-2.25zM6 10c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm.75-3.5c-.14 0-.25.11-.25.25V8h3V6.75c0-.14-.11-.25-.25-.25zm8 0c-.14 0-.25.11-.25.25V8h3V6.75c0-.14-.11-.25-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToyBrickBold.displayName = 'ToyBrickBold';

// Triple export pattern
export { ToyBrickBold, ToyBrickBold as ToyBrickBoldIcon, ToyBrickBold as SiToyBrickBold };
export default ToyBrickBold;
export type { ToyBrickBoldProps };
