import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheeseFillProps = Omit<IconBaseProps, 'children'>;

const CheeseFill = memo(
  forwardRef<SVGSVGElement, CheeseFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.57 3.24q.31-.17.66-.08c1.01.27 2.56.92 4.02 1.97s2.9 2.56 3.58 4.6q.05.13.05.27v8c0 .45-.34.82-.78.87l-7 .78q-.4.04-.68-.22-.3-.27-.3-.65V18c0-.62-.5-1.12-1.12-1.12s-1.12.5-1.12 1.12v1.22c0 .45-.34.82-.78.87l-7 .78q-.4.04-.68-.22-.3-.26-.3-.65v-2c0-.48.4-.87.88-.87.62 0 1.12-.5 1.13-1.13s-.5-1.12-1.13-1.12c-.48 0-.87-.4-.87-.88v-2c0-.28.13-.54.36-.7l11-8zm4.3 7.99c-.12 1.48-1.36 2.65-2.87 2.65-1.3 0-2.38-.86-2.75-2.03l-8.37.93v.48c1.15.37 2 1.46 2 2.74s-.85 2.37-2 2.74v.28l5.25-.58V18c0-1.59 1.28-2.87 2.87-2.87 1.52 0 2.76 1.18 2.86 2.67l5.27-.58v-6.24z" clipRule="evenodd" />
    </IconBase>
  ))
);

CheeseFill.displayName = 'CheeseFill';

// Triple export pattern
export { CheeseFill, CheeseFill as CheeseFillIcon, CheeseFill as SiCheeseFill };
export default CheeseFill;
export type { CheeseFillProps };
