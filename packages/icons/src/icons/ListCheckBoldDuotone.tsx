import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ListCheckBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ListCheckBoldDuotone = memo(
  forwardRef<SVGSVGElement, ListCheckBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 17c.55 0 1 .45 1 1s-.45 1-1 1H11c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1H11c-.55 0-1-.45-1-1s.45-1 1-1zM21 5c.55 0 1 .45 1 1s-.45 1-1 1H11c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M6.27 15.82c.38-.4 1-.43 1.41-.05s.43 1 .05 1.41l-2.8 3c-.2.22-.5.34-.8.32s-.58-.18-.75-.43l-1.2-1.71c-.32-.45-.2-1.08.25-1.4s1.07-.2 1.39.25l.5.7zM6.27 9.82c.38-.4 1-.43 1.41-.05s.43 1 .05 1.41l-2.8 3c-.2.22-.5.34-.8.32s-.58-.18-.75-.43l-1.2-1.71c-.32-.45-.2-1.08.25-1.4s1.07-.2 1.39.25l.5.7zM6.27 3.82c.38-.4 1-.43 1.41-.05s.43 1 .05 1.41l-2.8 3c-.2.22-.5.34-.8.32s-.58-.18-.75-.43l-1.2-1.71c-.32-.45-.2-1.08.25-1.4s1.07-.2 1.39.25l.5.7z" />
    </IconBase>
  ))
);

ListCheckBoldDuotone.displayName = 'ListCheckBoldDuotone';

// Triple export pattern
export { ListCheckBoldDuotone, ListCheckBoldDuotone as ListCheckBoldDuotoneIcon, ListCheckBoldDuotone as SiListCheckBoldDuotone };
export default ListCheckBoldDuotone;
export type { ListCheckBoldDuotoneProps };
