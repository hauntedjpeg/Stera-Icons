import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalCenterBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalCenterBoldDuotone = memo(
  forwardRef<SVGSVGElement, AlignVerticalCenterBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.25 13H3c-.55 0-1-.45-1-1s.45-1 1-1h2.25zM21 11c.55 0 1 .45 1 1s-.45 1-1 1h-2.25v-2zM12.75 13h-1.5v-2h1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M8.65 3q.4 0 .74.02.36.01.77.2.57.3.87.87.19.42.2.77.02.34.02.74v12.8q0 .4-.02.74-.01.36-.2.77-.3.57-.87.87-.41.19-.77.2-.34.02-.74.02h-.8q-.4 0-.74-.02-.25-.01-.57-.11l-.2-.09-.14-.07q-.46-.3-.73-.8c-.14-.27-.18-.54-.2-.77q-.02-.34-.02-.74V5.6q0-.4.02-.74.01-.35.2-.77.3-.57.87-.87.42-.19.77-.2.34-.02.74-.02zm-.8 2-.58.01v.01c-.02.12-.02.28-.02.58v12.8l.01.58h.01c.12.02.28.02.58.02h.8l.58-.01v-.01c.02-.12.02-.28.02-.58V5.6l-.01-.58h-.01C9.1 5 8.95 5 8.65 5zM16.15 6q.4 0 .74.02.36.01.77.2.57.3.87.87.19.42.2.77.02.34.02.74v6.8q0 .4-.02.74-.01.36-.2.77-.3.57-.87.87-.41.19-.77.2-.34.02-.74.02h-.8q-.4 0-.74-.02-.25-.01-.57-.11l-.2-.09-.14-.07q-.46-.3-.73-.8-.19-.41-.2-.77-.02-.34-.02-.74V8.6q0-.4.02-.74.01-.35.2-.77.3-.57.87-.87c.27-.14.54-.18.77-.2q.34-.03.74-.02zm-.8 2-.58.01v.01c-.02.12-.02.28-.02.58v6.8l.01.58h.01c.12.02.28.02.58.02h.8l.58-.01v-.01c.02-.12.02-.28.02-.58V8.6l-.01-.58h-.01C16.6 8 16.45 8 16.15 8z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalCenterBoldDuotone.displayName = 'AlignVerticalCenterBoldDuotone';

// Triple export pattern
export { AlignVerticalCenterBoldDuotone, AlignVerticalCenterBoldDuotone as AlignVerticalCenterBoldDuotoneIcon, AlignVerticalCenterBoldDuotone as SiAlignVerticalCenterBoldDuotone };
export default AlignVerticalCenterBoldDuotone;
export type { AlignVerticalCenterBoldDuotoneProps };
