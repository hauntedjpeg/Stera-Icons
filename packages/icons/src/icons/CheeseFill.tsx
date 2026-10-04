import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheeseFillProps = Omit<IconBaseProps, 'children'>;

const CheeseFill = memo(
  forwardRef<SVGSVGElement, CheeseFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.57 3.24q.31-.17.66-.08c1.01.27 2.56.92 4.02 1.97a9.5 9.5 0 0 1 3.58 4.6q.05.13.05.27v8c0 .45-.34.82-.78.87l-7 .78a.9.9 0 0 1-.97-.87V18a1.13 1.13 0 0 0-2.26 0v1.22c0 .45-.33.82-.77.87l-7 .78a.9.9 0 0 1-.98-.87v-2c0-.48.4-.87.88-.87a1.13 1.13 0 0 0 0-2.25.9.9 0 0 1-.87-.88v-2c0-.28.13-.54.36-.7l11-8zm4.3 7.99a2.87 2.87 0 0 1-5.62.62l-8.37.93v.48a2.88 2.88 0 0 1 0 5.48v.28l5.25-.58V18a2.88 2.88 0 0 1 5.73-.2l5.27-.58v-6.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

CheeseFill.displayName = 'CheeseFill';

// Triple export pattern (lucide-react style)
export { CheeseFill, CheeseFill as CheeseFillIcon, CheeseFill as SiCheeseFill };
export default CheeseFill;
export type { CheeseFillProps };
