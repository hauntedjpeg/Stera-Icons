import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashSquareFillProps = Omit<IconBaseProps, 'children'>;

const HashSquareFill = memo(
  forwardRef<SVGSVGElement, HashSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.13 13.13h-2.26v-2.26h2.26z" />
        <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36s-.22 1.63-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07s-1.63-.22-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56-.35-.68-.5-1.43-.57-2.31-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm1.5 4c-.48 0-.87.39-.87.87v1.63h-2.26V7.5c0-.48-.39-.87-.87-.87s-.87.39-.87.87v1.63H7.5c-.48 0-.87.39-.87.87s.39.88.87.88h1.63v2.24H7.5c-.48 0-.87.4-.87.88s.39.88.87.88h1.63v1.62c0 .48.39.88.87.88s.88-.4.88-.88v-1.62h2.24v1.62c0 .48.4.88.88.88s.88-.4.88-.88v-1.62h1.62c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-1.62v-2.26h1.62c.48 0 .88-.39.88-.87s-.4-.87-.88-.87h-1.62V7.5c0-.48-.4-.87-.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

HashSquareFill.displayName = 'HashSquareFill';

// Triple export pattern
export { HashSquareFill, HashSquareFill as HashSquareFillIcon, HashSquareFill as SiHashSquareFill };
export default HashSquareFill;
export type { HashSquareFillProps };
