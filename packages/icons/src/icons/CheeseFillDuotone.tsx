import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheeseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheeseFillDuotone = memo(
  forwardRef<SVGSVGElement, CheeseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m20.13 17.22-5.27.58a2.87 2.87 0 0 0-5.73.2v.44l-5.26.58v-.28a2.88 2.88 0 0 0 0-5.48v-.48l8.38-.93a2.88 2.88 0 0 0 5.61-.62l2.27-.25z" opacity={0.4} />
        <path d="M14.16 4.97c.82.27 1.97.8 3.07 1.58.98.71 1.89 1.61 2.5 2.71l-2.83.32a.9.9 0 0 0-.77.87V11a1.13 1.13 0 1 1-2.25-.06.88.88 0 0 0-.97-.92l-6.72.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M13.57 3.24q.31-.17.66-.08c1.01.27 2.56.92 4.02 1.97a9.5 9.5 0 0 1 3.58 4.6q.05.13.05.27v8c0 .45-.34.82-.78.87l-7 .78a.9.9 0 0 1-.97-.87V18a1.13 1.13 0 0 0-2.26 0v1.22c0 .45-.33.82-.77.87l-7 .78a.9.9 0 0 1-.98-.87v-2c0-.48.4-.87.88-.87a1.13 1.13 0 0 0 0-2.25.9.9 0 0 1-.87-.88v-2c0-.28.13-.54.36-.7l11-8zm4.3 7.99a2.87 2.87 0 0 1-5.62.62l-8.37.93v.48a2.88 2.88 0 0 1 0 5.48v.28l5.25-.58V18a2.88 2.88 0 0 1 5.73-.2l5.27-.58v-6.24zm-11.68-.46 6.72-.75a.88.88 0 0 1 .96.98 1.13 1.13 0 0 0 2.26 0v-.56c0-.44.33-.81.77-.86l2.82-.32c-.6-1.1-1.5-2-2.5-2.71-1.09-.79-2.24-1.31-3.06-1.58z" clipRule="evenodd" />
    </IconBase>
  ))
);

CheeseFillDuotone.displayName = 'CheeseFillDuotone';

// Triple export pattern (lucide-react style)
export { CheeseFillDuotone, CheeseFillDuotone as CheeseFillDuotoneIcon, CheeseFillDuotone as SiCheeseFillDuotone };
export default CheeseFillDuotone;
export type { CheeseFillDuotoneProps };
