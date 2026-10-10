import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToyBrickRegularProps = Omit<IconBaseProps, 'children'>;

const ToyBrickRegular = memo(
  forwardRef<SVGSVGElement, ToyBrickRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9 4.75c1.1 0 2 .9 2 2v1.5h2v-1.5c0-1.1.9-2 2-2h2.5c1.1 0 2 .9 2 2V8.7c.75.49 1.25 1.33 1.25 2.3v6c0 1.52-1.23 2.75-2.75 2.75H6c-1.52 0-2.75-1.23-2.75-2.75v-6c0-.97.5-1.81 1.25-2.3V6.75c0-1.1.9-2 2-2zm-3 5c-.69 0-1.25.56-1.25 1.25v6c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-6c0-.69-.56-1.25-1.25-1.25zm.5-3.5c-.28 0-.5.22-.5.5v1.5h3.5v-1.5c0-.28-.22-.5-.5-.5zm8.5 0c-.28 0-.5.22-.5.5v1.5H18v-1.5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToyBrickRegular.displayName = 'ToyBrickRegular';

// Triple export pattern
export { ToyBrickRegular, ToyBrickRegular as ToyBrickRegularIcon, ToyBrickRegular as SiToyBrickRegular };
export default ToyBrickRegular;
export type { ToyBrickRegularProps };
