import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SliceBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SliceBoldDuotone = memo(
  forwardRef<SVGSVGElement, SliceBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M17.16 3.92c1.22-1.22 3.2-1.22 4.42 0 1.23 1.22 1.23 3.2 0 4.43l-7.6 7.6q-.37.38-.84.57v-.14q0-.41-.3-.7l-3-3.02-.08-.07q-.28-.21-.63-.22-.36 0-.64.22l-.06.06zm3 1.41c-.43-.44-1.15-.44-1.59 0l-8.03 8.04 1.17 1.17c.24.23.62.23.86 0l7.6-7.6c.44-.45.44-1.17 0-1.6" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M9.13 12.37q.35 0 .63.22l.07.07 3.02 3.01q.28.31.29.71v2.41c0 1.22-.99 2.21-2.2 2.21H2.5c-.4 0-.77-.24-.92-.62-.16-.37-.07-.8.21-1.09l6.63-6.63.07-.07q.28-.22.64-.22M4.9 19h6.02c.12 0 .21-.1.21-.2v-2l-2.01-2.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

SliceBoldDuotone.displayName = 'SliceBoldDuotone';

// Triple export pattern
export { SliceBoldDuotone, SliceBoldDuotone as SliceBoldDuotoneIcon, SliceBoldDuotone as SiSliceBoldDuotone };
export default SliceBoldDuotone;
export type { SliceBoldDuotoneProps };
