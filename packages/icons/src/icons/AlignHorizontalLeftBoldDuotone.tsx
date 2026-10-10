import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignHorizontalLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignHorizontalLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlignHorizontalLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1" opacity={.4} />
        <path fillRule="evenodd" d="M13.4 12.75q.4 0 .74.02.36.01.77.2a2 2 0 0 1 .8.73l.07.14.09.2q.1.3.11.57.02.34.02.74v.8q0 .4-.02.74-.01.36-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02H8.1q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77q-.02-.34-.02-.74v-.8q0-.4.02-.74.01-.36.2-.77a2 2 0 0 1 .87-.87q.42-.19.77-.2.34-.02.74-.02zm-5.3 2-.58.01v.01l-.02.58v.8l.01.58h.01c.12.02.28.02.58.02h5.3l.58-.01.01-.01.01-.58v-.8l-.01-.58h-.01c-.12-.02-.28-.02-.58-.02zM19.4 5.25q.4 0 .74.02.36.01.77.2a2 2 0 0 1 .8.73l.07.14.09.2q.1.3.11.57.02.34.02.74v.8q0 .4-.02.74c-.02.23-.06.5-.2.77a2 2 0 0 1-.87.87q-.41.19-.77.2-.34.02-.74.02H8.1q-.4 0-.74-.02-.36-.01-.77-.2a2 2 0 0 1-.87-.87 2 2 0 0 1-.2-.77q-.02-.34-.02-.74v-.8q0-.4.02-.74.01-.35.2-.77a2 2 0 0 1 .87-.87c.27-.14.54-.18.77-.2q.34-.03.74-.02zm-11.3 2-.58.01v.01l-.02.58v.8l.01.58h.01c.12.02.28.02.58.02h11.3l.58-.01v-.01c.02-.12.02-.28.02-.58v-.8l-.01-.58h-.01l-.58-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignHorizontalLeftBoldDuotone.displayName = 'AlignHorizontalLeftBoldDuotone';

// Triple export pattern
export { AlignHorizontalLeftBoldDuotone, AlignHorizontalLeftBoldDuotone as AlignHorizontalLeftBoldDuotoneIcon, AlignHorizontalLeftBoldDuotone as SiAlignHorizontalLeftBoldDuotone };
export default AlignHorizontalLeftBoldDuotone;
export type { AlignHorizontalLeftBoldDuotoneProps };
