import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PepperBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PepperBoldDuotone = memo(
  forwardRef<SVGSVGElement, PepperBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m10.53 7.04-.06.27c-.08.96.56 1.78 1.16 2.35l.02.02c-1.24 2.8-2.71 4.53-4.32 6.4-.7.82-1.43 1.66-2.18 2.65a1 1 0 0 0-.13.65q.02.16.15.27c.09.09.26.2.6.28q1.06.25 2.95-.42a21.53 21.53 0 0 0 8.7-6.72l.15.03c.95.16 2.1.07 2.76-1.02l.05-.1c-1.16 2.6-3.82 5.35-6.63 7.33-1.42 1-2.92 1.83-4.34 2.36-1.4.52-2.85.78-4.1.49-1.27-.3-2.03-1.09-2.25-2.06-.19-.87.08-1.75.5-2.3q1.2-1.54 2.25-2.74c1.92-2.24 3.47-4.05 4.71-7.71zM10.57 6.95l-.03.07.01-.04z" opacity={0.4} />
        <path fillRule="evenodd" d="M17.18 1.42a1 1 0 0 1 1.4-.23q.93.65 1.26 1.53c.22.6.17 1.19-.01 1.67q-.2.53-.53.92a5.1 5.1 0 0 1 1.54 5.09 8 8 0 0 1-.51 1.4c-.7 1.16-1.97 1.2-2.95.98-1-.22-2.14-.76-3.23-1.35a12 12 0 0 1-2.53-1.77c-.6-.57-1.23-1.4-1.15-2.35a1 1 0 0 1 .1-.36v-.01l.02-.04a9 9 0 0 1 .86-1.35 5.7 5.7 0 0 1 6.13-1.3q.25-.27.37-.55a.4.4 0 0 0 .01-.3c-.03-.1-.15-.3-.54-.59a1 1 0 0 1-.24-1.39m.09 4.88a3.7 3.7 0 0 0-4.38.64l-.03.04-.09.12-.19.32-.08.15c.05.11.18.33.51.65q.74.7 2.1 1.45c1.07.59 2 1 2.7 1.16.56.12.73.02.78-.04q.21-.46.3-.87v-.01a3.2 3.2 0 0 0-1.62-3.61" clipRule="evenodd" />
    </IconBase>
  ))
);

PepperBoldDuotone.displayName = 'PepperBoldDuotone';

// Triple export pattern (lucide-react style)
export { PepperBoldDuotone, PepperBoldDuotone as PepperBoldDuotoneIcon, PepperBoldDuotone as SiPepperBoldDuotone };
export default PepperBoldDuotone;
export type { PepperBoldDuotoneProps };
