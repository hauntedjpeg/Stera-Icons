import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CakeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CakeFillDuotone = memo(
  forwardRef<SVGSVGElement, CakeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 10.38c.62 0 1.13.5 1.13 1.12V13a2.13 2.13 0 0 1-4.25 0 .88.88 0 0 0-1.76 0 2.13 2.13 0 0 1-4.24 0 .88.88 0 0 0-1.76 0 2.13 2.13 0 0 1-4.24 0v-1.5c0-.62.5-1.12 1.12-1.12zM12 3.16l.35.36c.48.54.78 1.08.78 1.48a1.13 1.13 0 0 1-2.26 0c0-.4.3-.94.78-1.48z" opacity={0.4} />
        <path fillRule="evenodd" d="m12.53 1.3.03.03.07.06a8 8 0 0 1 1.02.97c.52.58 1.22 1.54 1.22 2.64 0 1.28-.84 2.37-2 2.74v.88H19a2.9 2.9 0 0 1 2.88 2.88V13c0 1-.38 1.9-1 2.6v1.7q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H7.2q-.82.01-1.38-.04-.6-.03-1.13-.28a3 3 0 0 1-1.25-1.25 3 3 0 0 1-.28-1.13q-.05-.56-.04-1.38v-1.7c-.62-.7-1-1.6-1-2.6v-1.5A2.87 2.87 0 0 1 5 8.63h6.13v-.9a2.9 2.9 0 0 1-2-2.73c0-1.1.7-2.06 1.22-2.64a9 9 0 0 1 1.02-.97l.07-.06.02-.02h.01V1.3L12 .9zM15 15.45a3.87 3.87 0 0 1-6 0 3.9 3.9 0 0 1-4.12 1.26v.59c0 .57 0 .95.02 1.24.02.28.06.4.1.47q.16.32.49.5c.07.03.19.07.47.1l1.24.02h9.6c.57 0 .95 0 1.24-.03.28-.02.4-.06.47-.1q.32-.16.5-.49c.03-.07.07-.19.1-.47l.02-1.24v-.6A3.9 3.9 0 0 1 15 15.46M5 10.38c-.62 0-1.12.5-1.12 1.12V13a2.13 2.13 0 0 0 4.25 0 .88.88 0 0 1 1.74 0 2.13 2.13 0 0 0 4.26 0 .88.88 0 0 1 1.74 0 2.13 2.13 0 0 0 4.26 0v-1.5c0-.62-.5-1.12-1.13-1.12zm7-7.22-.35.36c-.48.54-.78 1.08-.78 1.48a1.13 1.13 0 0 0 2.26 0c0-.4-.3-.94-.78-1.48z" clipRule="evenodd" />
    </IconBase>
  ))
);

CakeFillDuotone.displayName = 'CakeFillDuotone';

// Triple export pattern
export { CakeFillDuotone, CakeFillDuotone as CakeFillDuotoneIcon, CakeFillDuotone as SiCakeFillDuotone };
export default CakeFillDuotone;
export type { CakeFillDuotoneProps };
