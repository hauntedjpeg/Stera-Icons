import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, EyeOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.68 7.97c.28-.3.76-.33 1.06-.05s.32.76.04 1.06Q3.57 10.31 2.82 12c1.63 3.72 5.15 6.25 9.18 6.25q1.18 0 2.28-.28c.4-.1.8.15.9.55s-.14.81-.54.91q-1.28.32-2.64.32c-4.81 0-8.9-3.1-10.7-7.47q-.1-.28 0-.56c.58-1.4 1.39-2.68 2.38-3.75M12 4.25c4.81 0 8.9 3.1 10.7 7.47q.1.28 0 .56c-.58 1.4-1.39 2.68-2.38 3.75-.28.3-.76.33-1.06.05s-.33-.76-.04-1.06q1.21-1.33 1.96-3.02C19.54 8.28 16.03 5.75 12 5.75q-1.18 0-2.28.28c-.4.1-.8-.15-.9-.55s.14-.81.54-.91q1.28-.32 2.64-.32" opacity={0.4} />
        <path d="M3.47 3.47c.3-.3.77-.3 1.06 0l16 16c.3.3.3.77 0 1.06s-.77.3-1.06 0l-16-16c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

EyeOffRegularDuotone.displayName = 'EyeOffRegularDuotone';

// Triple export pattern
export { EyeOffRegularDuotone, EyeOffRegularDuotone as EyeOffRegularDuotoneIcon, EyeOffRegularDuotone as SiEyeOffRegularDuotone };
export default EyeOffRegularDuotone;
export type { EyeOffRegularDuotoneProps };
