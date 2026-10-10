import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MatchaRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MatchaRegularDuotone = memo(
  forwardRef<SVGSVGElement, MatchaRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.76 11.62c1.18.88 1.99 2.03 1.99 3.38 0 1.82-1.45 3.26-3.34 4.2-1.94.97-4.56 1.55-7.41 1.55s-5.47-.58-7.4-1.54c-1.9-.95-3.35-2.4-3.35-4.21 0-1.35.81-2.5 1.99-3.38l.3.61q.2.37.44.71c-.85.68-1.23 1.4-1.23 2.06 0 .94.78 2 2.51 2.86 1.69.85 4.07 1.39 6.74 1.39s5.05-.54 6.74-1.39c1.73-.86 2.51-1.92 2.51-2.86 0-.66-.38-1.38-1.23-2.06q.23-.34.44-.7z" opacity={.4} />
        <path fillRule="evenodd" d="M12 3.25c2.53 0 4.85.28 6.56.76.85.24 1.6.53 2.14.89.52.34 1.05.86 1.05 1.6q0 .12-.02.23l-.23 2.19q-.2 1.81-1.04 3.31c-1.5 2.71-4.39 4.52-7.66 4.52h-1.6c-3.27 0-6.16-1.8-7.66-4.52q-.83-1.51-1.04-3.31l-.23-2.2-.02-.22c0-.74.53-1.26 1.05-1.6.54-.36 1.29-.65 2.14-.89 1.7-.48 4.03-.76 6.56-.76m8.04 5.21-.36.16-.03.01q-.38.15-.8.27l-.05.02-.42.12q-.64.16-1.37.3c-1.46.26-3.18.41-5.01.41-2.44 0-4.69-.26-6.38-.7q-.69-.2-1.27-.42l-.03-.01-.36-.16.03.3q.16 1.5.87 2.75c1.24 2.24 3.63 3.74 6.34 3.74h1.6c2.7 0 5.1-1.5 6.34-3.74q.7-1.25.87-2.75zM12 4.75c-2.44 0-4.62.28-6.16.7q-1.18.34-1.72.7c-.29.2-.35.31-.37.35l.08.12q.09.09.28.22l.13.08.16.09q.6.3 1.6.58c1.54.4 3.65.66 6 .66s4.46-.26 6-.66q1.16-.3 1.76-.67.22-.13.34-.24l.07-.06.06-.08.01-.03V6.5c-.01-.04-.07-.16-.36-.35q-.54-.36-1.72-.7c-1.54-.42-3.72-.7-6.16-.7" clipRule="evenodd" />
    </IconBase>
  ))
);

MatchaRegularDuotone.displayName = 'MatchaRegularDuotone';

// Triple export pattern
export { MatchaRegularDuotone, MatchaRegularDuotone as MatchaRegularDuotoneIcon, MatchaRegularDuotone as SiMatchaRegularDuotone };
export default MatchaRegularDuotone;
export type { MatchaRegularDuotoneProps };
