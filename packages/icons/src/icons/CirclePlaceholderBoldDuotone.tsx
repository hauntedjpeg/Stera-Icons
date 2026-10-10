import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderBoldDuotone = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m13.61 19.83-.48.09q-1.13.15-2.26 0l-6.79-6.79q-.15-1.13 0-2.26l.08-.48zM17.06 18.2q-.31.25-.65.48-.53.34-1.1.6L4.72 8.68q.27-.57.61-1.1.22-.32.48-.64zM19.28 15.32q-.26.56-.6 1.1-.22.32-.49.64L6.94 5.81q.31-.27.65-.49.52-.34 1.09-.6zM10.87 4.08q1.13-.15 2.26 0l6.79 6.79q.15 1.13 0 2.26l-.09.48-9.44-9.45z" opacity={0.4} />
        <path fillRule="evenodd" d="M10.59 2.1c3-.43 6.17.51 8.48 2.83 2.31 2.31 3.26 5.48 2.83 8.48-.2 1.44-.72 2.85-1.56 4.1q-.54.84-1.27 1.56-.72.72-1.55 1.27c-1.26.84-2.67 1.36-4.1 1.56-3.01.43-6.18-.52-8.5-2.83-2.3-2.31-3.25-5.48-2.82-8.48.2-1.44.72-2.85 1.56-4.1q.54-.84 1.27-1.56.72-.72 1.55-1.27c1.26-.84 2.67-1.36 4.1-1.56m7.07 4.24c-1.85-1.85-4.38-2.6-6.8-2.26-1.15.16-2.27.58-3.27 1.24q-.66.44-1.25 1.02-.58.59-1.02 1.25c-.66 1-1.08 2.12-1.24 3.28-.34 2.4.41 4.94 2.26 6.79s4.38 2.6 6.8 2.26c1.14-.16 2.27-.58 3.27-1.24q.66-.44 1.25-1.02.58-.6 1.02-1.25c.66-1 1.08-2.13 1.24-3.28.34-2.4-.41-4.94-2.26-6.79" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderBoldDuotone.displayName = 'CirclePlaceholderBoldDuotone';

// Triple export pattern
export { CirclePlaceholderBoldDuotone, CirclePlaceholderBoldDuotone as CirclePlaceholderBoldDuotoneIcon, CirclePlaceholderBoldDuotone as SiCirclePlaceholderBoldDuotone };
export default CirclePlaceholderBoldDuotone;
export type { CirclePlaceholderBoldDuotoneProps };
