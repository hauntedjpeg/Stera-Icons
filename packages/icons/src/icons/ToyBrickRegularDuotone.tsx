import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ToyBrickRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToyBrickRegularDuotone = memo(
  forwardRef<SVGSVGElement, ToyBrickRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18 8.25c1.52 0 2.75 1.23 2.75 2.75v6c0 1.52-1.23 2.75-2.75 2.75H6c-1.52 0-2.75-1.23-2.75-2.75v-6c0-1.52 1.23-2.75 2.75-2.75zM6 9.75c-.69 0-1.25.56-1.25 1.25v6c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-6c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" opacity={.4} />
        <path d="M6.5 6.25c-.28 0-.5.22-.5.5v1.5q-.84 0-1.5.45V6.75c0-1.1.9-2 2-2H9c1.1 0 2 .9 2 2v1.5H9.5v-1.5c0-.28-.22-.5-.5-.5zM15 6.25c-.28 0-.5.22-.5.5v1.5H13v-1.5c0-1.1.9-2 2-2h2.5c1.1 0 2 .9 2 2V8.7q-.66-.44-1.5-.45v-1.5c0-.28-.22-.5-.5-.5z" />
    </IconBase>
  ))
);

ToyBrickRegularDuotone.displayName = 'ToyBrickRegularDuotone';

// Triple export pattern
export { ToyBrickRegularDuotone, ToyBrickRegularDuotone as ToyBrickRegularDuotoneIcon, ToyBrickRegularDuotone as SiToyBrickRegularDuotone };
export default ToyBrickRegularDuotone;
export type { ToyBrickRegularDuotoneProps };
