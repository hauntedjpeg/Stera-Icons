import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EditSquareFillProps = Omit<IconBaseProps, 'children'>;

const EditSquareFill = memo(
  forwardRef<SVGSVGElement, EditSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="edit-square-fill" {...props}>
      <path d="M11.5 3.62a.88.88 0 0 1 0 1.75H9.9c-1.13 0-1.93 0-2.56.06-.6.05-.98.14-1.26.29q-.9.46-1.36 1.36c-.15.28-.24.65-.3 1.26a35 35 0 0 0-.04 2.56v3.2c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.04 2.56.04h3.2c1.13 0 1.93 0 2.56-.05a3 3 0 0 0 1.26-.29q.9-.46 1.36-1.36c.15-.29.24-.65.3-1.26.04-.63.05-1.43.05-2.56v-1.6a.88.88 0 0 1 1.75 0v1.6q.02 1.64-.06 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48q-1.06.07-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06z" />
        <path d="M15.9 3.9a2.98 2.98 0 0 1 4.2 4.2l-7.5 7.51a1.5 1.5 0 0 1-.88.43l-3.66.46a.5.5 0 0 1-.56-.56l.46-3.66q.07-.5.43-.88z" />
    </IconBase>
  ))
);

EditSquareFill.displayName = 'EditSquareFill';

// Triple export pattern (lucide-react style)
export { EditSquareFill, EditSquareFill as EditSquareFillIcon, EditSquareFill as SiEditSquareFill };
export default EditSquareFill;
export type { EditSquareFillProps };
