import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlignVerticalBottomBoldProps = Omit<IconBaseProps, 'children'>;

const AlignVerticalBottomBold = memo(
  forwardRef<SVGSVGElement, AlignVerticalBottomBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 20c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M8.65 2q.4 0 .74.02.36.01.77.2.57.3.87.87.19.42.2.77.02.34.02.74v11.3q0 .4-.02.74-.01.36-.2.77-.3.57-.87.87-.41.19-.77.2-.34.02-.74.02h-.8q-.4 0-.74-.02-.35-.01-.77-.2-.57-.3-.87-.87c-.14-.27-.18-.54-.2-.77q-.02-.34-.02-.74V4.6q0-.4.02-.74.01-.35.2-.77.26-.5.73-.8l.14-.07.2-.09q.3-.1.57-.11.34-.02.74-.02zm-.8 2-.58.01v.01c-.02.12-.02.28-.02.58v11.3l.01.58h.01c.12.02.28.02.58.02h.8l.58-.01v-.01c.02-.12.02-.28.02-.58V4.6l-.01-.58h-.01C9.1 4 8.95 4 8.65 4zM16.15 8q.4 0 .74.02.36.01.77.2.57.3.87.87.19.41.2.77.02.34.02.74v5.3q0 .4-.02.74-.01.36-.2.77-.3.57-.87.87-.41.19-.77.2-.34.02-.74.02h-.8q-.4 0-.74-.02-.36-.01-.77-.2-.57-.3-.87-.87-.19-.41-.2-.77-.02-.34-.02-.74v-5.3q0-.4.02-.74.01-.36.2-.77.26-.5.73-.8l.14-.07.2-.09q.3-.1.57-.11.34-.02.74-.02zm-.8 2-.58.01v.01c-.02.12-.02.28-.02.58v5.3l.01.58h.01c.12.02.28.02.58.02h.8l.58-.01v-.01c.02-.12.02-.28.02-.58v-5.3l-.01-.58h-.01c-.12-.02-.28-.02-.58-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

AlignVerticalBottomBold.displayName = 'AlignVerticalBottomBold';

// Triple export pattern
export { AlignVerticalBottomBold, AlignVerticalBottomBold as AlignVerticalBottomBoldIcon, AlignVerticalBottomBold as SiAlignVerticalBottomBold };
export default AlignVerticalBottomBold;
export type { AlignVerticalBottomBoldProps };
