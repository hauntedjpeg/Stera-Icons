import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EditSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EditSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, EditSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.5 3.63c.48 0 .88.39.88.87s-.4.88-.88.88H9.9c-1.13 0-1.93 0-2.56.05-.6.05-.98.14-1.26.29q-.9.46-1.36 1.36c-.15.28-.24.65-.3 1.26-.04.63-.04 1.43-.04 2.56v3.2c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h3.2c1.13 0 1.93 0 2.56-.06.6-.05.98-.14 1.26-.29q.9-.46 1.36-1.36c.15-.28.24-.65.3-1.26.04-.63.05-1.43.05-2.56v-1.6c0-.48.39-.87.87-.87s.88.39.88.87v1.6q.02 1.64-.06 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06z" opacity={.4} />
        <path d="M15.9 3.9c1.16-1.17 3.04-1.17 4.2 0 1.17 1.16 1.17 3.04 0 4.2l-7.5 7.51q-.37.37-.88.43l-3.66.46q-.23.02-.41-.15t-.15-.41l.46-3.66q.07-.5.43-.88z" />
    </IconBase>
  ))
);

EditSquareFillDuotone.displayName = 'EditSquareFillDuotone';

// Triple export pattern
export { EditSquareFillDuotone, EditSquareFillDuotone as EditSquareFillDuotoneIcon, EditSquareFillDuotone as SiEditSquareFillDuotone };
export default EditSquareFillDuotone;
export type { EditSquareFillDuotoneProps };
