import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlugRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlugRegularDuotone = memo(
  forwardRef<SVGSVGElement, PlugRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.1 10.77c.8-.73 2.02-.7 2.78.05l5.3 5.3c.76.76.78 1.99.05 2.77l-.15.16-.01.02c-2.25 2.24-5.9 2.24-8.14 0s-2.24-5.89 0-8.14l.02-.01zm1.72 1.11c-.19-.19-.5-.2-.7 0l-.14.12c-1.64 1.67-1.64 4.35.01 6 1.66 1.66 4.34 1.66 6 .01l.14-.14c.18-.2.18-.5-.01-.7z" clipRule="evenodd" opacity={0.4} />
        <path d="M21.47 1.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L19.56 5.5q-.22-.3-.5-.57-.26-.26-.56-.5z" opacity={0.4} />
        <path d="M4.44 18.5q.22.3.5.57.26.27.56.49l-2.97 2.97c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06z" />
        <path fillRule="evenodd" d="M10.93 4.93c2.25-2.24 5.89-2.24 8.14 0 2.24 2.25 2.24 5.9 0 8.14l-.02.01-.16.15c-.78.73-2.01.7-2.77-.05l-.62-.62-1.47 1.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.47-1.47-1.94-1.94-1.47 1.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l1.47-1.47-.62-.62c-.76-.76-.78-1.98-.05-2.77l.15-.16zM18 6c-1.65-1.66-4.33-1.66-6-.01l-.13.14c-.18.2-.18.5.01.7l4.14 4.13.01.01 1.15 1.15c.19.19.5.2.7.01l.13-.14c1.65-1.66 1.65-4.34 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

PlugRegularDuotone.displayName = 'PlugRegularDuotone';

// Triple export pattern
export { PlugRegularDuotone, PlugRegularDuotone as PlugRegularDuotoneIcon, PlugRegularDuotone as SiPlugRegularDuotone };
export default PlugRegularDuotone;
export type { PlugRegularDuotoneProps };
