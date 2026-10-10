import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AngleAcuteFillProps = Omit<IconBaseProps, 'children'>;

const AngleAcuteFill = memo(
  forwardRef<SVGSVGElement, AngleAcuteFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.7 4.32c.42-.71 1.33-.96 2.05-.55.72.42.96 1.34.55 2.05L6.6 17.43H20c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H4c-.54 0-1.03-.29-1.3-.75s-.27-1.04 0-1.5z" />
        <path d="M19.07 13.33c.8-.21 1.62.26 1.84 1.06v.02c.21.8-.26 1.62-1.06 1.83s-1.63-.26-1.84-1.06v-.01c-.22-.8.26-1.62 1.06-1.84M17.1 9.63c.72-.42 1.64-.18 2.05.54l.01.01c.41.72.17 1.64-.55 2.05-.72.42-1.63.17-2.05-.55s-.17-1.64.54-2.05M14.25 6.55c.58-.58 1.53-.58 2.12 0 .6.6.6 1.54 0 2.13-.58.59-1.53.59-2.11 0h-.01c-.59-.6-.59-1.54 0-2.13" />
    </IconBase>
  ))
);

AngleAcuteFill.displayName = 'AngleAcuteFill';

// Triple export pattern
export { AngleAcuteFill, AngleAcuteFill as AngleAcuteFillIcon, AngleAcuteFill as SiAngleAcuteFill };
export default AngleAcuteFill;
export type { AngleAcuteFillProps };
