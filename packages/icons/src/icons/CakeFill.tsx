import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CakeFillProps = Omit<IconBaseProps, 'children'>;

const CakeFill = memo(
  forwardRef<SVGSVGElement, CakeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="m12.53 1.3.03.03.07.06.26.21c.2.18.48.44.76.76.52.58 1.22 1.54 1.22 2.64 0 1.28-.84 2.37-2 2.74v.88H19c1.59 0 2.88 1.3 2.88 2.88V13c0 1-.38 1.9-1 2.6v1.7q.01.82-.04 1.38-.03.6-.28 1.13-.42.83-1.25 1.25-.54.25-1.13.28-.56.05-1.38.04H7.2q-.82.01-1.38-.04-.6-.03-1.13-.28-.83-.42-1.25-1.25-.25-.54-.28-1.13-.05-.56-.04-1.38v-1.7c-.62-.7-1-1.6-1-2.6v-1.5c0-1.59 1.3-2.87 2.88-2.87h6.13v-.9c-1.16-.36-2-1.45-2-2.73 0-1.1.7-2.06 1.22-2.64q.43-.48.76-.76.16-.14.26-.21l.07-.06.02-.02h.01V1.3L12 .9zM5 10.38c-.62 0-1.12.5-1.12 1.12V13c0 1.17.95 2.13 2.12 2.13s2.13-.96 2.13-2.13c0-.48.39-.87.87-.87s.88.39.88.87c0 1.17.95 2.13 2.12 2.13s2.13-.96 2.13-2.13c0-.48.39-.87.87-.87s.88.39.88.87c0 1.17.95 2.13 2.12 2.13s2.13-.96 2.13-2.13v-1.5c0-.62-.5-1.12-1.13-1.12zm7-7.22-.35.36c-.48.54-.78 1.08-.78 1.48 0 .62.5 1.13 1.13 1.13s1.12-.5 1.13-1.13c0-.4-.3-.94-.78-1.48z" clipRule="evenodd" />
    </IconBase>
  ))
);

CakeFill.displayName = 'CakeFill';

// Triple export pattern
export { CakeFill, CakeFill as CakeFillIcon, CakeFill as SiCakeFill };
export default CakeFill;
export type { CakeFillProps };
