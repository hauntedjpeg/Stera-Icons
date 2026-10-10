import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheeseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheeseFillDuotone = memo(
  forwardRef<SVGSVGElement, CheeseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m20.13 17.22-5.27.58c-.1-1.5-1.34-2.67-2.86-2.67-1.59 0-2.87 1.28-2.87 2.87v.44l-5.26.58v-.28c1.16-.37 2-1.46 2-2.74s-.84-2.37-2-2.74v-.48l8.38-.93c.37 1.17 1.46 2.03 2.75 2.03 1.51 0 2.75-1.17 2.86-2.65l2.27-.25z" opacity={0.4} />
        <path d="M14.16 4.97c.82.27 1.97.8 3.07 1.58.98.71 1.89 1.61 2.5 2.71l-2.83.32c-.44.05-.77.42-.77.87V11c0 .62-.5 1.13-1.13 1.13s-1.12-.5-1.12-1.13v-.06q.01-.4-.28-.69-.29-.27-.7-.23l-6.71.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M13.57 3.24q.31-.17.66-.08c1.01.27 2.56.92 4.02 1.97s2.9 2.56 3.58 4.6q.05.13.05.27v8c0 .45-.34.82-.78.87l-7 .78q-.4.04-.68-.22-.3-.27-.3-.65V18c0-.62-.5-1.12-1.12-1.12s-1.12.5-1.12 1.12v1.22c0 .45-.34.82-.78.87l-7 .78q-.4.04-.68-.22-.3-.26-.3-.65v-2c0-.48.4-.87.88-.87.62 0 1.12-.5 1.13-1.13s-.5-1.12-1.13-1.12c-.48 0-.87-.4-.87-.88v-2c0-.28.13-.54.36-.7l11-8zm4.3 7.99c-.12 1.48-1.36 2.65-2.87 2.65-1.3 0-2.38-.86-2.75-2.03l-8.37.93v.48c1.15.37 2 1.46 2 2.74s-.85 2.37-2 2.74v.28l5.25-.58V18c0-1.59 1.28-2.87 2.87-2.87 1.52 0 2.76 1.18 2.86 2.67l5.27-.58v-6.24zm-11.68-.46 6.72-.75q.39-.04.7.23.28.28.27.69V11c0 .62.5 1.13 1.12 1.13s1.12-.5 1.13-1.13v-.56c0-.44.33-.82.77-.86l2.82-.32c-.6-1.1-1.5-2-2.5-2.71-1.09-.79-2.24-1.31-3.06-1.58z" clipRule="evenodd" />
    </IconBase>
  ))
);

CheeseFillDuotone.displayName = 'CheeseFillDuotone';

// Triple export pattern
export { CheeseFillDuotone, CheeseFillDuotone as CheeseFillDuotoneIcon, CheeseFillDuotone as SiCheeseFillDuotone };
export default CheeseFillDuotone;
export type { CheeseFillDuotoneProps };
