import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomRegularDuotone = memo(
  forwardRef<SVGSVGElement, AtomRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.39 4.02c1.9-.89 3.98-1.22 5.4.2 1.41 1.4 1.08 3.5.2 5.4q-.57 1.16-1.42 2.38.86 1.2 1.41 2.39c.89 1.9 1.22 3.98-.2 5.4-1.4 1.41-3.5 1.08-5.4.2q-1.17-.56-2.38-1.42-1.2.86-2.39 1.41c-1.9.89-3.98 1.22-5.4-.2-1.41-1.4-1.08-3.5-.2-5.4q.56-1.17 1.42-2.38-.85-1.2-1.41-2.39c-.89-1.9-1.22-3.98.2-5.4 1.4-1.41 3.5-1.08 5.4-.2q1.17.56 2.38 1.42 1.2-.86 2.39-1.41m-8 9.24q-.61.91-1.01 1.76c-.85 1.8-.8 3.02-.1 3.7.68.7 1.9.75 3.7-.1q.85-.4 1.76-1-1.19-.97-2.29-2.07t-2.07-2.29m11.23 0q-.97 1.19-2.07 2.29t-2.29 2.07q.91.6 1.76 1c1.8.85 3.02.8 3.7.1.7-.68.75-1.9-.1-3.7q-.4-.85-1-1.76M12 7.3q-1.27.98-2.49 2.21Q8.3 10.72 7.3 12q.99 1.27 2.21 2.49T12 16.7q1.27-.98 2.49-2.21Q15.7 13.28 16.7 12q-.98-1.27-2.21-2.49Q13.27 8.3 12 7.3M8.98 5.38c-1.8-.85-3.02-.8-3.7-.1-.7.68-.75 1.9.1 3.7q.4.85 1 1.76.97-1.19 2.07-2.29t2.29-2.07q-.91-.6-1.76-1m9.75-.1c-.7-.7-1.9-.75-3.7.1q-.86.4-1.77 1 1.19.97 2.29 2.07t2.07 2.29q.6-.91 1-1.76c.85-1.8.8-3.02.1-3.7" clipRule="evenodd" opacity={.4} />
        <path d="M13.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5" />
    </IconBase>
  ))
);

AtomRegularDuotone.displayName = 'AtomRegularDuotone';

// Triple export pattern
export { AtomRegularDuotone, AtomRegularDuotone as AtomRegularDuotoneIcon, AtomRegularDuotone as SiAtomRegularDuotone };
export default AtomRegularDuotone;
export type { AtomRegularDuotoneProps };
