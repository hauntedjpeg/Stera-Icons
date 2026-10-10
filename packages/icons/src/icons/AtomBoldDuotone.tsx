import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomBoldDuotone = memo(
  forwardRef<SVGSVGElement, AtomBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.28 3.8c1.92-.9 4.15-1.3 5.69.23 1.53 1.54 1.13 3.77.24 5.69q-.53 1.12-1.33 2.28.8 1.15 1.33 2.28c.9 1.92 1.3 4.15-.24 5.69-1.54 1.53-3.77 1.13-5.69.24q-1.12-.53-2.28-1.33-1.15.8-2.28 1.33c-1.91.9-4.15 1.3-5.69-.24-1.53-1.54-1.13-3.77-.24-5.69q.53-1.12 1.33-2.28-.8-1.16-1.33-2.28c-.9-1.92-1.3-4.15.25-5.69C5.57 2.5 7.8 2.9 9.72 3.8q1.13.53 2.28 1.33 1.16-.8 2.28-1.33m-7.87 9.88q-.48.75-.8 1.45c-.84 1.78-.73 2.85-.16 3.42s1.64.68 3.42-.15q.7-.34 1.44-.8-1.05-.89-2.04-1.87-.98-1-1.86-2.05m11.18 0q-.87 1.06-1.86 2.05t-2.05 1.86q.75.48 1.45.8c1.78.84 2.85.73 3.42.16s.68-1.64-.15-3.42q-.34-.7-.8-1.45M12 7.62q-1.17.94-2.3 2.07Q8.55 10.82 7.62 12q.93 1.18 2.07 2.31T12 16.38q1.18-.94 2.31-2.07T16.38 12q-.94-1.18-2.07-2.31T12 7.62M8.88 5.6c-1.78-.83-2.85-.72-3.42-.15s-.68 1.64.15 3.42q.34.7.8 1.45.89-1.06 1.87-2.05 1-.98 2.05-1.86-.75-.48-1.45-.8m9.68-.15c-.57-.57-1.64-.68-3.42.15q-.7.34-1.45.8 1.06.89 2.05 1.87.98 1 1.86 2.05.48-.75.8-1.45c.84-1.78.73-2.85.16-3.42" clipRule="evenodd" opacity={.4} />
        <path d="M13.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5" />
    </IconBase>
  ))
);

AtomBoldDuotone.displayName = 'AtomBoldDuotone';

// Triple export pattern
export { AtomBoldDuotone, AtomBoldDuotone as AtomBoldDuotoneIcon, AtomBoldDuotone as SiAtomBoldDuotone };
export default AtomBoldDuotone;
export type { AtomBoldDuotoneProps };
