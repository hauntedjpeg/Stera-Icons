import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalBottomBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalBottomBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlignVerticalBottomBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.65 2q.4 0 .74.02.36.01.77.2.57.3.87.87.19.42.2.77.02.34.02.74v11.3q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02h-.8q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77q-.02-.34-.02-.74V4.6q0-.4.02-.74.01-.35.2-.77a2 2 0 0 1 .73-.8l.14-.07.2-.09q.3-.1.57-.11.34-.02.74-.02zm-.8 2-.58.01v.01l-.02.58v11.3l.01.58h.01c.12.02.28.02.58.02h.8l.59-.01v-.01l.01-.58V4.6l-.01-.58h-.01L8.65 4zM16.15 8q.4 0 .74.02.36.01.77.2.57.3.87.87.19.41.2.77.02.34.02.74v5.3q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02h-.8q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77q-.02-.34-.02-.74v-5.3q0-.4.02-.74.01-.36.2-.77a2 2 0 0 1 .73-.8l.14-.07.2-.09q.3-.1.57-.11.34-.02.74-.02zm-.8 2-.58.01v.01c-.02.12-.02.28-.02.58v5.3l.02.59.58.01h.8l.59-.01v-.01l.01-.58v-5.3l-.01-.58h-.01c-.12-.02-.28-.02-.58-.02z" clipRule="evenodd" />
        <path d="M21 20a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2z" opacity={.4} />
    </IconBase>
  ))
);

AlignVerticalBottomBoldDuotone.displayName = 'AlignVerticalBottomBoldDuotone';

// Triple export pattern (lucide-react style)
export { AlignVerticalBottomBoldDuotone, AlignVerticalBottomBoldDuotone as AlignVerticalBottomBoldDuotoneIcon, AlignVerticalBottomBoldDuotone as SiAlignVerticalBottomBoldDuotone };
export default AlignVerticalBottomBoldDuotone;
export type { AlignVerticalBottomBoldDuotoneProps };
